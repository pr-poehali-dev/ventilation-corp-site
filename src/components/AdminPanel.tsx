import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import { useContentStore, ContentItem } from '@/store/contentStore';
import { toast } from 'sonner';

const AdminPanel = () => {
  const { content, isAdminMode, setAdminMode, updateContent, addContent, deleteContent } = useContentStore();
  const [selectedPage, setSelectedPage] = useState<string>('home');
  const [editingItem, setEditingItem] = useState<ContentItem | null>(null);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [newItem, setNewItem] = useState<Partial<ContentItem>>({
    type: 'text',
    page: 'home',
    section: 'main',
    value: '',
    metadata: {}
  });

  useEffect(() => {
    useContentStore.getState().initializeDefaultContent();
  }, []);

  const pages = ['home', 'services', 'products', 'projects', 'certificates', 'contacts'];
  
  const getContentByPage = (page: string) => {
    return content.filter(item => item.page === page);
  };

  const handleSave = (item: ContentItem, newValue: string, newMetadata?: any) => {
    updateContent(item.id, newValue, newMetadata);
    setEditingItem(null);
    toast.success('Контент обновлен');
  };

  const handleAddItem = () => {
    if (newItem.value && newItem.page && newItem.section && newItem.type) {
      addContent(newItem as Omit<ContentItem, 'id'>);
      setNewItem({
        type: 'text',
        page: 'home',
        section: 'main',
        value: '',
        metadata: {}
      });
      setIsAddDialogOpen(false);
      toast.success('Элемент добавлен');
    }
  };

  const handleDeleteItem = (id: string) => {
    deleteContent(id);
    toast.success('Элемент удален');
  };

  const uploadImage = (file: File): Promise<string> => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        resolve(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    });
  };

  const handleImageUpload = async (item: ContentItem, file: File) => {
    try {
      const imageUrl = await uploadImage(file);
      updateContent(item.id, imageUrl, { ...item.metadata, alt: item.metadata?.alt || file.name });
      toast.success('Изображение загружено');
    } catch (error) {
      toast.error('Ошибка загрузки изображения');
    }
  };

  if (!isAdminMode) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <Button
          onClick={() => setAdminMode(true)}
          className="bg-purple-600 hover:bg-purple-700 text-white shadow-lg"
        >
          <Icon name="Settings" className="h-4 w-4 mr-2" />
          Админ панель
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-6xl h-[90vh] overflow-hidden">
        <CardHeader className="border-b">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Settings" className="h-5 w-5" />
                Админ панель
              </CardTitle>
              <CardDescription>
                Управление всем контентом сайта
              </CardDescription>
            </div>
            <div className="flex gap-2">
              <Button
                onClick={() => setIsAddDialogOpen(true)}
                variant="outline"
              >
                <Icon name="Plus" className="h-4 w-4 mr-2" />
                Добавить элемент
              </Button>
              <Button
                onClick={() => setAdminMode(false)}
                variant="outline"
              >
                <Icon name="X" className="h-4 w-4 mr-2" />
                Закрыть
              </Button>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="p-0 h-full overflow-y-auto">
          <Tabs value={selectedPage} onValueChange={setSelectedPage} className="h-full">
            <div className="border-b p-4">
              <TabsList className="grid w-full grid-cols-6">
                {pages.map((page) => (
                  <TabsTrigger key={page} value={page} className="capitalize">
                    {page === 'home' ? 'Главная' : 
                     page === 'services' ? 'Услуги' :
                     page === 'products' ? 'Продукция' :
                     page === 'projects' ? 'Проекты' :
                     page === 'certificates' ? 'Сертификаты' : 'Контакты'}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            
            {pages.map((page) => (
              <TabsContent key={page} value={page} className="p-4 space-y-4">
                <div className="grid gap-4">
                  {getContentByPage(page).map((item) => (
                    <Card key={item.id} className="relative">
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Badge variant="outline">{item.type}</Badge>
                            <Badge variant="secondary">{item.section}</Badge>
                          </div>
                          <div className="flex gap-2">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => setEditingItem(item)}
                            >
                              <Icon name="Edit" className="h-3 w-3" />
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => handleDeleteItem(item.id)}
                            >
                              <Icon name="Trash" className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        {item.type === 'image' ? (
                          <div className="space-y-2">
                            <img 
                              src={item.value} 
                              alt={item.metadata?.alt || 'Изображение'} 
                              className="w-32 h-32 object-cover rounded border"
                            />
                            <input
                              type="file"
                              accept="image/*"
                              onChange={(e) => {
                                const file = e.target.files?.[0];
                                if (file) {
                                  handleImageUpload(item, file);
                                }
                              }}
                              className="text-sm"
                            />
                          </div>
                        ) : (
                          <p className="text-sm text-gray-600 break-words">
                            {item.value}
                          </p>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>

      {/* Edit Dialog */}
      <Dialog open={editingItem !== null} onOpenChange={() => setEditingItem(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Редактировать контент</DialogTitle>
            <DialogDescription>
              Измените содержимое элемента
            </DialogDescription>
          </DialogHeader>
          
          {editingItem && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Тип</Label>
                  <Badge variant="outline">{editingItem.type}</Badge>
                </div>
                <div>
                  <Label>Раздел</Label>
                  <Badge variant="secondary">{editingItem.section}</Badge>
                </div>
              </div>
              
              {editingItem.type === 'image' ? (
                <div className="space-y-4">
                  <div>
                    <Label>Текущее изображение</Label>
                    <img 
                      src={editingItem.value} 
                      alt={editingItem.metadata?.alt || 'Изображение'} 
                      className="w-48 h-48 object-cover rounded border mt-2"
                    />
                  </div>
                  <div>
                    <Label>Загрузить новое изображение</Label>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          handleImageUpload(editingItem, file);
                        }
                      }}
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label>Alt текст</Label>
                    <Input
                      value={editingItem.metadata?.alt || ''}
                      onChange={(e) => {
                        updateContent(editingItem.id, editingItem.value, {
                          ...editingItem.metadata,
                          alt: e.target.value
                        });
                      }}
                      placeholder="Описание изображения"
                    />
                  </div>
                </div>
              ) : (
                <div>
                  <Label>Содержимое</Label>
                  {editingItem.type === 'description' ? (
                    <Textarea
                      value={editingItem.value}
                      onChange={(e) => {
                        updateContent(editingItem.id, e.target.value);
                      }}
                      className="mt-2"
                      rows={4}
                    />
                  ) : (
                    <Input
                      value={editingItem.value}
                      onChange={(e) => {
                        updateContent(editingItem.id, e.target.value);
                      }}
                      className="mt-2"
                    />
                  )}
                </div>
              )}
              
              {editingItem.type === 'button' && (
                <div>
                  <Label>Ссылка</Label>
                  <Input
                    value={editingItem.metadata?.href || ''}
                    onChange={(e) => {
                      updateContent(editingItem.id, editingItem.value, {
                        ...editingItem.metadata,
                        href: e.target.value
                      });
                    }}
                    placeholder="/services"
                    className="mt-2"
                  />
                </div>
              )}
            </div>
          )}
          
          <DialogFooter>
            <Button onClick={() => setEditingItem(null)} variant="outline">
              Отмена
            </Button>
            <Button onClick={() => editingItem && handleSave(editingItem, editingItem.value, editingItem.metadata)}>
              Сохранить
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Add Dialog */}
      <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Добавить новый элемент</DialogTitle>
            <DialogDescription>
              Создайте новый элемент контента
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Страница</Label>
                <Select value={newItem.page} onValueChange={(value) => setNewItem({...newItem, page: value})}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {pages.map((page) => (
                      <SelectItem key={page} value={page}>{page}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label>Тип</Label>
                <Select value={newItem.type} onValueChange={(value) => setNewItem({...newItem, type: value as any})}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="text">Текст</SelectItem>
                    <SelectItem value="title">Заголовок</SelectItem>
                    <SelectItem value="description">Описание</SelectItem>
                    <SelectItem value="button">Кнопка</SelectItem>
                    <SelectItem value="image">Изображение</SelectItem>
                    <SelectItem value="card">Карточка</SelectItem>
                    <SelectItem value="list">Список</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div>
              <Label>Раздел</Label>
              <Input
                value={newItem.section}
                onChange={(e) => setNewItem({...newItem, section: e.target.value})}
                placeholder="hero, services, about..."
              />
            </div>
            
            <div>
              <Label>Содержимое</Label>
              <Textarea
                value={newItem.value}
                onChange={(e) => setNewItem({...newItem, value: e.target.value})}
                placeholder="Введите текст или URL изображения"
              />
            </div>
          </div>
          
          <DialogFooter>
            <Button onClick={() => setIsAddDialogOpen(false)} variant="outline">
              Отмена
            </Button>
            <Button onClick={handleAddItem}>
              Добавить
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminPanel;
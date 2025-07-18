import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

interface AdminPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const AdminPanel: React.FC<AdminPanelProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('services');
  const [services, setServices] = useState([
    { id: 1, title: 'Проектирование', description: 'Разработка проектов вентиляции с учетом всех требований и норм', icon: 'Settings' },
    { id: 2, title: 'Монтаж', description: 'Профессиональная установка систем вентиляции любой сложности', icon: 'Wrench' },
    { id: 3, title: 'Обслуживание', description: 'Техническое обслуживание и ремонт вентиляционных систем', icon: 'ShieldCheck' }
  ]);

  const [projects, setProjects] = useState([
    { id: 1, title: 'Торговый центр', area: '15,000 м²', type: 'Приточно-вытяжная вентиляция', status: 'Завершен', image: '/img/c9b59a89-bfd6-4245-982b-8496c335fbb9.jpg' },
    { id: 2, title: 'Производственный цех', area: '8,500 м²', type: 'Промышленная вентиляция', status: 'Завершен', image: '/img/e0dd3f82-89d5-4177-afb0-1825eda98241.jpg' }
  ]);

  const [contacts, setContacts] = useState({
    address: 'г. Москва, ул. Промышленная, д. 15',
    phone: '+7 (495) 123-45-67',
    email: 'info@ventstroi.ru',
    hours: 'Пн-Пт: 8:00-18:00, Сб: 9:00-15:00'
  });

  const handleServiceUpdate = (id: number, field: string, value: string) => {
    setServices(prev => prev.map(service => 
      service.id === id ? { ...service, [field]: value } : service
    ));
  };

  const handleProjectUpdate = (id: number, field: string, value: string) => {
    setProjects(prev => prev.map(project => 
      project.id === id ? { ...project, [field]: value } : project
    ));
  };

  const handleContactUpdate = (field: string, value: string) => {
    setContacts(prev => ({ ...prev, [field]: value }));
  };

  const addNewService = () => {
    const newService = {
      id: Date.now(),
      title: 'Новая услуга',
      description: 'Описание новой услуги',
      icon: 'Plus'
    };
    setServices(prev => [...prev, newService]);
  };

  const addNewProject = () => {
    const newProject = {
      id: Date.now(),
      title: 'Новый проект',
      area: '0 м²',
      type: 'Тип проекта',
      status: 'В процессе',
      image: '/img/placeholder.svg'
    };
    setProjects(prev => [...prev, newProject]);
  };

  const deleteService = (id: number) => {
    setServices(prev => prev.filter(service => service.id !== id));
  };

  const deleteProject = (id: number) => {
    setProjects(prev => prev.filter(project => project.id !== id));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-6xl max-h-[90vh] overflow-auto">
        <div className="flex items-center justify-between p-6 border-b">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Админ панель</h2>
            <p className="text-gray-600">Управление контентом сайта</p>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <Icon name="X" className="h-5 w-5" />
          </Button>
        </div>

        <div className="p-6">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="services">Услуги</TabsTrigger>
              <TabsTrigger value="projects">Проекты</TabsTrigger>
              <TabsTrigger value="contacts">Контакты</TabsTrigger>
              <TabsTrigger value="settings">Настройки</TabsTrigger>
            </TabsList>

            <TabsContent value="services" className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Управление услугами</h3>
                <Button onClick={addNewService} className="flex items-center gap-2">
                  <Icon name="Plus" className="h-4 w-4" />
                  Добавить услугу
                </Button>
              </div>
              
              <div className="grid gap-4">
                {services.map((service) => (
                  <Card key={service.id}>
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-base">Услуга #{service.id}</CardTitle>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => deleteService(service.id)}
                          className="text-red-600 hover:text-red-700"
                        >
                          <Icon name="Trash2" className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor={`service-title-${service.id}`}>Название</Label>
                          <Input
                            id={`service-title-${service.id}`}
                            value={service.title}
                            onChange={(e) => handleServiceUpdate(service.id, 'title', e.target.value)}
                          />
                        </div>
                        <div>
                          <Label htmlFor={`service-icon-${service.id}`}>Иконка</Label>
                          <Input
                            id={`service-icon-${service.id}`}
                            value={service.icon}
                            onChange={(e) => handleServiceUpdate(service.id, 'icon', e.target.value)}
                          />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor={`service-description-${service.id}`}>Описание</Label>
                        <Textarea
                          id={`service-description-${service.id}`}
                          value={service.description}
                          onChange={(e) => handleServiceUpdate(service.id, 'description', e.target.value)}
                          rows={3}
                        />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="projects" className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Управление проектами</h3>
                <Button onClick={addNewProject} className="flex items-center gap-2">
                  <Icon name="Plus" className="h-4 w-4" />
                  Добавить проект
                </Button>
              </div>
              
              <div className="grid gap-4">
                {projects.map((project) => (
                  <Card key={project.id}>
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-base">Проект #{project.id}</CardTitle>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => deleteProject(project.id)}
                          className="text-red-600 hover:text-red-700"
                        >
                          <Icon name="Trash2" className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor={`project-title-${project.id}`}>Название</Label>
                          <Input
                            id={`project-title-${project.id}`}
                            value={project.title}
                            onChange={(e) => handleProjectUpdate(project.id, 'title', e.target.value)}
                          />
                        </div>
                        <div>
                          <Label htmlFor={`project-area-${project.id}`}>Площадь</Label>
                          <Input
                            id={`project-area-${project.id}`}
                            value={project.area}
                            onChange={(e) => handleProjectUpdate(project.id, 'area', e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor={`project-type-${project.id}`}>Тип</Label>
                          <Input
                            id={`project-type-${project.id}`}
                            value={project.type}
                            onChange={(e) => handleProjectUpdate(project.id, 'type', e.target.value)}
                          />
                        </div>
                        <div>
                          <Label htmlFor={`project-status-${project.id}`}>Статус</Label>
                          <Input
                            id={`project-status-${project.id}`}
                            value={project.status}
                            onChange={(e) => handleProjectUpdate(project.id, 'status', e.target.value)}
                          />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor={`project-image-${project.id}`}>Изображение (URL)</Label>
                        <Input
                          id={`project-image-${project.id}`}
                          value={project.image}
                          onChange={(e) => handleProjectUpdate(project.id, 'image', e.target.value)}
                        />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="contacts" className="space-y-4">
              <h3 className="text-lg font-semibold">Управление контактами</h3>
              
              <Card>
                <CardHeader>
                  <CardTitle>Контактная информация</CardTitle>
                  <CardDescription>Редактировать контактные данные компании</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="contact-address">Адрес</Label>
                    <Input
                      id="contact-address"
                      value={contacts.address}
                      onChange={(e) => handleContactUpdate('address', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="contact-phone">Телефон</Label>
                    <Input
                      id="contact-phone"
                      value={contacts.phone}
                      onChange={(e) => handleContactUpdate('phone', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="contact-email">Email</Label>
                    <Input
                      id="contact-email"
                      value={contacts.email}
                      onChange={(e) => handleContactUpdate('email', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="contact-hours">Режим работы</Label>
                    <Input
                      id="contact-hours"
                      value={contacts.hours}
                      onChange={(e) => handleContactUpdate('hours', e.target.value)}
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="settings" className="space-y-4">
              <h3 className="text-lg font-semibold">Настройки сайта</h3>
              
              <Card>
                <CardHeader>
                  <CardTitle>Общие настройки</CardTitle>
                  <CardDescription>Основные параметры сайта</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="site-name">Название сайта</Label>
                    <Input id="site-name" defaultValue="ВентСтрой" />
                  </div>
                  <div>
                    <Label htmlFor="site-description">Описание</Label>
                    <Textarea 
                      id="site-description" 
                      defaultValue="Профессиональные решения в области вентиляции и кондиционирования"
                      rows={3}
                    />
                  </div>
                  <div>
                    <Label htmlFor="site-keywords">Ключевые слова</Label>
                    <Input id="site-keywords" defaultValue="вентиляция, кондиционирование, монтаж" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Резервное копирование</CardTitle>
                  <CardDescription>Создание и восстановление резервных копий</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex gap-4">
                    <Button variant="outline">
                      <Icon name="Download" className="h-4 w-4 mr-2" />
                      Скачать резервную копию
                    </Button>
                    <Button variant="outline">
                      <Icon name="Upload" className="h-4 w-4 mr-2" />
                      Загрузить резервную копию
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <Separator className="my-6" />
          
          <div className="flex justify-end gap-4">
            <Button variant="outline" onClick={onClose}>
              Отменить
            </Button>
            <Button>
              Сохранить изменения
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
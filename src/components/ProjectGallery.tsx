import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

interface Project {
  id: number;
  title: string;
  area: string;
  type: string;
  status: string;
  image: string;
  description?: string;
  completedDate?: string;
  client?: string;
  features?: string[];
}

const ProjectGallery: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const projects: Project[] = [
    {
      id: 1,
      title: 'Торговый центр "Европа"',
      area: '15,000 м²',
      type: 'Приточно-вытяжная вентиляция',
      status: 'Завершен',
      image: '/img/c9b59a89-bfd6-4245-982b-8496c335fbb9.jpg',
      description: 'Комплексная система вентиляции для крупного торгового центра с зонированием по типам помещений.',
      completedDate: 'Декабрь 2023',
      client: 'ООО "Торговые центры"',
      features: [
        'Приточно-вытяжная вентиляция',
        'Системы кондиционирования',
        'Дымоудаление',
        'Автоматическое управление'
      ]
    },
    {
      id: 2,
      title: 'Производственный цех',
      area: '8,500 м²',
      type: 'Промышленная вентиляция',
      status: 'Завершен',
      image: '/img/e0dd3f82-89d5-4177-afb0-1825eda98241.jpg',
      description: 'Специализированная вентиляционная система для производственного цеха с очисткой воздуха.',
      completedDate: 'Октябрь 2023',
      client: 'ООО "Производство+"',
      features: [
        'Местная вытяжная вентиляция',
        'Системы очистки воздуха',
        'Взрывобезопасное оборудование',
        'Рекуперация тепла'
      ]
    },
    {
      id: 3,
      title: 'Офисный центр "Технопарк"',
      area: '12,000 м²',
      type: 'Комфортная вентиляция',
      status: 'Завершен',
      image: '/img/493742ed-01d1-4b60-a865-c5f8c767e153.jpg',
      description: 'Система комфортной вентиляции для современного офисного здания с энергосберегающими технологиями.',
      completedDate: 'Ноябрь 2023',
      client: 'ООО "Технопарк"',
      features: [
        'VAV системы',
        'Рекуперация тепла',
        'Умное управление',
        'Зонирование по этажам'
      ]
    },
    {
      id: 4,
      title: 'Складской комплекс',
      area: '20,000 м²',
      type: 'Вытяжная вентиляция',
      status: 'Завершен',
      image: '/img/c9b59a89-bfd6-4245-982b-8496c335fbb9.jpg',
      description: 'Система вентиляции для логистического комплекса с естественной и принудительной вентиляцией.',
      completedDate: 'Сентябрь 2023',
      client: 'ООО "Логистика"',
      features: [
        'Естественная вентиляция',
        'Принудительная вытяжка',
        'Противодымная защита',
        'Автоматизация'
      ]
    },
    {
      id: 5,
      title: 'Медицинский центр',
      area: '3,500 м²',
      type: 'Чистые помещения',
      status: 'Завершен',
      image: '/img/e0dd3f82-89d5-4177-afb0-1825eda98241.jpg',
      description: 'Специализированная вентиляция для медицинского центра с системами обеспечения чистоты воздуха.',
      completedDate: 'Август 2023',
      client: 'ООО "Медицина+"',
      features: [
        'HEPA фильтрация',
        'Ламинарные потоки',
        'Избыточное давление',
        'Бактерицидные лампы'
      ]
    },
    {
      id: 6,
      title: 'Пищевое производство',
      area: '6,000 м²',
      type: 'Специальная вентиляция',
      status: 'Завершен',
      image: '/img/493742ed-01d1-4b60-a865-c5f8c767e153.jpg',
      description: 'Вентиляция для пищевого производства с соблюдением всех санитарных норм.',
      completedDate: 'Июль 2023',
      client: 'ООО "Пищепром"',
      features: [
        'Гигиеническое исполнение',
        'Контроль влажности',
        'Удаление запахов',
        'Температурный контроль'
      ]
    }
  ];

  const projectTypes = ['all', 'Приточно-вытяжная вентиляция', 'Промышленная вентиляция', 'Комфортная вентиляция', 'Вытяжная вентиляция', 'Чистые помещения', 'Специальная вентиляция'];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.type === filter);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Завершен':
        return 'bg-green-100 text-green-800';
      case 'В процессе':
        return 'bg-blue-100 text-blue-800';
      case 'Планируется':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Галерея проектов
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Наши реализованные проекты в различных отраслях
        </p>
      </div>

      {/* Фильтры */}
      <div className="flex flex-wrap gap-2 justify-center">
        {projectTypes.map((type) => (
          <Button
            key={type}
            variant={filter === type ? "default" : "outline"}
            onClick={() => setFilter(type)}
            className="text-sm"
          >
            {type === 'all' ? 'Все проекты' : type}
          </Button>
        ))}
      </div>

      {/* Сетка проектов */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="aspect-video bg-gray-100 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-lg text-gray-900 line-clamp-2">
                  {project.title}
                </h3>
                <Badge className={getStatusColor(project.status)}>
                  {project.status}
                </Badge>
              </div>
              
              <div className="space-y-2 text-sm text-gray-600 mb-4">
                <div className="flex justify-between">
                  <span>Площадь:</span>
                  <span className="font-medium">{project.area}</span>
                </div>
                <div className="flex justify-between">
                  <span>Тип:</span>
                  <span className="font-medium text-xs">{project.type}</span>
                </div>
              </div>

              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" className="w-full" onClick={() => setSelectedProject(project)}>
                    <Icon name="Eye" className="h-4 w-4 mr-2" />
                    Подробнее
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl">
                  <DialogHeader>
                    <DialogTitle>{project.title}</DialogTitle>
                  </DialogHeader>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-64 object-cover rounded-lg"
                      />
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Описание проекта</h4>
                        <p className="text-gray-600">{project.description}</p>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-gray-500">Площадь:</span>
                          <div className="font-medium">{project.area}</div>
                        </div>
                        <div>
                          <span className="text-gray-500">Статус:</span>
                          <div>
                            <Badge className={getStatusColor(project.status)}>
                              {project.status}
                            </Badge>
                          </div>
                        </div>
                        <div>
                          <span className="text-gray-500">Завершен:</span>
                          <div className="font-medium">{project.completedDate}</div>
                        </div>
                        <div>
                          <span className="text-gray-500">Заказчик:</span>
                          <div className="font-medium">{project.client}</div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Особенности проекта</h4>
                        <ul className="space-y-1">
                          {project.features?.map((feature, index) => (
                            <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                              <Icon name="CheckCircle" className="h-4 w-4 text-green-600" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Показать больше проектов */}
      <div className="text-center">
        <Button variant="outline" size="lg">
          <Icon name="Plus" className="h-4 w-4 mr-2" />
          Показать еще проекты
        </Button>
      </div>
    </div>
  );
};

export default ProjectGallery;
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useState } from 'react';
import AdminPanel from '@/components/AdminPanel';
import ContactForm from '@/components/ContactForm';
import ProjectGallery from '@/components/ProjectGallery';

const Index = () => {
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleFormSubmit = (formData: any) => {
    console.log('Получена заявка:', formData);
    // Здесь можно добавить отправку на сервер
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Icon name="Wind" className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">Климат39</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-600 hover:text-blue-600 transition-colors">Услуги</a>
              <a href="#products" className="text-gray-600 hover:text-blue-600 transition-colors">Продукция</a>
              <a href="#projects" className="text-gray-600 hover:text-blue-600 transition-colors">Наши объекты</a>
              <a href="#certificates" className="text-gray-600 hover:text-blue-600 transition-colors">Сертификаты</a>
              <a href="#contacts" className="text-gray-600 hover:text-blue-600 transition-colors">Контакты</a>
            </nav>
            <div className="flex items-center space-x-2">
              <Button className="bg-blue-600 hover:bg-blue-700">
                Позвонить
              </Button>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => {
                  const password = prompt('Введите пароль администратора:');
                  if (password === 'admin123') {
                    setIsAuthenticated(true);
                    setIsAdminOpen(true);
                  } else {
                    alert('Неверный пароль');
                  }
                }}
              >
                <Icon name="Settings" className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-blue-100 text-blue-800 mb-4">Профессиональные решения</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Монтаж приточно-вытяжной вентиляции
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Проектирование, поставка и установка систем вентиляции для промышленных и коммерческих объектов
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Рассчитать стоимость
                </Button>
                <Button size="lg" variant="outline">
                  Наши проекты
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <Icon name="Clock" className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">24/7</div>
                    <div className="text-sm text-gray-600">Поддержка</div>
                  </div>
                  <div className="text-center">
                    <Icon name="Award" className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">15+</div>
                    <div className="text-sm text-gray-600">Лет опыта</div>
                  </div>
                  <div className="text-center">
                    <Icon name="Users" className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">500+</div>
                    <div className="text-sm text-gray-600">Проектов</div>
                  </div>
                  <div className="text-center">
                    <Icon name="Shield" className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">5 лет</div>
                    <div className="text-sm text-gray-600">Гарантии</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Наши услуги
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Полный спектр услуг по проектированию, монтажу и обслуживанию систем вентиляции
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "Settings",
                title: "Проектирование",
                description: "Разработка проектов вентиляции с учетом всех требований и норм"
              },
              {
                icon: "Wrench",
                title: "Монтаж",
                description: "Профессиональная установка систем вентиляции любой сложности"
              },
              {
                icon: "ShieldCheck",
                title: "Обслуживание",
                description: "Техническое обслуживание и ремонт вентиляционных систем"
              },
              {
                icon: "Zap",
                title: "Автоматизация",
                description: "Внедрение систем автоматического управления вентиляцией"
              },
              {
                icon: "CheckCircle",
                title: "Диагностика",
                description: "Проведение замеров и диагностики работы систем вентиляции"
              },
              {
                icon: "Phone",
                title: "Консультации",
                description: "Экспертные консультации по выбору оптимальных решений"
              }
            ].map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <Icon name={service.icon} className="h-12 w-12 text-blue-600 mb-4" />
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Продукция
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Широкий ассортимент вентиляционного оборудования от ведущих производителей
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "Fan",
                title: "Вентиляторы",
                description: "Осевые, центробежные, канальные"
              },
              {
                icon: "Box",
                title: "Воздуховоды",
                description: "Круглые, прямоугольные, гибкие"
              },
              {
                icon: "Filter",
                title: "Фильтры",
                description: "Грубой, тонкой очистки, HEPA"
              },
              {
                icon: "Thermometer",
                title: "Калориферы",
                description: "Водяные, электрические, паровые"
              }
            ].map((product, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <Icon name={product.icon} className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                  <CardTitle className="text-xl">{product.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {product.description}
                  </CardDescription>
                  <Button variant="outline" className="mt-4">
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProjectGallery />
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Сертификаты
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Подтверждение качества и соответствия всем стандартам
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "ISO 9001:2015",
              "ISO 14001:2015",
              "OHSAS 18001",
              "СРО"
            ].map((cert, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <Icon name="Award" className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                  <CardTitle className="text-lg">{cert}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Сертификат соответствия международным стандартам качества
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Контакты
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Свяжитесь с нами для получения консультации и расчета стоимости
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Наши контакты</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Icon name="MapPin" className="h-6 w-6 text-blue-600" />
                  <div>
                    <p className="font-semibold">Адрес:</p>
                    <p className="text-gray-600">г. Москва, ул. Промышленная, д. 15</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Icon name="Phone" className="h-6 w-6 text-blue-600" />
                  <div>
                    <p className="font-semibold">Телефон:</p>
                    <p className="text-gray-600">+7 (495) 123-45-67</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Icon name="Mail" className="h-6 w-6 text-blue-600" />
                  <div>
                    <p className="font-semibold">Email:</p>
                    <p className="text-gray-600">info@klimat39.ru</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Icon name="Clock" className="h-6 w-6 text-blue-600" />
                  <div>
                    <p className="font-semibold">Режим работы:</p>
                    <p className="text-gray-600">Пн-Пт: 8:00-18:00, Сб: 9:00-15:00</p>
                  </div>
                </div>
              </div>
            </div>
            <ContactForm onSubmit={handleFormSubmit} />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Wind" className="h-8 w-8 text-blue-400" />
                <span className="text-2xl font-bold">Климат39</span>
              </div>
              <p className="text-gray-400">
                Профессиональные решения в области вентиляции и кондиционирования
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Проектирование</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Монтаж</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Обслуживание</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Продукция</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Вентиляторы</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Воздуховоды</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Фильтры</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-400">
                <li>+7 (495) 123-45-67</li>
                <li>info@klimat39.ru</li>
                <li>г. Москва, ул. Промышленная, д. 15</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Климат39. Все права защищены.</p>
          </div>
        </div>
      </footer>

      {/* Admin Panel */}
      {isAuthenticated && (
        <AdminPanel 
          isOpen={isAdminOpen} 
          onClose={() => setIsAdminOpen(false)} 
        />
      )}
    </div>
  );
};

export default Index;
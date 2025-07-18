import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
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
                <Button size="lg" variant="outline" asChild>
                  <Link to="/projects">Наши проекты</Link>
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

      {/* Services Preview */}
      <section className="py-20 bg-white">
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
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" asChild>
              <Link to="/services">Все услуги</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-20 bg-gray-50">
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
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" asChild>
              <Link to="/products">Вся продукция</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Почему выбирают нас
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Более 15 лет мы предоставляем качественные услуги в области вентиляции и кондиционирования
              </p>
              <div className="space-y-6">
                {[
                  {
                    icon: "CheckCircle",
                    title: "Опыт и экспертиза",
                    description: "Более 500 успешно реализованных проектов"
                  },
                  {
                    icon: "Shield",
                    title: "Гарантия качества",
                    description: "5 лет гарантии на все виды работ"
                  },
                  {
                    icon: "Clock",
                    title: "Соблюдение сроков",
                    description: "Всегда сдаем объекты в срок"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <Icon name={item.icon} className="h-6 w-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/c9b59a89-bfd6-4245-982b-8496c335fbb9.jpg" 
                alt="Наша команда"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Готовы начать проект?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Получите бесплатную консультацию и расчет стоимости вашего проекта
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contacts">Получить консультацию</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              Рассчитать стоимость
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
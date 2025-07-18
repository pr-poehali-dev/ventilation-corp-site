import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Services = () => {
  const services = [
    {
      icon: "Settings",
      title: "Проектирование",
      description: "Разработка проектов вентиляции с учетом всех требований и норм",
      details: [
        "Расчет воздухообмена",
        "3D моделирование",
        "Техническое задание",
        "Согласование с заказчиком"
      ],
      price: "от 150 руб/м²"
    },
    {
      icon: "Wrench",
      title: "Монтаж",
      description: "Профессиональная установка систем вентиляции любой сложности",
      details: [
        "Установка оборудования",
        "Прокладка воздуховодов",
        "Электромонтажные работы",
        "Пусконаладочные работы"
      ],
      price: "от 800 руб/м²"
    },
    {
      icon: "ShieldCheck",
      title: "Обслуживание",
      description: "Техническое обслуживание и ремонт вентиляционных систем",
      details: [
        "Плановое ТО",
        "Замена фильтров",
        "Диагностика неисправностей",
        "Аварийный ремонт"
      ],
      price: "от 5000 руб/месяц"
    },
    {
      icon: "Zap",
      title: "Автоматизация",
      description: "Внедрение систем автоматического управления вентиляцией",
      details: [
        "Программирование контроллеров",
        "Установка датчиков",
        "Настройка алгоритмов",
        "Удаленный мониторинг"
      ],
      price: "от 50000 руб/объект"
    },
    {
      icon: "CheckCircle",
      title: "Диагностика",
      description: "Проведение замеров и диагностики работы систем вентиляции",
      details: [
        "Измерение расходов воздуха",
        "Анализ эффективности",
        "Протокол испытаний",
        "Рекомендации по улучшению"
      ],
      price: "от 15000 руб/день"
    },
    {
      icon: "Phone",
      title: "Консультации",
      description: "Экспертные консультации по выбору оптимальных решений",
      details: [
        "Выезд специалиста",
        "Техническое заключение",
        "Подбор оборудования",
        "Смета на работы"
      ],
      price: "от 3000 руб/час"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="bg-blue-100 text-blue-800 mb-4">Профессиональные услуги</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Наши услуги
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Полный спектр услуг по проектированию, монтажу и обслуживанию систем вентиляции и кондиционирования
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Icon name={service.icon} className="h-12 w-12 text-blue-600" />
                    <Badge variant="secondary">{service.price}</Badge>
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold text-gray-900 mb-3">Что входит:</h4>
                  <ul className="space-y-2 mb-6">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                        <Icon name="CheckCircle" className="h-4 w-4 text-green-600" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full">
                    Заказать услугу
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Как мы работаем
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Наш процесс работы обеспечивает качественный результат в срок
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Консультация",
                description: "Обсуждение задач и требований клиента"
              },
              {
                step: "02",
                title: "Проектирование",
                description: "Разработка технического решения"
              },
              {
                step: "03",
                title: "Монтаж",
                description: "Установка и настройка оборудования"
              },
              {
                step: "04",
                title: "Сдача объекта",
                description: "Испытания и передача в эксплуатацию"
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
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
            <Button size="lg" variant="secondary">
              Получить консультацию
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

export default Services;
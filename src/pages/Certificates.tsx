import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Certificates = () => {
  const certificates = [
    {
      title: "ISO 9001:2015",
      description: "Международный стандарт системы менеджмента качества",
      category: "Качество",
      validUntil: "2025-12-31",
      benefits: [
        "Гарантия качества услуг",
        "Постоянное улучшение процессов",
        "Удовлетворенность клиентов",
        "Системный подход к работе"
      ]
    },
    {
      title: "ISO 14001:2015",
      description: "Стандарт экологического менеджмента",
      category: "Экология",
      validUntil: "2025-12-31",
      benefits: [
        "Минимальное воздействие на окружающую среду",
        "Соответствие экологическим требованиям",
        "Энергоэффективные решения",
        "Устойчивое развитие"
      ]
    },
    {
      title: "OHSAS 18001",
      description: "Стандарт системы управления охраной труда",
      category: "Безопасность",
      validUntil: "2025-12-31",
      benefits: [
        "Безопасность на рабочих местах",
        "Снижение производственного травматизма",
        "Обучение персонала",
        "Соответствие требованиям ОТ"
      ]
    },
    {
      title: "СРО",
      description: "Свидетельство о допуске к работам",
      category: "Лицензирование",
      validUntil: "2025-12-31",
      benefits: [
        "Право на выполнение работ",
        "Государственная регистрация",
        "Страхование ответственности",
        "Контроль качества"
      ]
    }
  ];

  const accreditations = [
    {
      organization: "Ростехнадзор",
      description: "Разрешение на монтаж промышленного оборудования",
      number: "РТН-12345"
    },
    {
      organization: "Минстрой России",
      description: "Свидетельство о допуске к строительным работам",
      number: "МС-67890"
    },
    {
      organization: "МЧС России",
      description: "Лицензия на противопожарные работы",
      number: "МЧС-11111"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="bg-blue-100 text-blue-800 mb-4">Качество и надежность</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Сертификаты
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Наша деятельность сертифицирована и соответствует международным стандартам качества
            </p>
          </div>
        </div>
      </section>

      {/* Certificates Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Международные сертификаты
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Подтверждение соответствия высоким стандартам качества
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certificates.map((cert, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Icon name="Award" className="h-12 w-12 text-blue-600" />
                    <Badge variant="secondary">{cert.category}</Badge>
                  </div>
                  <CardTitle className="text-2xl">{cert.title}</CardTitle>
                  <p className="text-gray-600">{cert.description}</p>
                  <div className="text-sm text-gray-500 mt-2">
                    Действителен до: {new Date(cert.validUntil).toLocaleDateString('ru-RU')}
                  </div>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold text-gray-900 mb-3">Что это дает:</h4>
                  <ul className="space-y-2 mb-6">
                    {cert.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                        <Icon name="CheckCircle" className="h-4 w-4 text-green-600" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant="outline">
                    Скачать сертификат
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditations Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Лицензии и разрешения
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Официальные разрешения государственных органов на выполнение работ
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {accreditations.map((accred, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <Icon name="FileText" className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                  <CardTitle className="text-lg">{accred.organization}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{accred.description}</p>
                  <div className="text-sm text-gray-500">
                    Номер: {accred.number}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Гарантии качества
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Мы гарантируем высокое качество выполненных работ
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "Shield",
                title: "Гарантия 5 лет",
                description: "На все виды выполненных работ и установленное оборудование"
              },
              {
                icon: "Clock",
                title: "Сроки выполнения",
                description: "Строгое соблюдение договорных сроков выполнения работ"
              },
              {
                icon: "Users",
                title: "Квалифицированный персонал",
                description: "Сертифицированные специалисты с многолетним опытом"
              },
              {
                icon: "FileCheck",
                title: "Документооборот",
                description: "Полный пакет документов и разрешительной документации"
              },
              {
                icon: "Phone",
                title: "Техподдержка",
                description: "Круглосуточная техническая поддержка после сдачи объекта"
              },
              {
                icon: "Settings",
                title: "Сервисное обслуживание",
                description: "Регулярное техническое обслуживание установленных систем"
              }
            ].map((guarantee, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <Icon name={guarantee.icon} className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                  <CardTitle className="text-xl">{guarantee.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{guarantee.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Доверьте свой проект профессионалам
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Наши сертификаты и лицензии - гарантия качественного выполнения работ
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Получить консультацию
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              Скачать все сертификаты
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Certificates;
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import ContactForm from '@/components/ContactForm';

const Contacts = () => {
  const handleFormSubmit = (formData: any) => {
    console.log('Получена заявка:', formData);
    // Здесь можно добавить отправку на сервер
  };

  const offices = [
    {
      city: "Москва",
      address: "г. Москва, ул. Промышленная, д. 15",
      phone: "+7 (495) 123-45-67",
      email: "moscow@klimat39.ru",
      hours: "Пн-Пт: 8:00-18:00, Сб: 9:00-15:00",
      isMain: true
    },
    {
      city: "Санкт-Петербург",
      address: "г. Санкт-Петербург, пр. Индустриальный, д. 25",
      phone: "+7 (812) 987-65-43",
      email: "spb@klimat39.ru",
      hours: "Пн-Пт: 9:00-18:00",
      isMain: false
    },
    {
      city: "Калининград",
      address: "г. Калининград, ул. Техническая, д. 8",
      phone: "+7 (4012) 555-123",
      email: "kaliningrad@klimat39.ru",
      hours: "Пн-Пт: 9:00-17:00",
      isMain: false
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="bg-blue-100 text-blue-800 mb-4">Свяжитесь с нами</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Контакты
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Мы всегда готовы ответить на ваши вопросы и помочь с выбором оптимального решения
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Наши офисы</h2>
              <div className="space-y-6">
                {offices.map((office, index) => (
                  <Card key={index} className={`hover:shadow-lg transition-shadow duration-300 ${office.isMain ? 'ring-2 ring-blue-200' : ''}`}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-xl">{office.city}</CardTitle>
                        {office.isMain && (
                          <Badge className="bg-blue-100 text-blue-800">Главный офис</Badge>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <Icon name="MapPin" className="h-5 w-5 text-blue-600 mt-0.5" />
                        <div>
                          <p className="font-medium text-gray-900">Адрес:</p>
                          <p className="text-gray-600">{office.address}</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Icon name="Phone" className="h-5 w-5 text-blue-600 mt-0.5" />
                        <div>
                          <p className="font-medium text-gray-900">Телефон:</p>
                          <p className="text-gray-600">{office.phone}</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Icon name="Mail" className="h-5 w-5 text-blue-600 mt-0.5" />
                        <div>
                          <p className="font-medium text-gray-900">Email:</p>
                          <p className="text-gray-600">{office.email}</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Icon name="Clock" className="h-5 w-5 text-blue-600 mt-0.5" />
                        <div>
                          <p className="font-medium text-gray-900">Режим работы:</p>
                          <p className="text-gray-600">{office.hours}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Написать нам</h2>
              <ContactForm onSubmit={handleFormSubmit} />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Как нас найти
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Главный офис в Москве
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="h-96 bg-gray-200 flex items-center justify-center">
              <iframe
                src="https://yandex.ru/map-widget/v1/-/CCUEJHCd1B"
                width="100%"
                height="100%"
                frameBorder="0"
                allowFullScreen
                className="rounded-lg"
                title="Карта офиса Климат39"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Additional Contact Methods */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Другие способы связи
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Выберите удобный для вас способ связи
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "Phone",
                title: "Горячая линия",
                description: "8-800-555-0123",
                subtitle: "Звонок бесплатный"
              },
              {
                icon: "MessageCircle",
                title: "WhatsApp",
                description: "+7 (495) 123-45-67",
                subtitle: "Быстрые ответы"
              },
              {
                icon: "Send",
                title: "Telegram",
                description: "@klimat39_bot",
                subtitle: "Автоответчик 24/7"
              },
              {
                icon: "Mail",
                title: "Email",
                description: "info@klimat39.ru",
                subtitle: "Ответим в течение часа"
              }
            ].map((contact, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <Icon name={contact.icon} className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                  <CardTitle className="text-xl">{contact.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold text-gray-900 mb-2">{contact.description}</p>
                  <p className="text-sm text-gray-600">{contact.subtitle}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Часто задаваемые вопросы
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ответы на самые популярные вопросы
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "Как быстро вы можете приехать на объект?",
                answer: "Выезд специалиста возможен в течение 24 часов после обращения, в экстренных случаях - в течение 2-4 часов."
              },
              {
                question: "Даете ли вы гарантию на работы?",
                answer: "Да, мы даем гарантию 5 лет на все виды выполненных работ и 3 года на установленное оборудование."
              },
              {
                question: "Работаете ли вы в выходные?",
                answer: "Да, у нас есть дежурная служба, которая работает круглосуточно для решения экстренных вопросов."
              },
              {
                question: "Можно ли получить скидку на большой объем работ?",
                answer: "Да, мы предоставляем индивидуальные скидки для крупных проектов. Условия обсуждаются индивидуально."
              }
            ].map((faq, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{faq.answer}</p>
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
            Готовы обсудить ваш проект?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Свяжитесь с нами любым удобным способом для получения консультации
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Позвонить сейчас
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              Написать в WhatsApp
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacts;
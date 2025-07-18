import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Products = () => {
  const productCategories = [
    {
      icon: "Fan",
      title: "Вентиляторы",
      description: "Широкий выбор вентиляторов для любых задач",
      products: [
        "Осевые вентиляторы",
        "Центробежные вентиляторы", 
        "Канальные вентиляторы",
        "Крышные вентиляторы"
      ],
      image: "/img/c9b59a89-bfd6-4245-982b-8496c335fbb9.jpg"
    },
    {
      icon: "Box",
      title: "Воздуховоды",
      description: "Системы воздуховодов различных типов",
      products: [
        "Круглые воздуховоды",
        "Прямоугольные воздуховоды",
        "Гибкие воздуховоды",
        "Изолированные воздуховоды"
      ],
      image: "/img/e0dd3f82-89d5-4177-afb0-1825eda98241.jpg"
    },
    {
      icon: "Filter",
      title: "Фильтры",
      description: "Системы очистки воздуха высокого качества",
      products: [
        "Фильтры грубой очистки",
        "Фильтры тонкой очистки",
        "HEPA фильтры",
        "Угольные фильтры"
      ],
      image: "/img/493742ed-01d1-4b60-a865-c5f8c767e153.jpg"
    },
    {
      icon: "Thermometer",
      title: "Калориферы",
      description: "Системы нагрева воздуха",
      products: [
        "Водяные калориферы",
        "Электрические калориферы",
        "Паровые калориферы",
        "Взрывозащищенные калориферы"
      ],
      image: "/img/c9b59a89-bfd6-4245-982b-8496c335fbb9.jpg"
    },
    {
      icon: "Settings",
      title: "Автоматика",
      description: "Системы управления и контроля",
      products: [
        "Контроллеры управления",
        "Датчики температуры",
        "Приводы заслонок",
        "Частотные преобразователи"
      ],
      image: "/img/e0dd3f82-89d5-4177-afb0-1825eda98241.jpg"
    },
    {
      icon: "Wrench",
      title: "Комплектующие",
      description: "Дополнительное оборудование",
      products: [
        "Решетки и диффузоры",
        "Заслонки и клапаны",
        "Глушители шума",
        "Крепежные элементы"
      ],
      image: "/img/493742ed-01d1-4b60-a865-c5f8c767e153.jpg"
    }
  ];

  const brands = [
    "Systemair", "Ostberg", "Soler&Palau", "Vents", "Ballu", "Тепломаш", "Арктос", "Веза"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="bg-blue-100 text-blue-800 mb-4">Качественное оборудование</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Продукция
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Широкий ассортимент вентиляционного оборудования от ведущих мировых производителей
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((category, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-video bg-gray-100 overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Icon name={category.icon} className="h-8 w-8 text-blue-600" />
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                  </div>
                  <CardDescription className="text-gray-600">
                    {category.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold text-gray-900 mb-3">Виды продукции:</h4>
                  <ul className="space-y-2 mb-6">
                    {category.products.map((product, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                        <Icon name="CheckCircle" className="h-4 w-4 text-green-600" />
                        {product}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant="outline">
                    Смотреть каталог
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Наши партнеры
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Мы работаем с ведущими производителями вентиляционного оборудования
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {brands.map((brand, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="text-center">
                  <div className="h-16 flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-gray-800">{brand}</span>
                  </div>
                  <p className="text-sm text-gray-600">Официальный партнер</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Преимущества нашего оборудования
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "Award",
                title: "Высокое качество",
                description: "Все оборудование соответствует европейским стандартам качества"
              },
              {
                icon: "Shield",
                title: "Гарантия",
                description: "Расширенная гарантия до 5 лет на все виды оборудования"
              },
              {
                icon: "Truck",
                title: "Быстрая доставка",
                description: "Доставка по всей России в кратчайшие сроки"
              },
              {
                icon: "DollarSign",
                title: "Выгодные цены",
                description: "Прямые поставки от производителей, конкурентные цены"
              },
              {
                icon: "Users",
                title: "Техподдержка",
                description: "Круглосуточная техническая поддержка наших специалистов"
              },
              {
                icon: "Settings",
                title: "Монтаж",
                description: "Профессиональный монтаж и настройка оборудования"
              }
            ].map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <Icon name={feature.icon} className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
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
            Нужна помощь в выборе?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Наши специалисты помогут подобрать оптимальное решение для вашего объекта
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Получить консультацию
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              Скачать каталог
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
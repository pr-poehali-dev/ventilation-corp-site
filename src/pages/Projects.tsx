import { Badge } from '@/components/ui/badge';
import ProjectGallery from '@/components/ProjectGallery';

const Projects = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="bg-blue-100 text-blue-800 mb-4">Успешные проекты</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Наши объекты
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Более 500 успешно реализованных проектов в различных отраслях промышленности и коммерции
            </p>
          </div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProjectGallery />
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Наши достижения
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Цифры, которые говорят о нашем профессионализме
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: "500+",
                label: "Реализованных проектов",
                description: "За 15 лет работы"
              },
              {
                number: "2.5M",
                label: "Квадратных метров",
                description: "Общая площадь объектов"
              },
              {
                number: "98%",
                label: "Довольных клиентов",
                description: "Высокий уровень сервиса"
              },
              {
                number: "24/7",
                label: "Техподдержка",
                description: "Круглосуточное обслуживание"
              }
            ].map((stat, index) => (
              <div key={index} className="text-center bg-white p-8 rounded-lg shadow-sm">
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{stat.label}</h3>
                <p className="text-gray-600">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Отрасли
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Мы работаем в различных сферах деятельности
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Торговые центры",
                description: "Системы комфортной вентиляции для торговых площадей",
                projects: "150+ проектов"
              },
              {
                title: "Производство",
                description: "Промышленная вентиляция и очистка воздуха",
                projects: "120+ проектов"
              },
              {
                title: "Офисные центры",
                description: "Современные системы климат-контроля",
                projects: "80+ проектов"
              },
              {
                title: "Медицинские учреждения",
                description: "Специализированные системы с высокой степенью очистки",
                projects: "45+ проектов"
              },
              {
                title: "Пищевая промышленность",
                description: "Вентиляция с соблюдением санитарных норм",
                projects: "35+ проектов"
              },
              {
                title: "Складские комплексы",
                description: "Эффективные решения для логистических центров",
                projects: "70+ проектов"
              }
            ].map((industry, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{industry.title}</h3>
                <p className="text-gray-600 mb-4">{industry.description}</p>
                <div className="text-sm text-blue-600 font-medium">{industry.projects}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
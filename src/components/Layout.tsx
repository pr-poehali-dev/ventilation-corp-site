import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import AdminPanel from '@/components/AdminPanel';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Главная', href: '/' },
    { name: 'Услуги', href: '/services' },
    { name: 'Продукция', href: '/products' },
    { name: 'Наши объекты', href: '/projects' },
    { name: 'Сертификаты', href: '/certificates' },
    { name: 'Контакты', href: '/contacts' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const handleAdminAccess = () => {
    const password = prompt('Введите пароль администратора:');
    if (password === 'admin123') {
      setIsAuthenticated(true);
      setIsAdminOpen(true);
    } else {
      alert('Неверный пароль');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Icon name="Wind" className="h-8 w-8 text-blue-600" />
              <Link to="/" className="text-2xl font-bold text-gray-900">
                Климат39
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-gray-600 hover:text-blue-600 transition-colors ${
                    isActive(item.href) ? 'text-blue-600 font-medium' : ''
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <div className="flex items-center space-x-2">
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Icon name="Phone" className="h-4 w-4 mr-2" />
                Позвонить
              </Button>
              <Button variant="ghost" size="sm" onClick={handleAdminAccess}>
                <Icon name="Settings" className="h-4 w-4" />
              </Button>
              
              {/* Mobile menu button */}
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <Icon name={isMobileMenuOpen ? "X" : "Menu"} className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 text-base font-medium rounded-md ${
                    isActive(item.href)
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

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
                <li><Link to="/services" className="hover:text-white transition-colors">Проектирование</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors">Монтаж</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors">Обслуживание</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Продукция</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/products" className="hover:text-white transition-colors">Вентиляторы</Link></li>
                <li><Link to="/products" className="hover:text-white transition-colors">Воздуховоды</Link></li>
                <li><Link to="/products" className="hover:text-white transition-colors">Фильтры</Link></li>
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

export default Layout;
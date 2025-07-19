import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface ContentItem {
  id: string;
  type: 'text' | 'image' | 'title' | 'description' | 'button' | 'card' | 'list';
  value: string;
  page: string;
  section: string;
  metadata?: {
    alt?: string;
    href?: string;
    variant?: string;
    icon?: string;
  };
}

interface ContentStore {
  content: ContentItem[];
  isAdminMode: boolean;
  setAdminMode: (mode: boolean) => void;
  updateContent: (id: string, value: string, metadata?: any) => void;
  addContent: (item: Omit<ContentItem, 'id'>) => void;
  deleteContent: (id: string) => void;
  getContent: (page: string, section?: string) => ContentItem[];
  initializeDefaultContent: () => void;
}

const defaultContent: ContentItem[] = [
  // Home page content
  { id: 'home-hero-title', type: 'title', value: 'Монтаж приточно-вытяжной вентиляции', page: 'home', section: 'hero' },
  { id: 'home-hero-subtitle', type: 'description', value: 'Проектирование, поставка и установка систем вентиляции для промышленных и коммерческих объектов', page: 'home', section: 'hero' },
  { id: 'home-hero-btn1', type: 'button', value: 'Рассчитать стоимость', page: 'home', section: 'hero' },
  { id: 'home-hero-btn2', type: 'button', value: 'Наши проекты', page: 'home', section: 'hero', metadata: { href: '/projects' } },
  { id: 'home-hero-image', type: 'image', value: '/img/c9b59a89-bfd6-4245-982b-8496c335fbb9.jpg', page: 'home', section: 'hero', metadata: { alt: 'Наша команда' } },
  
  // Services section
  { id: 'home-services-title', type: 'title', value: 'Наши услуги', page: 'home', section: 'services' },
  { id: 'home-services-subtitle', type: 'description', value: 'Полный спектр услуг по проектированию, монтажу и обслуживанию систем вентиляции', page: 'home', section: 'services' },
  
  // Services page
  { id: 'services-hero-title', type: 'title', value: 'Услуги по вентиляции', page: 'services', section: 'hero' },
  { id: 'services-hero-subtitle', type: 'description', value: 'Полный цикл работ от проектирования до обслуживания', page: 'services', section: 'hero' },
  
  // Products page
  { id: 'products-hero-title', type: 'title', value: 'Продукция', page: 'products', section: 'hero' },
  { id: 'products-hero-subtitle', type: 'description', value: 'Качественное вентиляционное оборудование от ведущих производителей', page: 'products', section: 'hero' },
  
  // Projects page
  { id: 'projects-hero-title', type: 'title', value: 'Наши проекты', page: 'projects', section: 'hero' },
  { id: 'projects-hero-subtitle', type: 'description', value: 'Более 500 успешно реализованных проектов', page: 'projects', section: 'hero' },
  
  // Certificates page
  { id: 'certificates-hero-title', type: 'title', value: 'Сертификаты', page: 'certificates', section: 'hero' },
  { id: 'certificates-hero-subtitle', type: 'description', value: 'Все необходимые лицензии и сертификаты качества', page: 'certificates', section: 'hero' },
  
  // Contacts page
  { id: 'contacts-hero-title', type: 'title', value: 'Контакты', page: 'contacts', section: 'hero' },
  { id: 'contacts-hero-subtitle', type: 'description', value: 'Свяжитесь с нами удобным способом', page: 'contacts', section: 'hero' },
];

export const useContentStore = create<ContentStore>()(
  persist(
    (set, get) => ({
      content: [],
      isAdminMode: false,
      
      setAdminMode: (mode: boolean) => set({ isAdminMode: mode }),
      
      updateContent: (id: string, value: string, metadata?: any) => {
        set((state) => ({
          content: state.content.map((item) =>
            item.id === id
              ? { ...item, value, metadata: { ...item.metadata, ...metadata } }
              : item
          ),
        }));
      },
      
      addContent: (item: Omit<ContentItem, 'id'>) => {
        const id = `${item.page}-${item.section}-${Date.now()}`;
        set((state) => ({
          content: [...state.content, { ...item, id }],
        }));
      },
      
      deleteContent: (id: string) => {
        set((state) => ({
          content: state.content.filter((item) => item.id !== id),
        }));
      },
      
      getContent: (page: string, section?: string) => {
        const { content } = get();
        return content.filter((item) => {
          if (section) {
            return item.page === page && item.section === section;
          }
          return item.page === page;
        });
      },
      
      initializeDefaultContent: () => {
        const { content } = get();
        if (content.length === 0) {
          set({ content: defaultContent });
        }
      },
    }),
    {
      name: 'content-store',
    }
  )
);
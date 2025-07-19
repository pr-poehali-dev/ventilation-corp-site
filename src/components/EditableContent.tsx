import React from 'react';
import { useContentStore } from '@/store/contentStore';

interface EditableContentProps {
  id: string;
  type: 'text' | 'image' | 'title' | 'description' | 'button';
  page: string;
  section: string;
  defaultValue: string;
  className?: string;
  children?: React.ReactNode;
  metadata?: {
    alt?: string;
    href?: string;
    variant?: string;
    icon?: string;
  };
}

const EditableContent: React.FC<EditableContentProps> = ({
  id,
  type,
  page,
  section,
  defaultValue,
  className = '',
  children,
  metadata = {},
}) => {
  const { content, isAdminMode, updateContent, addContent } = useContentStore();
  
  // Find existing content or create new
  React.useEffect(() => {
    const existingContent = content.find(item => item.id === id);
    if (!existingContent) {
      addContent({
        id,
        type,
        page,
        section,
        value: defaultValue,
        metadata,
      });
    }
  }, [id, type, page, section, defaultValue, metadata, content, addContent]);

  const contentItem = content.find(item => item.id === id);
  const value = contentItem?.value || defaultValue;
  const itemMetadata = contentItem?.metadata || metadata;

  // Render different content types
  switch (type) {
    case 'title':
      return (
        <h1 className={className}>
          {value}
        </h1>
      );
      
    case 'description':
      return (
        <p className={className}>
          {value}
        </p>
      );
      
    case 'text':
      return (
        <span className={className}>
          {value}
        </span>
      );
      
    case 'image':
      return (
        <img 
          src={value} 
          alt={itemMetadata.alt || 'Изображение'} 
          className={className}
        />
      );
      
    case 'button':
      return children ? (
        React.cloneElement(children as React.ReactElement, {
          children: value,
          href: itemMetadata.href || '#',
        })
      ) : (
        <button className={className}>
          {value}
        </button>
      );
      
    default:
      return (
        <div className={className}>
          {value}
        </div>
      );
  }
};

export default EditableContent;
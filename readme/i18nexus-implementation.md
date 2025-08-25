# i18nexus Implementation Guide

This guide covers how to implement i18nexus for internationalization in your application, supporting multiple languages including English, Spanish, and French.

## Overview

i18nexus is a translation management system that helps manage translations across multiple languages. Our application currently supports 3 languages:
- English (en)
- Spanish (es) 
- French (fr)

## Dashboard Setup

### Managing Namespaces
Namespaces help organize translations by feature or section. You can either use existing namespaces or create new ones:
1. Navigate to your project dashboard
2. Click "Namespaces" in the sidebar
3. Use existing namespaces like "common" for shared translations, or create new ones for specific features
4. The "common" namespace should contain shared translations used across the app

### Adding Translation Keys
1. Select a namespace from your project dashboard
2. Click "Add New Key"
3. Enter the key name (e.g., `title_one`, `desc_totaling`)
4. Add translations for each supported language
5. Use the key format: `namespace:key_name` (e.g., `halloween:title_one`)

### Managing Translations
- **Bulk Import**: Upload CSV or JSON files with existing translations
- **Collaboration**: Invite translators to work on specific languages
- **Review Process**: Set up approval workflows for translation changes
- **Version Control**: Track changes and revert if needed

## Code Implementation

### Page-Level Implementation

Translations must be implemented at the **page level** only. The translated strings are then passed down to components via props.

#### The i18nNameSpaces Array
The `i18nNameSpaces` array is **critical** for performance and functionality:

```javascript
const i18nNameSpaces = ["common", "products"];
```

**Why it's important:**
- **Performance**: Only loads the translation files you actually need for that specific page
- **Memory efficiency**: Prevents loading unnecessary translations that aren't used
- **Namespace isolation**: Keeps translations organized and prevents key conflicts
- **Required parameter**: The `initTranslations` function needs this array to know which translation namespaces to fetch from i18nexus

**Best practices:**
- Always include "common" for shared translations (buttons, navigation, etc.)
- Add only the specific namespaces needed for that page
- Keep the array as minimal as possible

```javascript
// pages/[locale]/products.js
const i18nNameSpaces = ["common", "products"];

export default async function Page({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale, i18nNameSpaces);
  
  const translations = {
    title: t('products:title'),
    description: t('products:description'),
    featuredTitle: t('products:featured_title'),
    price: t('products:price'),
    addToCart: t('common:add_to_cart'),
    viewDetails: t('common:view_details'),
  };

  return (
    <div>
      <ProductSection translations={translations} />
    </div>
  );
}
```

### Component Usage

Components receive translations through props and use them directly:

```javascript
// components/ProductSection.js
export default function ProductSection({ translations }) {
  return (
    <div>
      <h1>{translations.title}</h1>
      <p>{translations.description}</p>
      <h2>{translations.featuredTitle}</h2>
      <button>{translations.addToCart}</button>
    </div>
  );
}
```

**Important Notes:**
- All translation logic happens at the page level
- Components receive translated strings via props
- Never call `initTranslations` or `t()` directly in components

## Best Practices

### Namespace Organization
- **common**: Shared translations (buttons, navigation, errors)
- **feature-specific**: Page or feature-specific translations (products, dashboard, etc.)

### Key Naming Conventions
- Use descriptive, lowercase names with underscores
- Group related keys with prefixes (e.g., `product_title`, `product_desc`)
- Be consistent across all namespaces

### Translation Management
- Always provide fallback translations in English
- Keep translations concise and context-aware
- Test all languages before deployment
- Use placeholders for dynamic content: `"welcome_message": "Welcome, {{name}}!"`

### Performance Tips
- Only load necessary namespaces per page
- Use lazy loading for large translation files
- Cache translations appropriately
- Consider splitting large namespaces

## Workflow

1. **Development**: Add new keys to i18nexus dashboard
2. **Translation**: Translators add content for each language
3. **Review**: Approve translations through dashboard
4. **Deployment**: Sync translations to your application
5. **Testing**: Verify all languages display correctly

This setup provides a scalable solution for managing translations across English, Spanish, and French, with room to add more languages as needed.
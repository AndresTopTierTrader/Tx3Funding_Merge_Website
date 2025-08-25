# New Pages and SEO in Futures

## Page Creation Process

### Framework Structure
The process to create a new page follows the **Next.js** structure, similar to the implementation used in `toptiertrader.com`. The same [branching conventions](#branch-structure) and the same [development workflow](#development-workflow) apply with a few key considerations specific to the Futures platform.

## Metadata Management

### Language Support
Unlike `toptiertrader.com`, **Tx3 Funding only supports English**, which simplifies the metadata structure:

- **Single Object Required**: You only need one metadata object (English version)
- **No `generateMetadata()` Function**: Directly export the English metadata version
- **Simplified Structure**: No need for multiple language objects

### Metadata Implementation

```javascript
// Direct export - no generateMetadata() function needed
export const metadata = {
  title: "Your Page Title",
  description: "Your page description",
  keywords: "relevant, keywords, here",
  // ... other metadata properties
}
```

## SEO Generation with AI

### When to Use AI
AI can be utilized to generate proper content for metadata objects, especially when you need optimized SEO content.

### AI Generation Process

1. **Copy Page Content**: Extract the main content from your page
2. **Share Object Structure**: Provide the AI with the metadata object structure you need
3. **Provide Context**: Give the AI the appropriate copy and context about your page
4. **Generate Object**: Use AI to create the optimized metadata object

### Example AI Prompt Structure

```
Please generate a metadata object for this page content:

[Your page content here]

Use this structure:
export const metadata = {
    title: 'title here',
    description: "description",
    keywords: "keywords",
    language: "en",
    subject: "subject",
    coverage: "Global",
    robots: "index, follow",
    author: "TX3 Funding",
    publisher: "TX3 Funding",
    og: {
        type: "website | article",
        title: 'title here',
        description: "description",
        image: "",
        site_name: "TX3 Funding",
        url: `http://tx3funding.com/your-endpoint`
    }

};

Focus on SEO optimization for futures trading and funded accounts.
```

## Key Differences from TopTierTrader

| Aspect | TopTierTrader | Tx3 Funding |
|--------|---------------|-------------|
| **Languages** | Multiple | English only |
| **Metadata Function** | `generateMetadata()` | Direct export |
| **Object Structure** | Multiple language objects | Single English object |
| **Complexity** | Higher | Simplified |

## Best Practices

- **Consistency**: Follow Next.js file-based routing conventions
- **SEO Optimization**: Use AI assistance for better metadata generation
- **Simplicity**: Take advantage of single-language structure for cleaner code
- **Branching**: Maintain same version control practices as other projects
# Blog Creation and Management

Complete guide for creating and managing blog posts across multiple languages and platforms.

## Step 1: Check monday.com for Blog Tasks

Each blog task is divided into 5 distinct subtasks, each assigned to specific team members:

- **Copy** - Flo
- **Translation** - Jose Salazar  
- **Thumbnail** - Renata Martinez
- **Code** - Developer
- **Deploy** - Developer

### File Locations

The necessary files for blog implementation are distributed across different tasks:

- **Blog copy**: Located in the Translation task (available once translation is complete)
- **Thumbnail and graphics**: Located in the Thumbnail task (available once design is complete)

> **Note:** Contact relevant team members via Slack if you need assistance or have questions about any task.


## Step 2: Create Database Entries

### Access Strapi Dashboard

**URL:** https://www.sdb.ttt-services.com/admin/auth/login

**Credentials:**
- Email: `andresp@toptiertrader.com`
- Password: `AndPov633!`

### Create Blog Entries

Navigate to **Content Manager** and create entries in these collections:
- `En-BlogItems` (English)
- `Es-BlogItems` (Spanish)  
- `Fr-BlogItems` (French)

### Required Properties

Each entry must include the following properties (values must match the collection language):

#### `title`
The blog post title in the appropriate language.

#### `specialTag`
Set according to collection language:
- English: `"New"`
- Spanish: `"Nuevo"`
- French: `"Nouveau"`

*Note: Remove when a newer blog is published*

#### `tags`
String array with blog categories. Possible values:
```
["Levels", "Updates", "FX Summit", "Market Watch", "Meet Ups", "Traders", "Trading Tips"]
```

#### `goesIntoCarousel`
Always set to `true` - enables blog to render in the blogs grid.

#### `priorityOnCarousel`
Controls display order in grid. Set to `0` or `1` for newest blogs to appear first. Then, the carousel will display in the numbers order e.g. 1, 2, 3, 4...

#### `priority`
Same value as `priorityOnCarousel`.

#### `description`
Short description of the blog post.

#### `link`
Query parameter for blog location - must match the website endpoint.

#### `image`
Blog thumbnail image (upload only one image).

## Step 3: Create Blog Article

### File Structure

Create a new folder in `app/blogs/articles/` with the endpoint name. Copy an existing blog folder and rename it.

### Update Blog Parameters

#### Blog Parameter (line ~42)
```jsx
const blogParam = "your-blog-endpoint-name"
```
*Must match the `link` field from the database entry*

#### Translation Namespaces (line ~39)
```jsx
const i18nNameSpaces = ["common", "blog_landing", "YOUR_ARTICLE_HERE"];
```

### Translation Management

Access translations at: https://app.i18nexus.com/
Login with company credentials to manage translated content.

**Read the full translations documentation [here](#i18nexus-implementation-guide)**

## Step 4: Configure Metadata

Update metadata objects for each language (`metadata_en`, `metadata_es`, `metadata_fr`):

```jsx
const metadata_en = {
   metadataBase: new URL('https://www.toptiertrader.com'),
   title: "Your Blog Title Here",
   description: "Your blog description here",
   keywords: "relevant, keywords, here",
   language: "en",
   subject: "Blog subject/topic",
   coverage: "Global",
   robots: "index, follow",
   author: "TopTier Trader",
   publisher: "TopTier Trader",
   og: {
       type: "article",
       title: "Your Blog Title Here",
       description: "Your OG description here",
       image: "",
       site_name: "TopTier Trader",
       url: `https://www.toptiertrader.com/en/blog/articles/${blogParam}`
   },
   alternates: {
       languages: {
           'en': '/en',
           'es': '/es',
           'es-co': '/es-co',
           'es-ar': '/es-ar',
           'es-mx': '/es-mx',
           'es-pr': '/es-pr',
           'fr': '/fr'
       }
   }
};
```

### `generateMetadata` Function

This function selects the correct metadata object based on the locale:

```js
export async function generateMetadata({ params: { locale } }) {
  let returnedMetadata = "";
  const mainLang = locale.split("-")[0];

  if (mainLang === "en") returnedMetadata = metadata_en;
  if (mainLang === "es") returnedMetadata = metadata_es;
  if (mainLang === "fr") returnedMetadata = metadata_fr;

  return returnedMetadata;
}
```

## Step 5: Add Blog Content

### Using Translation Keys

#### Direct Usage
```jsx
{t("article_YOUR_BLOG_ID:YOUR_TEXT_ID")}
```

#### Recommended Approach (More Readable)
```jsx
const blogTranslations = {
    t1: t("article_YOUR_BLOG_ID:YOUR_TEXT_ID"),
    t2: t("article_YOUR_BLOG_ID:ANOTHER_TEXT_ID"),
    // Add more translations as needed
}

// Then use in render:
{blogTranslations.t1}
```

### Call-to-Action

Every blog must include a CTA at the end using the `CtaButton` component with all required UTM parameters and tracking.

## Step 6: Deploy on Database

Go to the database, check the entry you created before and click ```publish```, You need to do this on every collection to make sure the new blog is visible on every language.

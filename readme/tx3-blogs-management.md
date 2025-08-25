# Blog Management on Tx3 Funding

## Step 1: Check monday.com for Blog Tasks

Each blog task is divided into 5 distinct subtasks, each assigned to specific team members:

- **Copy** - Flo
- **Thumbnail** - Renata Martinez
- **Code** - Developer
- **Deploy** - Developer

### File Locations

The necessary files for blog implementation are distributed across different tasks:

- **Blog copy**: Located in the Translation task (available once translation is complete)
- **Thumbnail and graphics**: Located in the Thumbnail task (available once design is complete)

> **Note:** Contact relevant team members via Slack if you need assistance or have questions about any task.

## Step 2: Add Blog to Index

### Location
Navigate to `components/common/AllBlogs.js`

### Description
This file contains an array with all the blogs. Add a new entry to this array following the structure below:

```javascript
{
    title: 'YOUR BLOG TITLE',
    href: 'your-blog-slug',
    thumbnail: thumbnail image, // you must import this image at the top of the page
    category: 'category'
},
```

### Thumbnail Images
All thumbnail images are located in `components/blog/blogThumbnails`. Save your thumbnail image in this directory and import it at the top of the `AllBlogs.js` file.

### Result
Adding the entry to this array will make the new blog render in the blogs grid on the main blog page.

## Step 3: Create the Blog Page

### Directory Structure
1. Navigate to `app/blog`
2. Create a new folder (folder name must match the blog's slug from Step 1)
3. Inside this folder, create a `page.jsx` file with a default export component

### Recommended Approach
Copy an existing blog folder and modify it:

1. Replace the folder name with your new blog slug
2. Update the slug variable in the page component (usually around line 10):
   ```javascript
   const slug = 'your-blog-slug'
   ```
3. Ensure the slug and your folder's name matches the `href` value from your blog entry in `AllBlogs.js`

### Content Management
Unlike `toptiertrader.com`, the futures website does not support multiple languages, so you can manually type the blog content directly. Place this content inside the `<article>` tag on the page.

### Call-to-Action Requirement
Every blog post should contain a CTA at the end using the `ChallengesButton` component. Make sure to follow the [implementation requirements.](#utm-tracking-in-futures)

### Metadata and SEO
make sure to replace the metadata object with the right values of the blog you're creating, here's an example of the structure:

```js
export const metadata = {
    title: title,
    description: "Discover the best times to trade futures for maximum profit. Learn key trading hours, volatility patterns, and expert tips to boost your success.",
    keywords: "best times to trade futures, futures trading hours, futures market sessions, futures trading strategies, high liquidity periods, trading futures tips",
    language: "en",
    subject: "Futures Trading Strategies",
    coverage: "Global",
    robots: "index, follow",
    author: "TX3 Funding",
    publisher: "TX3 Funding",
    og: {
        type: "article",
        title: title,
        description: "Learn how to align your futures trading with the most profitable hours. Get strategic tips and timing insights to maximize your results.",
        image: "",
        site_name: "TX3 Funding",
        url: `http://tx3funding.com/blog/${href}`
    }
};
```
this SEO implementation will be the same on every page you create, not only the blogs. Check the full documentation [here](#new-pages-and-seo-in-futures)

## Full Implementation Example

```javascript
const slug = 'best-times-to-trade-futures'
const { title, category, thumbnail, href } = AllBlogs.find(blog => blog.href === slug)

export default function Blog() {
    return (
        <SectionLayout>
            <div className="max-w-[1100px] text-base md:text-lg mx-auto py-6 md:py-12">
                <p className="text-white mb-2">
                    <a className="text-slate-400" href="/blog">Blog /</a> {title}
                </p>
                <div className="px-4 py-2 rounded-lg border border-slate-400 w-fit my-6">
                    {category}
                </div>
                <Image src={thumbnail} alt="blog thumbnail" className="w-full rounded-lg mb-4" />
                <h1 className="font-bold text-2xl md:text-4xl">{title}</h1>
                <br />
                <article className="text-[#A2ACCF] flex flex-col gap-4 md:gap-6">
                    YOUR CONTENT GOES HERE
                    <ChallengesButton 
                        href='../challenges' 
                        trackName={'Best times to trade futures - Blog - CTA'}
                    >
                        Get Your Funded Account Now
                    </ChallengesButton>
                </article>
            </div>
        </SectionLayout>
    )
}
```

## Key Points

- **Slug Consistency**: Ensure the folder name, slug variable, and href in AllBlogs.js all match
- **Thumbnail Management**: Import and store thumbnails in the designated directory
- **Content Placement**: All blog content goes inside the `<article>` tag
- **CTA Requirement**: Every blog must end with a `ChallengesButton` component
- **No Multi-language Support**: Content can be written directly in the component
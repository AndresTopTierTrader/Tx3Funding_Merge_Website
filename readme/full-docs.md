# Development Workflow

## Overview

This document outlines the standard development workflow and branching strategy to ensure consistent, reliable deployments and maintain code quality across our project.

## Branch Structure

Our repository uses a two-branch workflow:

- **`main`** - Production branch containing stable, release-ready code
- **`testing`** - Development branch for implementing and testing new features

## Development Workflow

To maintain code quality and prevent production issues, all development should follow this standardized process:

### 1. Development Phase
- ****Always develop on the **`testing`** branch****
- Implement your code changes and commit regularly with clear messages
- **Use semantic commit messages** with the following prefixes:
  - `fix:` for bug fixes
  - `feat:` for new features
  - `chore:` for maintenance tasks, dependencies, or other non-feature changes
- **Keep commits concise and focused** - each commit should address a single change or issue
- **Avoid grouping multiple unrelated changes** in a single commit - break them into separate commits for better tracking and easier rollbacks

### 2. Testing & Verification
- Thoroughly test your implementation on the `testing` branch
- Verify all functionality works as expected
- Ensure no breaking changes are introduced

### 3. Design Review (if applicable)
- Contact the design team for UI/UX review when needed
- Implement any design feedback before proceeding
- Ensure visual elements meet design standards

### 4. Production Deployment
- Once testing is complete and approved, merge `testing` into `main`
- This brings all verified implementations to the production environment
- Monitor the deployment for any issues

## Important Guidelines

### ⚠️ Direct Main Branch Development
- **Avoid writing code directly on the `main` branch** unless absolutely necessary
- If emergency changes are made to `main`, immediately merge back to `testing` to keep branches synchronized
- This ensures both branches remain up-to-date and prevents conflicts

### Best Practices
- Keep commits atomic and well-documented
- Test thoroughly before merging to production
- Communicate with team members about significant changes
- Maintain branch synchronization between `testing` and `main`

## Quick Reference

```bash
# Standard workflow commands
git checkout testing
git pull
# Make your changes
git add .
git commit -m "feat: Clear description of changes"
git push

# After testing and approval
git checkout main
git merge testing
git push

# If emergency changes made to main
git checkout testing
git merge main
git push
```

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
- **Collaboration**: Invite translators to work on specific languages
- **Review Process**: Set up approval workflows for translation changes
- **Version Control**: Track changes and revert if needed

## Code Implementation

### Page-Level Implementation

Translations must be implemented at the **page level** only. The translated strings are then passed down to components via props.

Your translations will be converted into ```.json``` files. These can be found at ```locales/LOCALE/namespace.json``` 

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

# Promo Components

## Promo Page

The promo page is accessible at the `/promo` endpoint and serves as a template for uploading and displaying the most recent promotional content.

### Updating the Main Promo Image

**Location:** `components/conversions/promo-template/Main.jsx`

To update the hero image on the promo page:

1. **Add the new image** to the `assets` folder
2. **Import the image** at the top of the Main.jsx file
3. **Replace the src attribute** of the Image component with your new image

```jsx
// Example
import currentPromoImage from './assets/new-promo-image.jpg';

// Then update the Image component
<Image src={currentPromoImage} alt="Current Promotion" />
```

### Updating the Countdown

**Location:** `components/conversions/promo-template/countdown/Main.jsx`

#### Setting the End Date

Look for the finish date of the promo (usually around line 9). You'll find a line that looks like this:

```jsx
const targetDate = "2025-06-30T23:59:59"
```

Replace this date with your promo's end date and time.

#### Updating the Title

Change the main title in the `<h2>` tag at the beginning of the component to align with your current promotion.

```jsx
// Example
<h2>Your New Promo Title Here</h2>
```

## Promo PopUps

The promo popup appears automatically when a new promotion is launched and uses localStorage to prevent showing the same popup to users who have already dismissed it.

### Updating the Promo PopUp

**Location:** `components/common/PopUp/PromoPopUp.jsx`

#### Adding New Promo Images

Since the popup supports both English and Spanish, you need to prepare two images:

1. **Add both language versions** to the `assets` folder
2. **Import them with the required naming convention:**
   ```jsx
   import bgImgEs from '../../../assets/your-spanish-promo.jpg';
   import bgImgEn from '../../../assets/your-english-promo.jpg';
   ```

#### Updating localStorage Key

Replace the promo key used in localStorage requests. This key should be the current promo name in PascalCase:

```jsx
// Example: if your promo is "black friday 2025"
const promoKey = "BlackFriday2025";
localStorage.getItem(promoKey);
localStorage.setItem(promoKey, "closed");
```

#### Updating the CTA Link

Update the `href` attribute of the main call-to-action image. This is a UTM link so make sure to follow its [requirements](#utm-redirections):

```jsx
// Example
href="https://app.toptiertrader.com/buy-challenge/?el=ElementLocation&id=challengeId&addons=addonName&promo=promoName
"
```

The `?el` parameter should contain the promo name and also add the word "PopUP" in PascalCase to track which popup element triggered the click.
```
//example
?el=BlackFriday2025PopUp
```

## Promo Banner

The main banner is a persistent promotional banner that appears at the bottom of every page, displaying currently active promotions.

### Adding a New Banner

#### Step 1: Create the Banner Component

1. **Create a new banner file** in the `components/common/Banner/` folder
2. **Update the CTA link** using a [UTM redirection](#utm-redirections) (if applicable)
3. **Update the track() function** for analytics

#### Step 2: Update the Main Banner Orchestrator

**Location:** `components/common/Banner/MainBanner.jsx`

1. **Import your new banner component** at the top of the file
2. **Add it to the bannerSchedule array** (usually around line 35)

### Banner Schedule Configuration

Add your banner to the `bannerSchedule` array using this object structure:

```jsx
{
  id: 'uniqueName',
  component: YourBannerComponent,
  props: { translations: translations.section, locale },
  start: 'YYYY-MM-DD',
  end_plus_one: 'YYYY-MM-DD' // ADD ONE DAY MORE TO ENSURE PROMO RUNS THE ENTIRE LAST DAY
}
```

### Configuration Properties

- **`id`** - Unique identifier for the banner
- **`component`** - Your imported banner component
- **`props`** - Props passed to the component (translations and locale or any needed)
- **`start`** - Banner activation date (YYYY-MM-DD format)
- **`end_plus_one`** - Banner deactivation date (YYYY-MM-DD format)

## Important Date Configuration

⚠️ **Critical timing information:**

- **Promo ends at the first minute of the day (00:01)**
- If your promo ends on day 30, the banner stops rendering on day 29 at 00:00
- **Always add one extra day to the end date** to include the full last day of the promo
- **Do not set individual timers** on single banners - all time limitations are managed centrally in the bannerSchedule

### Example Configuration

```jsx
// Example: Black Friday promo running Nov 24-26, 2025
{
  id: 'blackFriday2025',
  component: BlackFridayBanner,
  props: { translations: translations.blackFriday, locale },
  start: '2025-11-24',
  end_plus_one: '2025-11-27' // Added extra day to include Nov 26 fully
}
```

# UTM Redirections

CTA links redirect users to the buy challenge page with specific URL parameters for tracking and configuration.

## URL Parameter Structure

Challenge links are composed of the following parameters:

```
https://app.toptiertrader.com/buy-challenge/?el=ElementLocation&id=challengeId&addons=addonName&promo=promoName
```

### Required Parameters

- **`?el`** - Tracks the source element that triggered the link following the structure: PageSectionElement (e.g., HomeHeroBanner, CheckoutPromoPopup, ProductPageCTA)
- **`?id`** - Unique identifier of the selected challenge
- **`?addons`** - Sets a specific add-on to the challenge product
- **`?promo`** - Sets a specific promotion to the challenge product
- **`?htrafficsource`** - **Always set to "Website"** for web traffic tracking.
- **`?hcategory`** - Tracks the month when the button was clicked. Uses the first 4 letters of the month plus the year.

### Available Challenge IDs:

**Pro Challenge:**
- 5K: `a1e87aed-ea17-47e7-a8de-6aae34b1dc8b`
- 10K: `670ce1e2-70ec-4b6b-9e3f-b8258c187fb1`
- 25K: `522c8b05-078a-4e3c-9762-fd7c0ca0c01e`
- 50K: `d5190cb2-4755-460f-be43-d8a713e4c823`
- 100K: `cad77f17-0cb5-4e7d-8a71-644f4a3f6a17`
- 200K: `5e938ace-5e27-444f-a38e-ad3a6ea5be12`
- 300K: `9ef2c2db-cbeb-4338-9162-43b4c90761b2`

**Flex Challenge:**
- 5K: `c935c0c9-ee3a-40f2-b784-522b1348f117`
- 10K: `abba0248-b97b-4e75-b1ac-0fb722c3ab46`
- 25K: `75b26996-865d-4ac5-931f-4021216c37bf`
- 50K: `f387eb40-1a21-46ca-a91b-fcb4ad4b1848`
- 100K: `9f760fbf-d1d6-4236-8cf9-d338961bdf90`
- 200K: `e02839d7-b72e-4968-9419-31e21bce1235`
- 300K: `5872a1c3-b1ae-457b-b06d-a75d4dbc5b77`

**One Phase Challenge:**
- 5K: `7ce47a4e-860a-4ea2-94a5-922682b97dfe`
- 10K: `f03c2872-1f00-465e-adf6-96d8f232570e`
- 25K: `c530c6a6-4fdf-4f48-805f-7bdf6f797b9c`
- 50K: `b26faa79-8b72-41fd-b995-ab68b9a97c45`
- 100K: `7fc1a973-4d65-4c72-8ea5-33424e3b29d2`
- 200K: `a4ef64e7-ebd8-4b33-b538-c03c9ebfad61`

## Available Add-Ons

### `doubleLeverage`
Trade with twice the standard leverage, increasing both potential profits and risk.

### `tradeOnWeekends`
Allows you to hold or open positions during weekends, especially useful for crypto trading.

### `noStopLoss`
You're not required to set a stop loss on your trades, giving more flexibility.

### `higherProfitShare`
Get a larger percentage of your profits (e.g., 90% instead of 80%).

### `EAsAllowed`
Use Expert Advisors (automated trading bots) in your strategy.

### `newsTrading`
Enables trading during high-impact news events with increased volatility.

### `expressPayout`
Receive your payouts faster than the standard schedule.

### `maxLoss`
Increase the maximum amount you can lose before the account is breached or deactivated.

### `noMinDays`
You don't need to trade a minimum number of days to complete the challenge or receive a payout.

## Example Links

```jsx
// Basic challenge link with tracking
href="https://app.toptiertrader.com/buy-challenge/?el=SummerPromo&id=cad77f17-0cb5-4e7d-8a71-644f4a3f6a17"

// Challenge with double leverage add-on
href="https://app.toptiertrader.com/buy-challenge/?el=PopupBanner&id=cad77f17-0cb5-4e7d-8a71-644f4a3f6a17&addons=doubleLeverage"

// Challenge with double leverage add-on and promo
href="https://app.toptiertrader.com/buy-challenge/?el=PopupBanner&id=cad77f17-0cb5-4e7d-8a71-644f4a3f6a17&addons=doubleLeverage&promo=EXAMPLE14"

// Challenge with multiple parameters
href="/https://app.toptiertrader.com/buy-challenge/?el=MainBanner&id=cad77f17-0cb5-4e7d-8a71-644f4a3f6a17&addons=higherProfitShare&addons=tradeOnWeekendspromo=EXAMPLE14"
```

## UTM System

The UTM system uses the `CtaButton` component to track user interactions and button clicks across the website.

### CtaButton Component

```jsx
function CtaButton({ utm, page, section, translation }) {
   //UTM should be Page / Section / CTA Clicked
   //Home Page -> Home / Landing Section / CTA Clicked
   //Home Page -> Blog / Levels Trading: Community Reviews / CTA Clicked
   return (
       <a href={utm} onClick={() => track(`${page} - ${section} - CTA Clicked `)} rel="noopener noreferrer"
           className="transition-all hover:scale-105">
           <button className={`flex flex-row mt-5 mb:mt-0 items-center text-sm rounded-lg bg-[#FF532D] hover:bg-orange-700 text-white transition-all py-2 px-4 scaleIn`}>
               {translation}
               <FaArrowRight className="w-3 h-3 ml-2" />
           </button>
       </a>
   )
}
```

### Required Properties

### `utm`
The href destination URL when the user clicks the button.

### `page`
The page where this CTA is located (e.g., "Home", "Blog", "About").

### `section`
The specific section or part of the page where the CTA is located. Multiple sections can exist on a single page.

### `translation`
The text label displayed on the button. use the string from [i18n](#i18n-implementation)


## Using the getCurrentUTMMonth() Function for ```?hcategory```

Instead of manually setting the month, use the existing `getCurrentUTMMonth()` function for automatic date handling:

### ❌ Manual Approach (Don't do this)
```jsx
utm="https://app.toptiertrader.com/buy-challenge/?el=SummerPromo&htrafficsource=Website&hcategory=July2025&id=cad77f17-0cb5-4e7d-8a71-644f4a3f6a17"
```

### ✅ Automatic Approach (Recommended)
```jsx
utm={`https://app.toptiertrader.com/buy-challenge/?el=SummerPromo&hcategory=${getCurrentUTMMonth()}&htrafficsource=Website&id=cad77f17-0cb5-4e7d-8a71-644f4a3f6a17`}
```

## Tracking Format

The tracking function follows this pattern:
```
Page - Section - CTA Clicked
```

### Examples:
- `Home - Landing Section - CTA Clicked`
- `Blog - Levels Trading: Community Reviews - CTA Clicked`

## Complete Implementation Example

```jsx
<CtaButton
  utm={`https://app.toptiertrader.com/buy-challenge/?el=HomePage&hcategory=${getCurrentUTMMonth()}&htrafficsource=Website&id=challenge-id-here`}
  page="Home"
  section="Hero Section"
  translation="Start Challenge"
/>
```

## Manual CTA Implementation

While the `CtaButton` component is recommended, CTAs can also be implemented manually. When creating manual CTAs, ensure you:

### Follow the Same Tracking Format
Use the track function with the same format:
```jsx
onClick={() => track(`${page} - ${section} - CTA Clicked`)}
```

### Use the Same UTM/href Conventions
Apply the same URL structure and parameters:
```jsx
href={`https://app.toptiertrader.com/buy-challenge/?el=PageSection&hcategory=${getCurrentUTMMonth()}&htrafficsource=Website&id=challenge-id`}
```

### Manual Implementation Example
```jsx
<a 
  href={`https://app.toptiertrader.com/buy-challenge/?el=BlogPost&hcategory=${getCurrentUTMMonth()}&htrafficsource=Website&id=challenge-id`}
  onClick={() => track('Blog - Article Content - CTA Clicked')}
  rel="noopener noreferrer"
>
  <button className="your-custom-styles">
    Your CTA Text
  </button>
</a>
```

# Formspree Integration

We use Formspree for form handling without external dependencies, implementing it through direct fetch API calls.

This integration can be used the same way in both ```toptiertrader.com``` and ```tx3funding.com```

## Basic Fetch Implementation

the base url for fetch a form is:

```
https://formspree.io/f/FORM_ID
```

this URL can be used in a fetch like this:

```jsx
fetch('https://formspree.io/f/FORM_ID', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(formData),
})
```

the endopoint must be the ID of your target form.

### Form Categories

#### TopTier Phone Numbers
Collection of forms for phone number capture across different services:

- **Futures Phones**
  - Form ID: `[FORM_ID_PLACEHOLDER]`
  - Endpoint: `https://formspree.io/f/[FORM_ID_PLACEHOLDER]`

- **Competitions Phones**
  - Form ID: `[FORM_ID_PLACEHOLDER]`
  - Endpoint: `https://formspree.io/f/[FORM_ID_PLACEHOLDER]`

- **TopTier Academy Phones**
  - Form ID: `[FORM_ID_PLACEHOLDER]`
  - Endpoint: `https://formspree.io/f/[FORM_ID_PLACEHOLDER]`

- **Trader Quiz Phones**
  - Form ID: `[FORM_ID_PLACEHOLDER]`
  - Endpoint: `https://formspree.io/f/[FORM_ID_PLACEHOLDER]`

- **Cue Masterclass Phones**
  - Form ID: `[FORM_ID_PLACEHOLDER]`
  - Endpoint: `https://formspree.io/f/[FORM_ID_PLACEHOLDER]`

- **Website Newsletter Phones**
  - Form ID: `[FORM_ID_PLACEHOLDER]`
  - Endpoint: `https://formspree.io/f/[FORM_ID_PLACEHOLDER]`

#### Futures
Forms related to futures trading and funding:

- **Tx3Funding Banner - June 10**
  - Form ID: `[FORM_ID_PLACEHOLDER]`
  - Endpoint: `https://formspree.io/f/[FORM_ID_PLACEHOLDER]`

- **Tx3Funding - Newsletter**
  - Form ID: `[FORM_ID_PLACEHOLDER]`
  - Endpoint: `https://formspree.io/f/[FORM_ID_PLACEHOLDER]`

- **Futures Pop Up Leads - Post Launch**
  - Form ID: `[FORM_ID_PLACEHOLDER]`
  - Endpoint: `https://formspree.io/f/[FORM_ID_PLACEHOLDER]`

- **Tx3 funding - Affiliates Crypto Wallets**
  - Form ID: `[FORM_ID_PLACEHOLDER]`
  - Endpoint: `https://formspree.io/f/[FORM_ID_PLACEHOLDER]`

#### TopTier Banners
Forms related to toptiertrader.com banner:

- **Banner - June 2025**
  - Form ID: `[FORM_ID_PLACEHOLDER]`
  - Endpoint: `https://formspree.io/f/[FORM_ID_PLACEHOLDER]`


## Implementation with Loading States

```jsx
const [isLoading, setIsLoading] = useState(false);
const [isSubmitted, setIsSubmitted] = useState(false);
const [error, setError] = useState('');

const handleSubmit = async (formData) => {
  setIsLoading(true);
  setError('');

  try {
    const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData), //the object with the data to upload
    });

    if (response.ok) {
      setIsSubmitted(true);
      // Reset form or handle success
    } else {
      setError('Failed to send message. Please try again.');
    }
  } catch (error) {
    setError('Network error. Please check your connection.');
  } finally {
    setIsLoading(false);
  }
};
```

## State Management

### Required States
```jsx
const [isLoading, setIsLoading] = useState(false);
const [isSubmitted, setIsSubmitted] = useState(false);
const [error, setError] = useState('');
```

### State Flow
1. **Before submission:** All states at initial values
2. **During submission:** `isLoading = true`, clear any existing errors
3. **On success:** `isSubmitted = true`, `isLoading = false`
4. **On error:** `error = errorMessage`, `isLoading = false`


## Error Handling

```jsx
try {
  const response = await fetch('https://formspree.io/f/FORM_ID', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });

  if (response.status === 422) {
    // Validation errors
    setError('Please check your form data');
  } else if (!response.ok) {
    // Other HTTP errors
    setError('Failed to send message. Please try again.');
  } else {
    // Success
    setIsSubmitted(true);
  }
} catch (error) {
  // Network errors
  setError('Connection error. Please check your internet.');
}
```

## Loading State Usage

```jsx
// Button state
<button disabled={isLoading}>
  {isLoading ? 'Sending...' : 'Send Message'}
</button>

// Conditional rendering
{isLoading && <p>Sending your message...</p>}

// Success message
{isSubmitted && <p>Message sent successfully!</p>}

// Error message
{error && <p className="error">{error}</p>}
```

## Formspree Dashboard Management

### Accessing Submitted Data

1. **Login to Formspree Dashboard**
   - Go to [formspree.io](https://formspree.io)
   - Login with your account credentials

2. **View Form Submissions**
   - Navigate to your project dashboard
   - Select the specific form you want to review
   - All submitted data will be displayed in a table format

3. **Submission Details**
   - Click on any submission to view full details
   - See all form fields and their submitted values
   - View submission timestamp and sender information

### Form Management

#### Form Settings
- **Form Name:** Update the display name for easy identification
- **Form Endpoint:** Copy the form ID for your fetch requests
- **Notification Settings:** Configure email notifications for new submissions

#### Data Export
- Export submissions as CSV for data analysis
- Filter submissions by date range
- Download individual submissions or bulk export

#### Form Configuration
- **Spam Protection:** Enable/disable spam filtering
- **File Uploads:** Configure file upload limits and types
- **Custom Thank You Pages:** Set redirect URLs after submission
- **Webhook Integration:** Set up webhooks for real-time notifications

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

Every blog must include a CTA at the end using the `CtaButton` component with all required UTM parameters and tracking.

# Creating New Pages in the Next.js App Router

This project uses the **Next.js App Router** architecture. All page routes are located in the `app/` directory, where each folder represents a new route endpoint.

---

## 🛠 How to Create a New Page

To add a new page to the site:

1. **Create a folder** inside the `app/` directory named after the desired endpoint.
2. Inside this folder, create a file named `page.jsx` (or `page.js`).

Example:
```
app/
└── your-endpoint/
    └── page.jsx
```

---

## 📄 Page File Structure

Each `page.jsx` file should include the following:

### 1. Metadata Objects

Define metadata for each supported language (English, Spanish, French):

```js
const metadata_en = {
  title: "TopTier Trader - High Quality Proprietary Trading | Fair Trading Conditions",
  description: "TopTier offers fair trading conditions, simple rules, and guaranteed 24-hour payouts. Start your challenge today with a prop firm that refuses to compromise on quality.",
  keywords: "prop trading, proprietary trading, funded trader, trading challenge, fair trading conditions, fast payouts, trading support, TopTier Trader",
  language: "en",
  subject: "Proprietary Trading Services and Challenges",
  coverage: "Global",
  robots: "index, follow",
  author: "TopTier Trader",
  publisher: "TopTier Trader LLC",
  og: {
    type: "website",
    title: "TopTier Trader - Quality Proprietary Trading That Puts Traders First",
    description: "We could make it cheaper. We could also make it worse. TopTier offers fair trading conditions, simple rules, and 24-hour payouts with no hidden costs or tricks.",
    site_name: "TopTier Trader",
    url: "https://www.toptiertrader.com/en/could-be-worse"
  },
  alternates: {
    canonical: "https://www.toptiertrader.com/en/could-be-worse",
    languages: {
      en: "/en",
      es: "/es",
      "es-co": "/es-co",
      "es-ar": "/es-ar",
      "es-mx": "/es-mx",
      "es-pr": "/es-pr",
      fr: "/fr"
    },
    openGraph: {
      images: {}
    }
  }
};
```

### 2. `generateMetadata` Function

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

### 3. Translation Namespaces

Declare the translation namespaces for [i18Nexus](#i18nexus-implementation-guide):

```js
const i18nNameSpaces = ["common", "your_namespace_here"];
```

### 4. Default Export Function

The main component of the page must be an async function to fetch translations:

```js
export default async function YourPage({ params: { locale } }) {
  const { t } = await initTranslations(locale, i18nNameSpaces);
  const mainLang = locale.split("-")[0];

  const translations = {
    section: {
      title: t("your_namespace:title"),
      description: t("your_namespace:description")
    }
  };

  return (
    <div className="text-[#0B111D]">
      <YourComponent locale={mainLang} translations={translations.section} />
    </div>
  );
}
```

---

## 🧩 Page Content with Components

To keep the page modular and clean:

- Avoid writing HTML directly inside `page.jsx`.
- Abstract each section into reusable components.
- Place components inside `components/YOUR_PAGE_ENDPOINT/SECTION_NAME/component.jsx`.

Example:
```
components/
└── could_be_worse/
    └── Hero/
        └── component.jsx
```

Use the components in your page like this:

```js
import Hero from "@/components/could_be_worse/Hero/component";

<Hero locale={mainLang} translations={translations.hero} />
```

Pass down the `translations` via props to each section.

---

## ✅ Full Example

```js
export async function generateMetadata({ params: { locale } }) {
  let returnedMetadata = '';
  const mainLang = locale.split('-')[0];

  if (mainLang === "en") returnedMetadata = metadata_en;
  if (mainLang === "es") returnedMetadata = metadata_es;
  if (mainLang === "fr") returnedMetadata = metadata_fr;

  return returnedMetadata;
}

const i18nNameSpaces = ["common", "could_be_worse"];

export default async function CouldBeWorse({ params: { locale } }) {
  const { t } = await initTranslations(locale, i18nNameSpaces);
  const mainLang = locale.split('-')[0];

  const translations = {
    hero: {
      h1_title_1: t("could_be_worse:h1_title_1"),
      h1_title_2: t("could_be_worse:h1_title_2")
    },
    cheapPropFirms: {
      t1: t("could_be_worse:t1")
    },
    whatTTStands: {
      t3: t("could_be_worse:t3"),
      card1_t: t("could_be_worse:card1_t")
    },
    theOnlyPropFirm: {
      t4_1: t("could_be_worse:t4_1")
    },
    videosSection: {
      t5: t("could_be_worse:t5"),
      p7: t("could_be_worse:p7")
    },
    youTradeWePay: {
      t6: t("could_be_worse:t6"),
      p8: t("could_be_worse:p8"),
      button1: t("could_be_worse:button_1")
    },
    socialMediaSection: {
      title: t("could_be_worse:t7"),
      desc: t("could_be_worse:p9")
    }
  };

  return (
    <div className="text-[#0B111D]">
      <Hero locale={mainLang} translations={translations.hero} />
      <CheapPropFirms translations={translations.cheapPropFirms} />
      <WhatTTStands translations={translations.whatTTStands} />
      <TheOnlyPropFirm translations={translations.theOnlyPropFirm} />
      <VideoSlider translations={translations.videosSection} />
      <YouTradeWePay translations={translations.youTradeWePay} />
      <SocialMediaSection translations={translations.socialMediaSection} />
    </div>
  );
}
```

# Tx3 Funding page | tx3funding.com

## Promo system

The promotions on the Futures website are managed the same way as on toptiertrader.com

[Read the documentation here](#promo-components)

Additionally, there is a WordPress site available at https://tx3funding.tech, which was built using the Elementor plugin.

## UTM Tracking in Futures

The challenge links on tx3funding.com are handled the same way as on toptiertrader.com.
The base URL structure is:

``
https://tx3funding.tech/checkout/?add-to-cart=CHALLENGE_ID
``

### Required Parameters

- **`?el`** - Tracks the source element that triggered the link following the structure: PageSectionElement (e.g., HomeHeroBanner, CheckoutPromoPopup, ProductPageCTA)
- **`?add-to-cart`** - Unique identifier of the selected challenge
- **`?promo`** - Sets a specific promotion to the challenge product
- **`?htrafficsopurce`** - **Always set to "Website"** for web traffic tracking.
- **`?hcategory`** - Tracks the month when the button was clicked. Uses the first 4 letters of the month plus the year.

This URL also accepts the same parameters used on TopTierTrader, with the exception of add-ons, which are not available on TX3Funding.

For full reference, read the TopTier challenge links documentation [here.](#utm-parameters)

### Available Challenge IDs:

**50K Account:**
- Starter: `1498`
- Pro: `1469`

**100K Account:**
- Starter: `1499`
- Pro: `1495`

**150K Account:**
- Starter: `1500`
- Pro: `1496`

**NOTE: The getCurrentUTMMonth() function is also available on tx3funding.com**
```
{`https://tx3funding.tech/checkout/?add-to-cart=1500&el=HomePageTable&hcategory=${getCurrentUTMMonth()}&htrafficsource=Website`}
```

Just like in TopTier, the Futures website uses reusable button components for managing CTAs. These components are:
```jsx
<PrimaryButton/>
<DefaultButton/>
<ChallengeButton/>
<NoLinkButton/>
```
Each button accepts the following props:

### `children`
The content displayed inside the button (e.g., the label or inner HTML).

### `onClick`
A function executed whenever the button is clicked.

### `href`
The target URL for redirection—this includes the UTM parameters.

### `fullWidth`
A boolean that, when set to true, expands the button's width from fit-content to 100%.

### `trackName`
A string used for tracking the button interaction. It should follow the naming convention used on TopTier:
```
Page - Section - CTA Clicked
```
Use this structure to maintain consistent UTM tracking and analytics across both platforms.

**You can still use manual CTA's following the same conventions, [Read the documentation here](#manual-cta-implementation)**

# Futures Page Contexts and Providers

## Overview

This documentation covers the context providers and client-side components used in the Futures page implementation. The architecture follows a clean separation of concerns with centralized state management for common UI components.

## ClientProvider

### Description

The `ClientProvider` is a React component that wraps all content in the router layout. This component consolidates all necessary aspects that need to be loaded on every page, keeping the layout clean and minimizing imports throughout the application.

### Location
`components/ClientProvider.jsx`

### Implementation

```javascript
'use client';
import { PopUpProvider } from '@/context/PopUpContext';
import { Analytics } from "@vercel/analytics/react";

export default function ClientProviders({ children }) {
  return (
    <PopUpProvider>
      <Analytics />
      {children}
    </PopUpProvider>
  );
}
```

### Features

The `ClientProvider` component renders:
- **PopUpProvider context** - Provides popup state management throughout the app
- **Vercel Analytics component** - Handles analytics tracking
- **Children prop** - Where all your HTML content will be rendered

### Usage

Simply wrap your layout with the `ClientProvider` to enable all provided contexts and analytics.

## PopUpProvider

### Description

A React context that provides an easy-to-use popup management system throughout the application.

### Location
`context/PopUpContext.jsx`

### Custom Hook: usePopUpContext()

The context provides a custom hook that exposes the following state and functions:

- **`popUpValue`** - Boolean state indicating if popup is open/closed
- **`setPopUpValue`** - Function to directly set the popup state
- **`toggleValue`** - Function to toggle between open and closed popup states

### Usage Example

#### Creating a Popup Component

```javascript
'use client'
import { motion, AnimatePresence } from "framer-motion"
import { usePopUpContext } from "@/context/PopUpContext"
import { LoginPopup } from "./LoginPopup"

function MainPopup() {
  const { popUpValue } = usePopUpContext()
  
  return (
    <AnimatePresence>
      {popUpValue && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <LoginPopup />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default MainPopup
```

#### Triggering Popup from Any Component

```javascript
import { usePopUpContext } from "@/context/PopUpContext"

function SomeComponent() {
  const { toggleValue } = usePopUpContext()
  
  return (
    <button onClick={toggleValue}>
      Close PopUp
    </button>
  )
}
```

### Key Benefits

- **Centralized popup management** - Control popups from anywhere in your application
- **Simple API** - Easy-to-use hook with intuitive state management
- **Flexible implementation** - Use conditional rendering to show/hide popup components
- **Global accessibility** - Available throughout the entire application via context

### Implementation Pattern

1. Use `popUpValue` for conditional rendering of popup components
2. Use `toggleValue` function to switch between open/closed states
3. Use `setPopUpValue` for direct state control when needed
4. Combine with animation libraries (like Framer Motion) for smooth transitions

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

# Additional Notes - Development Setup

## GitHub Repository Access

Make sure to request access to the following GitHub repositories:

- **`main-page`** - for toptiertrader.com
- **`futures-website`** - for tx3funding.com

## Task Management

### Monday.com
Constantly check **Monday.com** for task assignments and project updates. This is the primary platform where all development tasks are distributed and tracked.

## Important Contacts

### Design Matters
**Renata Martinez**  
Email or Slack: `renatam@toptiertrader.com`

### Blog Content
**Flo**  
Email or Slack: `alarape@toptiertrader.com`

### Marketing
**Alexander Neff**  
Email or Slack: `alex@toptiertrader.com`

### Project Management
**Carolina Camargo**  
Email or Slack: `carolina.camargo@toptiertrader.com`

### Operations
**Ola**  
Email or Slack: `olawale@toptiertrader.com`

## Communication Channels

### Slack Channels
You'll find dedicated channels for different project areas:

- **`#futures`** - For futures-related discussions
- **`#blogs`** - For blog content and management

**Note**: Request access to these channels if you don't have it already.

## Development Environment

### Recommended IDE
**Visual Studio Code** is our preferred integrated development environment.

### Recommended Extensions
- **Tailwind Snippets** - Helps you write Tailwind CSS classes faster and more efficiently
- **Postman** - API development and testing tool for building and testing REST APIs
- **GitHub Copilot** - AI-powered code completion and suggestions to boost productivity
- **Live Server** - Launch a local development server with live reload for static and dynamic pages
- **Peacock** - Subtly change the color of your Visual Studio Code workspace for easy identification
- **Tailwind CSS IntelliSense** - Intelligent autocomplete, syntax highlighting, and linting for Tailwind CSS
- **ES7+ React/Redux/React-Native snippets** - Essential code snippets for React development with ES7+ syntax

## Design Assets

# Figma Design Guide

## Overview

We use **Figma** for all our design work. Make sure to request access to the organization to:
- Review design assets
- Access branding guidelines
- View component specifications
- Collaborate on design implementations

## Main Figma Files

Our design organization contains several key project files:

- **Website Revamp** - Contains the design of the main website
- **LATAM Homepage** - Contains the variant of the main website but dedicated to LATAM countries
- **Website Banners** - Contains the designs of the banners, popups and thumbnails of the promos
- **Futures Landing Page** - Designs of website pages for Futures website (tx3funding.com)
- **TX3 SMC** - Designs of the graphics for TX3 funding social media campaign, like pages, props, banners etc

## Working with Figma

### Project Organization
More projects can be created depending on the necessity, so make sure to check with design if needed. Also check the different pages inside the projects as these are usually used for better organization.

### Permissions
Request edit permissions if needed but avoid modifying the design unless explicitly required.

### Feedback & Communication
Feedback is usually given through comments on the project, so keep an eye on those for important updates and revision requests.
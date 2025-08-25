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
2. **Update the CTA link** using a [UTM redirection](#utm-redirections)
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
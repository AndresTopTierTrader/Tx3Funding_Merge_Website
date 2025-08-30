# UTM Redirections in ```toptiertrader.com```

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
           <button className={`flex flex-row mt-5 mb:mt-0 items-center text-sm rounded-lg bg-[#FF532D] hover:bg-orange-700 text-textPrimary transition-all py-2 px-4 scaleIn`}>
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
The text label displayed on the button.


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
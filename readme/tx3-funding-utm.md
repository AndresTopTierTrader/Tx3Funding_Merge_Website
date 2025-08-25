# Tx3 Funding page | tx3funding.com

## Promo system

The promotions on the Futures website are managed the same way as on toptiertrader.com

[Read the documentation here](#promo-components)

Additionally, there is a WordPress site available at https://tx3funding.tech, which was built using the Elementor plugin.

## UTM Tracking in Futures ```tx3funding.com```

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
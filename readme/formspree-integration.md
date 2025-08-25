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
# TableSelection System

A comprehensive Next.js challenge selection interface with multi-language support, dynamic pricing, addon configuration, and seamless checkout integration for trading challenge platforms.

## 🎯 Overview

This system provides an interactive challenge selection experience where users can configure trading challenges, select addons, and seamlessly transition to the checkout process. It features real-time price calculations, multi-broker support, responsive design, and sophisticated state management.

## 🏗️ Architecture

### System Components

```
/TableSection/
├── Main.jsx                         # Central orchestrator with state management
├── Components/
│   ├── AccountAmountSelector.jsx    # Dynamic account size selection
│   ├── AddOnsToggleBox.jsx          # Addon configuration with pricing
│   ├── BrokerSelector.jsx           # Multi-broker platform selection
│   ├── CardTable.jsx                # Individual feature display cards
│   ├── ChallengeSelector.jsx        # Challenge type selection interface
│   ├── CustomToggle.jsx             # Stylized on/off toggle component
│   ├── ShowMoreButton.jsx           # Table expansion with smooth scrolling
│   └── TableWithAddons.jsx          # Main table orchestrator component
├── OnePhaseChallenge/
│   └── OnePhaseTable.jsx            # One Phase challenge table renderer
├── TwoPhaseChallenge/
│   ├── FlexTable.jsx                # Two Phase Flex challenge renderer
│   └── ProTable.jsx                 # Two Phase Pro challenge renderer
├── Data/
│   └── TableData.js                 # Challenge data generation & localization
├── Utils/
│   └── tableHelpers.js              # Core utilities & configuration
└── 
```

## 🔄 Data Flow

### 1. Selection Flow Pipeline
```
User Selection → ChallengeSelector → AccountAmountSelector → BrokerSelector → TableWithAddons → AddOnsToggleBox → Checkout URL Generation
```

### 2. State Management Architecture
**Main.jsx** acts as the central orchestrator managing:
- `challengeType`: Current challenge type (ONE_PHASE, TWO_PHASE)
- `selectedChallenge`: Variant for Two Phase (FLEX, PRO)
- `accountAmount`: Selected account size with regional differences
- `selectedBroker`: Trading platform (tradelocker, ctrader)
- `addOns`: Addon configuration object with boolean values
- `isTableExpanded`: Table expansion state
- `currentPriceData`: Real-time pricing with addon calculations

### 3. Component Communication
```
Main.jsx ↔ ChallengeSelector (challenge type selection)
Main.jsx ↔ AccountAmountSelector (account size + regional logic)
Main.jsx ↔ BrokerSelector (platform selection)
Main.jsx ↔ TableWithAddons (table orchestration)
TableWithAddons ↔ [OnePhase|Flex|Pro]Table (challenge-specific rendering)
TableWithAddons ↔ AddOnsToggleBox (addon configuration + pricing)
AddOnsToggleBox ↔ CustomToggle (individual addon toggles)
CardTable ↔ Dynamic Icon System (feature-based icon mapping)
```

## 🎮 Challenge System

### Challenge Types
- **One Phase**: Direct challenge with single evaluation
- **Two Phase Flex**: Premium challenge with unlimited duration (badge)
- **Two Phase Pro**: Professional challenge with advanced features

### Account Amounts
- **Standard**: 5K, 10K, 25K, 50K, 100K, 200K
- **Two Phase**: Additional 300K option
- **LATAM Region**: Additional 2.5K option for all challenges

### Regional Customization
```javascript
// LATAM users get additional options
const isLATAM = isLATAMUser();
const baseAmounts = ["5K", "10K", "25K", "50K", "100K", "200K"];
const availableAmounts = isLATAM ? ["2.5K", ...baseAmounts] : baseAmounts;
```

## 🏦 Multi-Broker System

### Broker Support
- **TradeLocker**: Primary trading platform
- **CTrader**: Alternative trading platform
- **Environment-Controlled**: Dynamic broker availability
- **Checkout Integration**: Seamless broker parameter passing

### Environment Configuration
```bash
# Show both brokers (user selection required)
NEXT_PUBLIC_BROKER_CONFIG=all

# Show only CTrader (auto-selected)
NEXT_PUBLIC_BROKER_CONFIG=ctrader

# Show only TradeLocker (auto-selected)
NEXT_PUBLIC_BROKER_CONFIG=tradelocker
```

### Broker Logic
- **Conditional Rendering**: Hides selector when only one option available
- **State Synchronization**: Maintains broker choice across components
- **URL Generation**: Adds broker parameter to checkout URLs
- **Integration**: Matches checkout system broker configuration

## 🔧 Addon System

### Challenge-Specific Addons
```javascript
const CHALLENGE_ADDONS = {
  ONE_PHASE: {
    doubleLeverage: true,     // 1:30 → 1:60
    higherProfitShare: true,  // 80/20 → 90/10
    newsTrading: false        // News trading features
  },
  TWO_PHASE_FLEX: {
    doubleLeverage: true,     // 1:50 → 1:100
    higherProfitShare: true,  // 80/20 → 90/10
    newsTrading: false,       // News trading features
    EAsAllowed: false         // Expert Advisors
  },
  TWO_PHASE_PRO: {
    doubleLeverage: true,     // 1:50 → 1:100
    higherProfitShare: true,  // 80/20 → 90/10
    newsTrading: false,       // News trading features
    maxLoss: true,            // 10% → 8% (hybrid)
    noMinDays: false,         // Remove minimum trading days
    tradeOnWeekends: true,    // Weekend trading capability
    EAsAllowed: false         // Expert Advisors
  }
}
```

### Addon Features
- **Dynamic Filtering**: Shows only relevant addons per challenge
- **Real-time Pricing**: Calculates addon costs instantly
- **Visual Indicators**: Lightning bolt icons with tooltips
- **State Management**: Persistent addon choices
- **Localization**: Multi-language addon labels

### Addon Pricing Integration
```javascript
const currentPriceData = pricingService.getCurrentPriceData(
  challengeType,
  selectedChallenge,
  accountAmount,
  isLATAM,
  filteredAddOnsForPricing
);
```

## 📊 Data Generation System

### Challenge Data Structure
```javascript
{
  title: "Profit Target",
  valueOne: "$5,000 (10%)",    // Phase 1 value
  valueTwo: "$2,500 (5%)",     // Phase 2 value  
  valueThree: null,            // Funded value
  description: "Detailed explanation...",
  showPhases: true,            // Multi-phase display
  showSubtitle: true,          // Phase labels
  hasAddon: true              // Addon indicator
}
```

### Multi-Language Support
- **Languages**: English, Spanish, French
- **Dynamic Translations**: Real-time language switching
- **Regional Content**: LATAM-specific messaging
- **Addon Labels**: Localized addon descriptions
- **Challenge Names**: Translated challenge titles

### Dynamic Calculations
```javascript
// Real-time calculations based on account amount
const calculateBaseAmount = (amount) => parseFloat(amount.replace("K", "")) * 1000;
const profitTarget = baseAmount * 0.1;
const maxLoss = baseAmount * 0.1;
const dailyLoss = baseAmount * 0.05;
```

## 🎨 Component System

### CardTable Component
- **Dynamic Icons**: Feature-based icon mapping system
- **Addon Indicators**: Lightning bolt icons with tooltips
- **Responsive Design**: Mobile-first card layout
- **Hover Effects**: Smooth background transitions
- **Accessibility**: ARIA labels and keyboard navigation

### Icon Mapping System
```javascript
const iconMap = {
  time: { keywords: ["trading days", "duration", "días", "durée"] },
  risk: { keywords: ["max loss", "daily drawdown", "pérdida máxima"] },
  profit: { keywords: ["share", "split", "participación", "partage"] },
  target: { keywords: ["target", "objetivo", "objectif"] },
  settings: { keywords: ["leverage", "news trading", "weekend"] },
  consistency: { keywords: ["consistency", "consistencia", "consistance"] }
};
```

### Table Expansion System
- **Responsive Limits**: 2 cards mobile, 4 cards desktop when collapsed
- **Smooth Scrolling**: Auto-scroll to challenge selector on collapse
- **Animation**: Framer Motion transitions
- **State Persistence**: Remembers expansion state

## 🔗 Checkout Integration

### URL Generation System
```javascript
const getCurrentChallengeUrl = () => {
  const baseUrl = selectedTable[accountAmount];
  const url = new URL(baseUrl);
  
  // Add broker parameter
  url.searchParams.set("broker", selectedBroker);
  
  // Add addon parameters
  enabledAddOns.forEach(addon => {
    url.searchParams.append("addons", addon);
  });
  
  return url.toString();
};
```

### Parameter Structure
- **Account Amount**: Mapped to product variations
- **Challenge Type**: One Phase, Two Phase Flex, Two Phase Pro
- **Broker**: tradelocker or ctrader
- **Addons**: Array of enabled addon keys
- **Regional**: LATAM detection for pricing

### Checkout Handoff
- **Seamless Transition**: URL parameters processed by checkout
- **State Preservation**: All selections maintained
- **Price Synchronization**: Pricing calculations match checkout
- **Analytics Tracking**: User journey tracking

## 🚀 Animation System

### Smooth Transitions
- **Challenge Selection**: Fade transitions between challenge types
- **Table Expansion**: Smooth height animations
- **Card Interactions**: Hover and focus effects
- **Button States**: Loading and success animations

### Animation Configuration
```javascript
const ANIMATION_VARIANTS = {
  item: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  },
  button: {
    hover: { scale: 1.02 },
    tap: { scale: 0.98 }
  }
};
```

### Performance Optimizations
- **Lazy Loading**: In-view animation triggers
- **Reduced Motion**: Accessibility-friendly animations
- **Hardware Acceleration**: GPU-optimized transitions
- **Animation Cleanup**: Proper component unmounting

## 📱 Responsive Design

### Mobile-First Approach
- **Grid System**: 1 column mobile, 2 columns desktop
- **Button Layout**: 3-column mobile amount selector
- **Text Scaling**: Responsive typography system
- **Touch Targets**: 48px minimum touch areas

### Breakpoint System
```javascript
const BREAKPOINTS = {
  mobile: "< 640px",
  tablet: "640px - 768px", 
  desktop: "> 768px"
};
```

### Design Consistency
- **Color System**: Consistent with checkout branding
- **Spacing**: Tailwind utility classes
- **Focus States**: Brand color (#45D1FF) focus rings
- **Error States**: Red accent styling
- **Success States**: Green accent styling

## 🛡️ State Management

### Advanced State Architecture
```javascript
const useTableState = (initial, isLATAM) => {
  const [challengeType, setChallengeType] = useState(initial);
  const [selectedChallenge, setSelectedChallenge] = useState(null);
  const [accountAmount, setAccountAmount] = useState("5K");
  const [selectedBroker, setSelectedBroker] = useState("tradelocker");
};
```

### State Synchronization
- **Challenge Changes**: Reset addons to defaults
- **Account Changes**: Recalculate pricing
- **Broker Changes**: Validate availability
- **Addon Changes**: Update pricing immediately

### State Persistence
- **Session Storage**: User preferences maintained
- **URL Parameters**: Deep linking support
- **Error Recovery**: Graceful state restoration
- **Regional Settings**: LATAM preference memory

## 🎯 User Experience

### Smart Defaults
- **Challenge Type**: Two Phase Flex (premium option)
- **Account Amount**: 5K (entry level)
- **Broker**: TradeLocker (if available)
- **Addons**: Challenge-appropriate defaults

### Progressive Disclosure
- **Initial View**: Collapsed tables (2-4 cards)
- **Expansion**: Full feature comparison
- **Addon Summary**: Clear pricing breakdown
- **CTA Focus**: Single clear action button

### Accessibility Features
- **Keyboard Navigation**: Full tab order support
- **Screen Readers**: Comprehensive ARIA labels
- **Focus Management**: Visible focus indicators
- **Reduced Motion**: Respects user preferences

## 🔧 Development Features

### Debugging System
- **Console Logging**: Emoji-coded debug messages
- **State Tracking**: Real-time state visualization
- **Price Debugging**: Addon price calculation logs
- **URL Generation**: Parameter construction logs

### Code Organization
- **Component Separation**: Single responsibility principle
- **Hook Abstraction**: Reusable state logic
- **Service Layer**: Business logic isolation
- **Utility Functions**: Pure helper functions

### Performance Monitoring
- **Analytics Integration**: Vercel Analytics tracking
- **Error Boundaries**: Graceful error handling
- **Loading States**: Skeleton animations
- **Optimization**: Memoized components

## 📊 Integration Points

### Pricing Service
```javascript
const currentPriceData = pricingService.getCurrentPriceData(
  challengeType,
  selectedChallenge, 
  accountAmount,
  isLATAM,
  filteredAddOns
);
```

### Analytics Tracking
```javascript
const handleCTAClick = () => {
  track(getTrackingEventName);
};
```

### Localization Hook
```javascript
const {
  getBadgeText,
  getCTAText,
  getAccountTypeTitle,
  getChallengeTypeTexts
} = useLocalization(locale, translations, isLATAM, accountAmount);
```

## 🚨 Error Handling

### Graceful Degradation
- **Missing Data**: Fallback to default values
- **Network Issues**: Cached pricing data
- **Invalid States**: Auto-correction logic
- **Browser Compatibility**: Progressive enhancement

### Error Recovery
- **State Reset**: Return to known good state
- **User Feedback**: Clear error messaging
- **Retry Mechanisms**: Automatic state recovery
- **Logging**: Comprehensive error tracking

## 🧪 Testing Scenarios

### Challenge Selection Flow
- **One Phase**: Select → Configure → Addons → Checkout
- **Two Phase Flex**: Premium badge → Addons → Pricing
- **Two Phase Pro**: Advanced features → Addon filtering

### Regional Testing
- **LATAM Users**: 2.5K option availability
- **Standard Users**: Base account amounts only
- **Language Switching**: Real-time translation updates

### Broker Configuration
- **All Brokers**: User selection required
- **Single Broker**: Auto-selection behavior
- **Environment Variables**: Configuration testing

### Addon Combinations
- **Valid Combinations**: Challenge-specific filtering
- **Price Calculations**: Real-time updates
- **State Persistence**: Addon choices maintained

## 🔮 Future Enhancements

### Potential Improvements
- **A/B Testing**: Challenge type preference optimization
- **Advanced Analytics**: User behavior heatmaps
- **Saved Configurations**: User preference storage
- **Social Sharing**: Challenge configuration sharing
- **Comparison Tool**: Side-by-side challenge comparison

### Scalability Considerations
- **Additional Challenges**: Modular challenge system
- **More Brokers**: Extensible broker configuration
- **Advanced Addons**: Complex addon dependency system
- **International Expansion**: Additional regional customizations

---

## 📝 Notes

- **Browser Compatibility**: Requires modern browsers with ES6+ support
- **Performance**: Optimized for 60fps animations and smooth interactions
- **Accessibility**: WCAG 2.1 AA compliant design patterns
- **SEO**: Semantic HTML structure for search optimization
- **Integration**: Designed for seamless checkout system handoff
- **Modular Design**: Each component independently testable and maintainable

This system provides enterprise-level challenge selection functionality with premium user experience, comprehensive localization, dynamic pricing integration, and sophisticated state management architecture.
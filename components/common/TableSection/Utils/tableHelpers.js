import {
  CHALLENGE_TYPES,
  TWO_PHASE_VARIANTS,
} from "@/constants/tableSection/tableSection.js";

// Define which addons are available for each challenge type
export const CHALLENGE_ADDONS = {
  [CHALLENGE_TYPES.ONE_PHASE]: {
    doubleLeverage: true,
    higherProfitShare: true,
    newsTrading: false,
  },
  [`${CHALLENGE_TYPES.TWO_PHASE}_${TWO_PHASE_VARIANTS.FLEX}`]: {
    doubleLeverage: true,
    higherProfitShare: true,
    newsTrading: false,
    EAsAllowed: false,
  },
  [`${CHALLENGE_TYPES.TWO_PHASE}_${TWO_PHASE_VARIANTS.PRO}`]: {
    doubleLeverage: true,
    higherProfitShare: true,
    newsTrading: false,
    maxLoss: true,
    noMinDays: false,
    tradeOnWeekends: true,
    EAsAllowed: false,
  },
};

// Helper function to get current challenge key
export const getCurrentChallengeKey = (challengeType, selectedChallenge) => {
  if (challengeType === CHALLENGE_TYPES.ONE_PHASE) {
    return CHALLENGE_TYPES.ONE_PHASE;
  }
  return `${challengeType}_${selectedChallenge}`;
};

// Helper function to get filtered addons for current challenge
export const getFilteredAddOns = (addOns, challengeType, selectedChallenge) => {
  const challengeKey = getCurrentChallengeKey(challengeType, selectedChallenge);
  const availableAddonsConfig = CHALLENGE_ADDONS[challengeKey] || {};

  const filtered = {};
  Object.keys(availableAddonsConfig).forEach((addon) => {
    filtered[addon] = addOns[addon] || false;
  });

  return filtered;
};

export const getDefaultAddOns = (challengeType, selectedChallenge) => {
  const challengeKey = getCurrentChallengeKey(challengeType, selectedChallenge);
  return CHALLENGE_ADDONS[challengeKey] || {};
};

// Helper function to format challenge title
export const formatChallengeTitle = (
  accountAmount,
  challengeType,
  selectedChallenge
) => {
  if (challengeType === CHALLENGE_TYPES.ONE_PHASE) {
    return `${accountAmount} - One Phase Challenge`;
  } else {
    const variant =
      selectedChallenge === TWO_PHASE_VARIANTS.FLEX ? "Flex" : "Pro";
    return `${accountAmount} - Two Phase - ${variant} Challenge`;
  }
};

// Helper function to calculate addon price (total price - base price)
export const calculateAddonPrice = (currentPriceData) => {
  if (!currentPriceData.basePrice || !currentPriceData.price) {
    return "$0.00";
  }

  const basePrice = parseFloat(currentPriceData.basePrice.replace(/[$,]/g, ""));
  const totalPrice = parseFloat(currentPriceData.price.replace(/[$,]/g, ""));
  const addonPrice = totalPrice - basePrice;

  return addonPrice > 0 ? `$${addonPrice.toFixed(2)}` : "$0.00";
};

// Master styles for the table section components
export const MASTER_CONTAINER_STYLES = {
  mainWrapper: "w-full max-w-[850px] mx-auto",
  childContainer: "w-full",
  responsivePadding: "px-4 sm:px-6 md:px-6",
};

export const MASTER_VISUAL_STYLES = {
  border: "2px solid #4D516A",
  borderRadius: "15px",
  background: "transparent",
  padding: "p-4 sm:p-6 md:p-6 lg:p-6",
  gridContainer: "grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full",
  gridStyle: {
    width: "100%",
    minHeight: "240px",
  },
};

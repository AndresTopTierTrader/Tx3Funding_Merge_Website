import { ADDON_TRANSLATIONS, DATA_SOURCES } from '../../data/constants.js';

// Decode URL parameters by replacing encoded commas
export const decodeUrl = (url) => {
  return url.replace(/%2C/g, '&addons=');
};

// Extract challenge amount from product name (e.g., "25K" from product name)
export const extractChallengeAmount = (productName) => {
  if (!productName) return 'Unknown';
  const match = productName.match(/(\d+(?:\.\d+)?K)/);
  return match ? match[1] : 'Unknown';
};

// Get broker display name for UI
export const getBrokerDisplayName = (broker) => {
  const brokerNames = {
    'matchtrader': 'MatchTrader',
    'ctrader': 'CTrader'
  };
  return brokerNames[broker] || broker;
};

// Translate add-on abbreviations to readable names
export const translateAddons = (addonAbbreviations) => {
  if (!addonAbbreviations || addonAbbreviations.length === 0) return [];

  return addonAbbreviations.map(abbrev => {
    return ADDON_TRANSLATIONS[abbrev] || abbrev;
  });
};

// Check if URL contains valid parameters for processing
export const hasValidUrlParams = (urlParam) => {
  return !!urlParam && urlParam.includes('id=');
};

// Consolidate product info from either URL result or stored data including broker and promo code
export const getProductDisplayInfo = (result, storedProductInfo, promoCode = null) => {


  if (result && result.success) {
    return {
      challengeType: result.productInfo.challengeType,
      productName: result.matchingProduct.name,
      addons: result.urlParams.addons,
      price: result.matchingProduct.price,
      broker: result.broker || result.urlParams.broker || 'matchtrader',
      source: DATA_SOURCES.URL,
      variationId: result.matchingProduct.id,
      productId: result.matchingProduct.parentId ? result.matchingProduct.parentId : result.matchingProduct.productId,
      discountCode: promoCode || result.urlParams.promo || null
    };
  } else if (storedProductInfo) {

    console.log("--- Getting info from local storage ----")

    return {
      challengeType: storedProductInfo.challengeType,
      price: storedProductInfo.price,
      productName: storedProductInfo.productName,
      addons: storedProductInfo.addons,
      broker: storedProductInfo.broker || 'matchtrader',
      source: DATA_SOURCES.LOCAL_STORAGE,
      variationId: storedProductInfo.variationId,
      productId: storedProductInfo.productId,
      discountCode: promoCode || storedProductInfo.discountCode || null
    };
  }
  return null;
};

// Create result object from stored data for consistent format including broker
export const createResultFromStoredData = (stored) => {
  return {
    success: true,
    urlParams: {
      id: 'from-storage',
      addons: stored.addons,
      promo: null,
      broker: stored.broker || 'matchtrader'
    },
    productInfo: { challengeType: stored.challengeType, size: 'stored' },
    matchingProduct: {
      id: stored.variationId,
      productId: stored.productId,
      name: stored.productName,
      price: stored.price,
      broker: stored.broker || 'matchtrader'
    },
    addonAbbreviations: stored.addons,
    broker: stored.broker || 'matchtrader'
  };
};

// Create product data object for localStorage storage including broker
export const createProductDataForStorage = (processResult, url) => {
  return {
    incomingUrl: url,
    price: processResult.matchingProduct.price,
    challengeType: processResult.productInfo.challengeType,
    variationId: processResult.matchingProduct.id,
    productId: processResult.matchingProduct.parentId,
    productName: processResult.matchingProduct.name,
    addons: processResult.urlParams.addons,
    broker: processResult.broker || processResult.urlParams.broker || 'matchtrader'
  };
};

// Determine component rendering state based on conditions including broker errors
export const getComponentState = (productDisplayInfo, isProcessing, hasError, urlHasValidParams, hasStoredData, loadingStoredData, brokerError = false) => {
  if (isProcessing) return 'loading';
  if (brokerError) return 'brokerError';
  if (!!productDisplayInfo && !isProcessing) return 'showProduct';
  if (hasError && !productDisplayInfo) return 'showError';
  if (!urlHasValidParams && !hasStoredData && !loadingStoredData) return 'showNoUrl';
  return null;
};
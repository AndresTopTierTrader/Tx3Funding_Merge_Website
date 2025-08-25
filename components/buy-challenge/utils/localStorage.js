// Utility functions for localStorage operations
const STORAGE_KEY = 'buy_challenge_product_info';

// Save product information to localStorage including broker
export const saveProductInfo = (productData) => {

  try {
    const dataToStore = {
      incomingUrl: productData.incomingUrl,
      price: productData.price,
      challengeType: productData.challengeType,
      variationId: productData.variationId,
      productId: productData.productId,
      productName: productData.productName,
      addons: productData.addons,
      broker: productData.broker || 'matchtrader',
      timestamp: Date.now()
    };
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(dataToStore));
    return true;
  } catch (error) {
    console.error('Failed to save product info to localStorage:', error);
    return false;
  }
};

// Get product information from localStorage
export const getProductInfo = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return null;
    
    const parsed = JSON.parse(stored);
    // Ensure broker field exists for backwards compatibility
    if (!parsed.broker) {
      parsed.broker = 'matchtrader';
    }
    
    return parsed;
  } catch (error) {
    console.error('Failed to get product info from localStorage:', error);
    return null;
  }
};

// Clear product information from localStorage
export const clearProductInfo = () => {
  try {
    localStorage.removeItem(STORAGE_KEY);
    return true;
  } catch (error) {
    console.error('Failed to clear product info from localStorage:', error);
    return false;
  }
};

// Check if product information exists in localStorage
export const hasStoredProductInfo = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored !== null;
  } catch (error) {
    return false;
  }
};

// Check if stored broker matches environment configuration
export const isStoredBrokerAllowed = () => {
  try {
    const stored = getProductInfo();
    if (!stored || !stored.broker) return true; // Default allow if no broker stored
    
    const brokerConfig = process.env.NEXT_PUBLIC_BROKER_CONFIG || 'all';
    
    switch (brokerConfig) {
      case 'all':
        return true;
      case 'ctrader':
        return stored.broker === 'ctrader';
      case 'matchtrader':
        return stored.broker === 'matchtrader';
      default:
        return true;
    }
  } catch (error) {
    console.error('Failed to check stored broker allowance:', error);
    return true;
  }
};
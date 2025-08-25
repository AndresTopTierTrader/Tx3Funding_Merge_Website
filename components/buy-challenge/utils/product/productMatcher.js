import { UUID_TO_PRODUCT, ADDON_REVERSE_MAPPINGS } from '../../data/productMappings.js';
import { ENVIRONMENT } from '@/constants/global.js';

function extractParentId(str) {
  return String(str.replace("id:", "").trim());
}

// Get broker display name for CSV matching
function getBrokerDisplayName(broker) {
  const brokerNames = {
    'matchtrader': 'MatchTrader',
    'ctrader': 'cTrader'  // Fixed: Changed from 'CTRADER' to 'cTrader'
  };
  return brokerNames[broker] || broker;
}

// Check if broker is allowed based on environment variable
function isBrokerAllowed(broker) {
  const brokerConfig = process.env.NEXT_PUBLIC_BROKER_CONFIG || 'all';

  switch (brokerConfig) {
    case 'all':
      return true;
    case 'ctrader':
      return broker === 'ctrader';
    case 'matchtrader':
      return broker === 'matchtrader';
    default:
      return true;
  }
}

// Read and parse CSV data using fetch
async function readCsvData() {
  try {
    // Fetch CSV from public folder
    const response = await fetch('/productData.csv');
    const csvText = await response.text();

    // Split into lines and parse with proper CSV handling
    const lines = csvText.split('\n');

    if (lines.length === 0) return [];

    // Parse headers
    const headerLine = lines[0];
    const headers = parseCSVLine(headerLine);

    const data = [];
    for (let i = 1; i < lines.length; i++) {
      const line = lines[i].trim();
      if (line) {
        const values = parseCSVLine(line);
        const row = {};
        headers.forEach((header, index) => {
          row[header] = values[index] || '';
        });
        data.push(row);
      }
    }

    // Log some sample products to verify parsing (now includes both brokers)
    const sampleProducts = data.filter(p => p.Name && (p.Name.includes('MatchTrader') || p.Name.includes('CTRADER'))).slice(0, 5);
    sampleProducts.forEach((product, index) => {
    });

    return data;
  } catch (error) {
    console.error('Error reading CSV:', error);
    return [];
  }
}

// Helper function to properly parse CSV lines with quoted values
function parseCSVLine(line) {
  const result = [];
  let current = '';
  let inQuotes = false;
  let i = 0;

  while (i < line.length) {
    const char = line[i];

    if (char === '"') {
      if (inQuotes && line[i + 1] === '"') {
        // Handle escaped quotes ("")
        current += '"';
        i += 2;
      } else {
        // Toggle quotes
        inQuotes = !inQuotes;
        i++;
      }
    } else if (char === ',' && !inQuotes) {
      // End of field
      result.push(current.trim());
      current = '';
      i++;
    } else {
      current += char;
      i++;
    }
  }

  // Add the last field
  result.push(current.trim());

  return result;
}

// Parse URL parameters from query string including broker
function parseUrlParams(url) {
  try {
    const urlObj = new URL(url);
    const params = new URLSearchParams(urlObj.search);

    const id = params.get('id');
    const promo = params.get('promo');
    const broker = params.get('broker') || 'matchtrader';
    const addons = params.getAll('addons');

    return { id, addons, promo, broker };
  } catch (error) {
    console.error('Error parsing URL:', error);
    return { id: null, addons: [], promo: null, broker: 'matchtrader' };
  }
}

// Map UUID to challenge type and size with CSV-friendly names
function getProductInfoFromUuid(uuid) {
  const productInfo = UUID_TO_PRODUCT[uuid];
  if (!productInfo) return null;

  // Map to CSV naming convention
  let csvChallengeType = productInfo.challengeType;
  if (productInfo.challengeType === 'Two Phase Pro Challenge') {
    csvChallengeType = 'Pro Challenge';
  } else if (productInfo.challengeType === 'Two Phase Flex Challenge') {
    csvChallengeType = 'Flex Challenge';
  } else if (productInfo.challengeType === 'One Phase Challenge') {
    csvChallengeType = 'One Phase Challenge'; // Keep as is for One Phase
  }

  return {
    challengeType: csvChallengeType,
    size: productInfo.size
  };
}

// Convert addon full names to abbreviations and sort them
function convertAddonsToAbbreviations(addons) {
  return addons
    .map(addon => ADDON_REVERSE_MAPPINGS[addon])
    .filter(Boolean)
    .sort();
}

// Find matching product in CSV data based on broker
function findMatchingProduct(csvData, challengeType, size, addonAbbreviations, broker) {
  // Handle NONE case: if no addons, use "NONE" to match CSV format
  const addonString = addonAbbreviations.length > 0 ? addonAbbreviations.join(',') : 'NONE';
  const brokerDisplayName = getBrokerDisplayName(broker);

  let brokerCount = 0;
  let matchingChallengeType = 0;
  let matchingSize = 0;

  for (const product of csvData) {
    const name = product.Name;

    // Filter products based on selected broker (removed the skip for CTRADER)
    if (name && name.includes(brokerDisplayName)) {
      brokerCount++;

      try {
        const nameParts = name.split(' - ');

        if (nameParts.length >= 4) {
          const productChallengeType = nameParts[0].trim();
          const productSize = nameParts[1].trim();
          const productAddons = nameParts[3].trim();

          // Handle addon comparison - normalize both sides
          let normalizedProductAddons;
          if (productAddons === 'NONE') {
            normalizedProductAddons = 'NONE';
          } else {
            // Sort product addons for comparison
            const productAddonArray = productAddons.split(',').map(a => a.trim()).sort();
            normalizedProductAddons = productAddonArray.join(',');
          }

          if (productChallengeType === challengeType) {
            matchingChallengeType++;
          }

          if (productSize === size) {
            matchingSize++;
          }

          if (productChallengeType === challengeType &&
            productSize === size &&
            normalizedProductAddons === addonString) {

              console.log(`--- Complete Product --- `, product);

            let cleanedParentId = null;

            // Find parent ID from probable columns
            if (product.Grouped_Products) {
              cleanedParentId = extractParentId(product.Grouped_Products);
            } else if (product.Cross_Sells) {
              cleanedParentId = extractParentId(product.Cross_Sells);
            } else if (product.Button_Text) {
              cleanedParentId = extractParentId(product.Button_Text);
            } else if (product.Upsells) {
              cleanedParentId = extractParentId(product.Upsells);
            } else if (product.Position && product.Position !== '0') {
              cleanedParentId = extractParentId(product.Position);
            } else if (product.Url) {
              cleanedParentId = extractParentId(product.Url);
            } else if (product.Parent) {
              cleanedParentId = extractParentId(product.Parent);
            }
              

            let cleanedPrice = null;

            if (product.Categories && product.Categories !== '0') {
              cleanedPrice = product.Categories;
            } else if (product.Shipping_Class && product.Shipping_Class !== '0') {
              cleanedPrice = product.Shipping_Class;
            } else if (product.Download_Limit && product.Download_Limit !== '0') {
              cleanedPrice = product.Download_Limit;
            } else if (product.Tags && product.Tags !== '0') {
              cleanedPrice = product.Tags;
            } else if (product.Download_Expiry_Days && product.Download_Expiry_Days !== '0') {
              cleanedPrice = product.Download_Expiry_Days;
            } else if (product.Images && product.Images !== '0') {
              cleanedPrice = product.Images;
            } else if (product.Regular_Price && product.Regular_Price !== '0') {
              cleanedPrice = product.Regular_Price;
            }

            return {
              id: product.ID,
              parentId: cleanedParentId,
              name: product.Name,
              price: cleanedPrice,
              broker: broker
            };
          }
        }
      } catch (error) {
        console.error('❌ Error processing product:', name, error);
      }
    }
  }

  return null;
}

// Main function to process URL and find matching product
export async function processUrlAndFindProduct(url) {

  const csvData = await readCsvData();

  const { id, addons, promo, broker } = parseUrlParams(url);

  // Check if broker is allowed by environment configuration
  if (!isBrokerAllowed(broker)) {
    const brokerConfig = process.env.NEXT_PUBLIC_BROKER_CONFIG || 'all';
    return {
      error: `Broker ${getBrokerDisplayName(broker)} is not available in the current configuration`,
      brokerError: true,
      requestedBroker: broker,
      allowedBrokers: brokerConfig
    };
  }

  const productInfo = getProductInfoFromUuid(id);

  if (!productInfo) {
    return { error: 'Invalid product ID' };
  }

  const addonAbbreviations = convertAddonsToAbbreviations(addons);

  // Construct the exact string we're looking for based on broker
  const brokerDisplayName = getBrokerDisplayName(broker);
  const targetString = `${productInfo.challengeType} - ${productInfo.size} - ${brokerDisplayName}${addonAbbreviations.length > 0 ? ` - ${addonAbbreviations.join(',')}` : ' - NONE'}`;

    console.log('🎯 EXACT TARGET STRING:',targetString);
  
  const matchingProduct = findMatchingProduct(
    csvData,
    productInfo.challengeType,
    productInfo.size,
    addonAbbreviations,
    broker
  );

    console.log('✅ Found matching product:', matchingProduct);

  return {
    success: true,
    urlParams: { id, addons, promo, broker },
    productInfo: productInfo,
    matchingProduct: matchingProduct,
    addonAbbreviations: addonAbbreviations,
    broker: broker
  };
}
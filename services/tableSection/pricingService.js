// Pricing service for managing challenge pricing data

class PricingService {
  constructor() {
    this.defaultPricing = { price: "$399.00", discounted: "$688.00" };

    // Add-on pricing percentages
    this.addOnPricing = {
      doubleLeverage: 15,
      tradeOnWeekends: 10,
      higherProfitShare: 25,
      EAsAllowed: 5,
      newsTrading: 15,
      maxLoss: 20,
      noMinDays: 10,
    };
  }

  // Helper method to format price with 2 decimal places
  _formatPrice(amount) {
    return `$${parseFloat(amount).toFixed(2)}`;
  }

  // Helper method to format price with commas and 2 decimal places
  _formatPriceWithCommas(amount) {
    return `$${parseFloat(amount).toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })}`;
  }

  // Get all pricing data based on region
  getPricingData(isLATAM = false) {
    const priceDataOnePhase = {
      "5K": { price: "$59.00", discounted: "$88.00" },
      "10K": { price: "$99.00", discounted: "$148.00" },
      "25K": { price: "$189.00", discounted: "$283.00" },
      "50K": { price: "$289.00", discounted: "$433.00" },
      "100K": { price: "$479.00", discounted: "$778.00" },
      "200K": { price: "$949.00", discounted: "$1,478.00" },
    };

    const priceDataTwoPhaseFlex = {
      "5K": { price: "$49.00", discounted: "$78.00" },
      "10K": { price: "$79.00", discounted: "$126.00" },
      "25K": { price: "$149.00", discounted: "$238.00" },
      "50K": { price: "$249.00", discounted: "$398.00" },
      "100K": { price: "$399.00", discounted: "$688.00" },
      "200K": { price: "$749.00", discounted: "$1,198.00" },
      "300K": { price: "$1,199.00", discounted: "$1,918.00" },
    };

    const priceDataTwoPhasePro = {
      "5K": { price: "$65.00", discounted: "$130.00" },
      "10K": { price: "$129.00", discounted: "$258.00" },
      "25K": { price: "$229.00", discounted: "$458.00" },
      "50K": { price: "$335.00", discounted: "$670.00" },
      "100K": { price: "$549.00", discounted: "$1,098.00" },
      "200K": { price: "$1,099.00", discounted: "$2,198.00" },
      "300K": { price: "$1,649.00", discounted: "$3,298.00" },
    };

    if (isLATAM) {
      this._addLATAMPricing(
        priceDataOnePhase,
        priceDataTwoPhaseFlex,
        priceDataTwoPhasePro
      );
    }

    return { priceDataOnePhase, priceDataTwoPhaseFlex, priceDataTwoPhasePro };
  }

  // Calculate dynamic pricing with add-ons
  calculatePriceWithAddOns(basePrice, addOns = {}) {

    // Convert price string to number (remove $ and commas)
    const numericPrice = parseFloat(basePrice.replace(/[$,]/g, ""));
    
    if (isNaN(numericPrice)) {
      console.error("💰 Invalid base price:", basePrice);
      return basePrice; 
    }
    
    let totalPercentage = 0;

    // Calculate total percentage increase from enabled add-ons
    Object.entries(addOns).forEach(([addOnKey, isEnabled]) => {
      if (isEnabled && this.addOnPricing[addOnKey]) {
        totalPercentage += this.addOnPricing[addOnKey];
      }
    });


    // Calculate final price
    const finalPrice = numericPrice * (1 + totalPercentage / 100);
    const formattedPrice = this._formatPriceWithCommas(finalPrice);


    return formattedPrice;
  }

  // Get current price data based on challenge configuration
  getCurrentPriceData(
    challengeType,
    selectedChallenge,
    accountAmount,
    isLATAM = false,
    addOns = {}
  ) {

    const { priceDataOnePhase, priceDataTwoPhaseFlex, priceDataTwoPhasePro } =
      this.getPricingData(isLATAM);

    let basePriceData;

    // Get the correct pricing data based on challenge type
    if (challengeType === "OnePhaseChallenge") {
      basePriceData =
        priceDataOnePhase[accountAmount] || priceDataOnePhase["100K"];
    } else if (challengeType === "TwoPhaseChallenge") {
      if (selectedChallenge === "Flex") {
        basePriceData =
          priceDataTwoPhaseFlex[accountAmount] || priceDataTwoPhaseFlex["100K"];
      } else if (selectedChallenge === "Pro") {
        basePriceData =
          priceDataTwoPhasePro[accountAmount] || priceDataTwoPhasePro["100K"];
      }
    }

    // Fallback to default if no base data found
    if (!basePriceData) {
      console.warn("💰 No pricing data found, using default:", this.defaultPricing);
      basePriceData = this.defaultPricing;
    }

    // Get base prices (without addons)
    const basePrice = basePriceData.price;
    const baseDiscounted = basePriceData.discounted;

    // Calculate total prices with add-ons
    const hasEnabledAddOns = Object.values(addOns).some((enabled) => enabled);
    let totalPrice = basePrice;
    let totalDiscounted = baseDiscounted;

    if (hasEnabledAddOns) {
      totalPrice = this.calculatePriceWithAddOns(basePrice, addOns);
      totalDiscounted = this.calculatePriceWithAddOns(baseDiscounted, addOns);
    }

    const result = {
      basePrice: basePrice,
      baseDiscounted: baseDiscounted,
      price: totalPrice,
      discounted: totalDiscounted,
    };

    return result;
  }

  // Add LATAM-specific pricing for 2.5K tier
  _addLATAMPricing(onePhase, flex, pro) {
    onePhase["2.5K"] = { price: "$35.00", discounted: "$58.00" };
    flex["2.5K"] = { price: "$30.00", discounted: "$46.00" };
    pro["2.5K"] = { price: "$40.00", discounted: "$78.00" };
  }

  // Helper method to get addon pricing information
  getAddonPricingInfo() {
    return { ...this.addOnPricing };
  }

  // Helper method to calculate just the addon cost for a given base price
  calculateAddonCost(basePrice, addOns = {}) {
    const basePriceValue = parseFloat(basePrice.replace(/[$,]/g, ""));
    const totalPriceValue = parseFloat(
      this.calculatePriceWithAddOns(basePrice, addOns).replace(/[$,]/g, "")
    );
    
    const addonCost = totalPriceValue - basePriceValue;
    return this._formatPriceWithCommas(addonCost);
  }

  // Validate pricing data integrity
  validatePricingData() {
    const { priceDataOnePhase, priceDataTwoPhaseFlex, priceDataTwoPhasePro } =
      this.getPricingData();

    const allPriceData = {
      onePhase: priceDataOnePhase,
      flex: priceDataTwoPhaseFlex,
      pro: priceDataTwoPhasePro,
    };

    let isValid = true;
    
    Object.entries(allPriceData).forEach(([type, data]) => {
      Object.entries(data).forEach(([amount, pricing]) => {
        if (!pricing.price || !pricing.discounted) {
          console.error(`💰 Invalid pricing data for ${type} ${amount}:`, pricing);
          isValid = false;
        }
      });
    });

    return isValid;
  }
}

export default new PricingService();
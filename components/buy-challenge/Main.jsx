'use client'

import React, { useState, useEffect } from 'react';
import { processUrlAndFindProduct } from './utils/product/productMatcher.js';
import { saveProductInfo, getProductInfo, hasStoredProductInfo, isStoredBrokerAllowed } from './utils/localStorage.js';
import {
  decodeUrl,
  hasValidUrlParams,
  getProductDisplayInfo,
  createResultFromStoredData,
  createProductDataForStorage,
  getComponentState,
  getBrokerDisplayName
} from './utils/product/productHelpers.js';
import { LOG_MESSAGES } from './data/constants.js';
import ProductInfoCard, { LoadingCard, ErrorCard, NoUrlCard, BrokerErrorCard } from './components/product/ProductInfoCard.jsx';
import BillingForm from './components/form/BillingForm.jsx';
import OrderProcessor from './components/order/OrderProcessor.jsx';
import OrderError from './components/order/OrderError.jsx';
import { bgImageStyle } from '@/constants/styles.js';

// Main orchestrator component for buy-challenge page
function Main({ urlParam }) {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [brokerError, setBrokerError] = useState(null);
  const [promoCode, setPromoCode] = useState(null);
  const [storedProductInfo, setStoredProductInfo] = useState(null);
  const [loadingStoredData, setLoadingStoredData] = useState(true);
  const [decodedUrl, setDecodedUrl] = useState(urlParam ? decodeUrl(urlParam) : '');

  // Step management - now includes order processing steps
  const [currentStep, setCurrentStep] = useState('product'); // 'product', 'processing', 'error'
  const [billingData, setBillingData] = useState(null);
  const [orderError, setOrderError] = useState(null);

  // Product display info state - will be updated when dependencies change
  const [productDisplayInfo, setProductDisplayInfo] = useState(null);

  // Billing form state managed in Main
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    confirmEmail: '',
    phoneNumber: '',
    countryCode: '+1',
    streetAddress: '',
    streetAddress2: '',
    city: '',
    stateProvince: '',
    postalCode: '',
    country: ''
  });

  // Load stored product info on component mount and validate broker
  useEffect(() => {
    const stored = getProductInfo();
    if (stored) {
      // Check if stored broker is allowed in current environment
      if (isStoredBrokerAllowed()) {
        setStoredProductInfo(stored);
      } else {
        // Clear invalid stored data
        import('./utils/localStorage.js').then(({ clearProductInfo }) => {
          clearProductInfo();
        });
        setBrokerError({
          error: `Previously selected broker ${getBrokerDisplayName(stored.broker)} is not available in the current configuration`,
          storedBroker: stored.broker
        });
      }
    }
    setLoadingStoredData(false);
  }, []);

  // Update productDisplayInfo whenever result, storedProductInfo, or promoCode changes
  useEffect(() => {
    const newProductDisplayInfo = getProductDisplayInfo(result, storedProductInfo, promoCode);
    setProductDisplayInfo(newProductDisplayInfo);

  }, [result, storedProductInfo, promoCode]);

  // Process URL parameter when urlParam changes
  useEffect(() => {
    if (urlParam) {
      const decoded = decodeUrl(urlParam);
      setDecodedUrl(decoded);

      const stored = getProductInfo();

      if (!stored || stored.incomingUrl !== decoded) {
        handleProcessUrl(decoded);
      } else {
        setResult(createResultFromStoredData(stored));
      }
    }
  }, [urlParam]);

  // Process the URL and get matching product
  const handleProcessUrl = async (url = decodedUrl) => {
    setLoading(true);
    setError(null);
    setBrokerError(null);

    try {
      const processResult = await processUrlAndFindProduct(url);

      if (processResult.urlParams?.promo) {
        setPromoCode(processResult.urlParams.promo);
      } 

      if (processResult.brokerError) {
        setBrokerError({
          error: processResult.error,
          requestedBroker: processResult.requestedBroker,
          allowedBrokers: processResult.allowedBrokers
        });
      } else if (processResult.error) {
        setError(processResult.error);
      } else if (processResult.success) {
        const productData = createProductDataForStorage(processResult, url);
        setResult(processResult);
        setStoredProductInfo(productData);
        saveProductInfo(productData);
      }
    } catch (err) {
      setError('Failed to process URL: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  // Handle billing form submission - move to processing step
  const handleBillingNext = (submittedFormData) => {

    setBillingData(submittedFormData);
    setCurrentStep('processing');
    setOrderError(null); // Clear any previous errors
  };

  // Handle order creation error
  const handleOrderError = (error) => {
    console.error('❌ Order creation failed:', error);
    setOrderError(error);
    setCurrentStep('error');
  };

  // Handle retry from error state
  const handleRetryOrder = () => {
    setOrderError(null);
    setCurrentStep('processing');
  };

  // Handle go back from error state
  const handleGoBackFromError = () => {
    setOrderError(null);
    setCurrentStep('product');
  };

  // Determine current state for conditional rendering
  const urlHasValidParams = hasValidUrlParams(urlParam);
  const hasStoredData = !!storedProductInfo || hasStoredProductInfo();
  const isProcessing = loading || loadingStoredData;
  const componentState = getComponentState(
    productDisplayInfo,
    isProcessing,
    !!error,
    urlHasValidParams,
    hasStoredData,
    loadingStoredData,
    !!brokerError
  );

  // Render based on current step and component state
  const renderContent = () => {
    // Product selection and billing step
    if (currentStep === 'product') {
      switch (componentState) {
        case 'loading':
          return <LoadingCard />;
        case 'brokerError':
          return <BrokerErrorCard brokerError={brokerError} />;
        case 'showProduct':
          return (
            <div className="space-y-8">
              <BillingForm
                productDisplayInfo={productDisplayInfo}
                formData={formData}
                setFormData={setFormData}
                onNext={handleBillingNext}
              />
              <ProductInfoCard
                productDisplayInfo={productDisplayInfo}
                promoCode={promoCode}
                setPromoCode={setPromoCode}
              />
            </div>
          );
        case 'showError':
          return <ErrorCard error={error} decodedUrl={decodedUrl} />;
        case 'showNoUrl':
          return <NoUrlCard />;
        default:
          return null;
      }
    }

    // Order processing step
    if (currentStep === 'processing') {

      return (
        <OrderProcessor
          productDisplayInfo={productDisplayInfo}
          billingData={billingData}
          promoCode={promoCode}
          onError={handleOrderError}
        />
      );
    }

    // Order error step
    if (currentStep === 'error') {
      return (
        <OrderError
          error={orderError}
          onRetry={handleRetryOrder}
          onGoBack={handleGoBackFromError}
        />
      );
    }

    return null;
  };

  return (
    <div className="px-6 py-24 md:py-44 mx-auto"
      style={bgImageStyle}
    >
      {renderContent()}
    </div>
  );
}

export default Main;
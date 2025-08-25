import { useMemo } from 'react';
import { getMainLanguage } from '@/utils/global.js';

// Custom hook for managing localization and text content
export const useLocalization = (locale, translations, isLATAM, accountAmount) => {
  const mainLang = getMainLanguage(locale);

  // Get appropriate badge text based on region and language
  const getBadgeText = useMemo(() => {
    if (isLATAM && mainLang === 'es') {
      return "Más Elegido";
    }
    return translations.limited_time || "Limited Time";
  }, [isLATAM, mainLang, translations.limited_time]);

  // Get CTA button text based on region and language
  const getCTAText = useMemo(() => {
    if (isLATAM && mainLang === 'es') {
      return `Comienza tu Challenge de ${accountAmount} hoy!`;
    }
    return `${translations.get || 'Get'} ${accountAmount} ${translations.challenge || 'Challenge'}`;
  }, [isLATAM, mainLang, accountAmount, translations.get, translations.challenge]);

  // Get analytics tracking event name
  const getTrackingEventName = useMemo(() => {
    return isLATAM ? 'LATAM - Table Section - Main CTA' : 'Table Section - Main CTA';
  }, [isLATAM]);

  // Get pricing section text
  const getPricingText = useMemo(() => {
    return isLATAM && mainLang === 'es' ? 'Empieza desde' : 'Starting From';
  }, [isLATAM, mainLang]);

  // Get account type title
  const getAccountTypeTitle = useMemo(() => {
    return isLATAM && mainLang === 'es' ? 'Selecciona tu Tipo de Cuenta' : translations.accountType;
  }, [isLATAM, mainLang, translations.accountType]);

  // Get description text
  const getDescriptionText = useMemo(() => {
    return isLATAM && mainLang === 'es'
      ? 'Una vez hayas seleccionado el challenge adecuado, puedes personalizarlo para que se adapte a ti con nuestros add-ons exclusivos.'
      : translations.description;
  }, [isLATAM, mainLang, translations.description]);

  // Get challenge type button texts
  const getChallengeTypeTexts = useMemo(() => ({
    onePhase:  '1 Phase',
    twoPhase: isLATAM && mainLang === 'es' ? 'Two Phase Challenge' : translations.table_two_phase
  }), [isLATAM, mainLang, translations.table_one_phase, translations.table_two_phase]);

  return {
    mainLang,
    getBadgeText,
    getCTAText,
    getTrackingEventName,
    getPricingText,
    getAccountTypeTitle,
    getDescriptionText,
    getChallengeTypeTexts
  };
};
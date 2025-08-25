import { useState, useEffect } from 'react';
import { DEFAULT_ACCOUNT_AMOUNT, CHALLENGE_TYPES, TWO_PHASE_VARIANTS } from '@/constants/tableSection/tableSection.js'
import challengeLinksService from '@/services/tableSection/challengeLinksService.js';

// Get default broker based on environment variable
const getDefaultBroker = () => {
  const brokerConfig = process.env.NEXT_PUBLIC_BROKER_CONFIG || 'all';
  
  switch (brokerConfig) {
    case 'ctrader':
      return 'ctrader';
    case 'matchtrader':
      return 'matchtrader';
    case 'all':
    default:
      return 'matchtrader';
  }
};

// Custom hook for managing table state and challenge links
export const useTableState = (initial, isLATAM) => {
  const [accountAmount, setAccountAmount] = useState(DEFAULT_ACCOUNT_AMOUNT);
  const [challengeType, setChallengeType] = useState(initial);
  const [selectedChallenge, setSelectedChallenge] = useState(TWO_PHASE_VARIANTS.FLEX);
  const [selectedTable, setSelectedTable] = useState({});
  const [selectedBroker, setSelectedBroker] = useState(getDefaultBroker());

  // Update selected table links when challenge configuration changes
  useEffect(() => {
    let newTable = {};

    if (challengeType === CHALLENGE_TYPES.ONE_PHASE) {
      newTable = challengeLinksService.getChallengeLinksOne(isLATAM);
      setAccountAmount(DEFAULT_ACCOUNT_AMOUNT);
    } else if (challengeType === CHALLENGE_TYPES.TWO_PHASE) {
      if (selectedChallenge === TWO_PHASE_VARIANTS.PRO) {
        newTable = challengeLinksService.getChallengeLinksPro(isLATAM);
      } else {
        newTable = challengeLinksService.getChallengeLinksFlex(isLATAM);
      }
      setAccountAmount(DEFAULT_ACCOUNT_AMOUNT);
    }

    setSelectedTable(newTable);
  }, [challengeType, selectedChallenge, isLATAM]);

  return {
    accountAmount,
    setAccountAmount,
    challengeType,
    setChallengeType,
    selectedChallenge,
    setSelectedChallenge,
    selectedTable,
    selectedBroker,
    setSelectedBroker
  };
};
// Product UUID mappings by challenge type and size
export const PRODUCT_MAPPINGS = {
  "One Phase Challenge": {
    "2.5K": 'ef0d9ac9-f5cd-481e-bf56-b6f07776f634',
    "5K": '7ce47a4e-860a-4ea2-94a5-922682b97dfe',
    "10K": 'f03c2872-1f00-465e-adf6-96d8f232570e',
    "25K": 'c530c6a6-4fdf-4f48-805f-7bdf6f797b9c',
    "50K": 'b26faa79-8b72-41fd-b995-ab68b9a97c45',
    "100K": '7fc1a973-4d65-4c72-8ea5-33424e3b29d2',
    "200K": 'a4ef64e7-ebd8-4b33-b538-c03c9ebfad61'
  },
  "Two Phase Flex Challenge": {
    "2.5K": 'd9459695-66f7-41ea-a123-ed206d0f4a78',
    "5K": 'c935c0c9-ee3a-40f2-b784-522b1348f117',
    "10K": 'abba0248-b97b-4e75-b1ac-0fb722c3ab46',
    "25K": '75b26996-865d-4ac5-931f-4021216c37bf',
    "50K": 'f387eb40-1a21-46ca-a91b-fcb4ad4b1848',
    "100K": '9f760fbf-d1d6-4236-8cf9-d338961bdf90',
    "200K": 'e02839d7-b72e-4968-9419-31e21bce1235',
    "300K": '5872a1c3-b1ae-457b-b06d-a75d4dbc5b77'
  },
  "Two Phase Pro Challenge": {
    "2.5K": '59dd1205-9997-4162-b5e8-455bbffea8f5',
    "5K": 'a1e87aed-ea17-47e7-a8de-6aae34b1dc8b',
    "10K": '670ce1e2-70ec-4b6b-9e3f-b8258c187fb1',
    "25K": '522c8b05-078a-4e3c-9762-fd7c0ca0c01e',
    "50K": 'd5190cb2-4755-460f-be43-d8a713e4c823',
    "100K": 'cad77f17-0cb5-4e7d-8a71-644f4a3f6a17',
    "200K": '5e938ace-5e27-444f-a38e-ad3a6ea5be12',
    "300K": '9ef2c2db-cbeb-4338-9162-43b4c90761b2'
  }
};

// Reverse mapping to find challenge type and size by UUID
export const UUID_TO_PRODUCT = {};
Object.entries(PRODUCT_MAPPINGS).forEach(([challengeType, sizes]) => {
  Object.entries(sizes).forEach(([size, uuid]) => {
    UUID_TO_PRODUCT[uuid] = { challengeType, size };
  });
});

// Addon abbreviation to full name mapping
export const ADDON_MAPPINGS = {
  "10PS": "higherProfitShare",
  "WT": "tradeOnWeekends",
  "HMLPT": "maxLoss", // Changed from HMLP to HMLPT
  "NT": "newsTrading",
  "DL": "doubleLeverage",
  "NMTD": "noMinDays",
  "EA": "EAsAllowed"
};

// Reverse mapping for full name to abbreviation
export const ADDON_REVERSE_MAPPINGS = {};
Object.entries(ADDON_MAPPINGS).forEach(([abbrev, fullName]) => {
  ADDON_REVERSE_MAPPINGS[fullName] = abbrev;
});
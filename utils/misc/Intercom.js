'use client'

import Script from 'next/script';

const INTERCOM_APP_ID = 'xggao8ut';

const Intercom = ({ locale }) => {
  const handleIntercomLoad = () => {
    window.intercomSettings = {
      api_base: "https://api-iam.intercom.io",
      app_id: INTERCOM_APP_ID,
      language_override: locale,
    };

    window.Intercom?.('reattach_activator');
    window.Intercom?.('update', window.intercomSettings);
  };

  return (
    <Script
      id="intercom-script"
      strategy="lazyOnload"
      src={`https://widget.intercom.io/widget/${INTERCOM_APP_ID}`}
      onLoad={handleIntercomLoad}
    />
  );
};

export default Intercom;
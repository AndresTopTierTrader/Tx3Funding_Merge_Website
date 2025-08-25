// Challenge links service for generating purchase URLs
import getCurrentUTMMonth from "@/utils/misc/getCurrentUTM.js";
import {ENVIRONMENT_URL} from "@/constants/global.js";

const CURRENT_MONTH = getCurrentUTMMonth();

class ChallengeLinksService {
    constructor() {
      this.baseUrl = `${ENVIRONMENT_URL}/buy-challenge/`;
      this.commonParams = {
        hcategory: CURRENT_MONTH,
        htrafficsource: 'Website'
      };
      this.commonAddons = [
        'doubleLeverage',
        'higherProfitShare',
        'newstrading'
      ];
    }
  
    // Generate challenge links for Pro variant
    getChallengeLinksPro(isLATAM = false) {
      const regionSuffix = isLATAM ? 'LATAM' : '';
      const baseLinks = {
        "5K": this._buildUrl(`MainTableCta${regionSuffix}TwoPhasePro${CURRENT_MONTH}`, 'a1e87aed-ea17-47e7-a8de-6aae34b1dc8b', true),
        "10K": this._buildUrl(`MainTableCta${regionSuffix}TwoPhasePro${CURRENT_MONTH}`, '670ce1e2-70ec-4b6b-9e3f-b8258c187fb1', true),
        "25K": this._buildUrl(`MainTableCta${regionSuffix}TwoPhasePro${CURRENT_MONTH}`, '522c8b05-078a-4e3c-9762-fd7c0ca0c01e', true),
        "50K": this._buildUrl(`MainTableCta${regionSuffix}TwoPhasePro${CURRENT_MONTH}`, 'd5190cb2-4755-460f-be43-d8a713e4c823', true),
        "100K": this._buildUrl(`MainTableCta${regionSuffix}TwoPhasePro${CURRENT_MONTH}`, 'cad77f17-0cb5-4e7d-8a71-644f4a3f6a17', true),
        "200K": this._buildUrl(`MainTableCta${regionSuffix}TwoPhasePro${CURRENT_MONTH}`, '5e938ace-5e27-444f-a38e-ad3a6ea5be12', true),
        "300K": this._buildUrl(`MainTableCta${regionSuffix}TwoPhasePro${CURRENT_MONTH}`, '9ef2c2db-cbeb-4338-9162-43b4c90761b2', true)
      };
  
      if (isLATAM) {
        baseLinks["2.5K"] = this._buildUrl(`MainTableLATAMCtaTwoPhasePro${CURRENT_MONTH}`, '59dd1205-9997-4162-b5e8-455bbffea8f5', true);
      }
  
      return baseLinks;
    }
  
    // Generate challenge links for Flex variant
    getChallengeLinksFlex(isLATAM = false) {
      const regionSuffix = isLATAM ? 'LATAM' : '';
      const baseLinks = {
        "5K": this._buildUrl(`MainTableCta${regionSuffix}TwoPhaseFlex${CURRENT_MONTH}`, 'c935c0c9-ee3a-40f2-b784-522b1348f117', true),
        "10K": this._buildUrl(`MainTableCta${regionSuffix}TwoPhaseFlex${CURRENT_MONTH}`, 'abba0248-b97b-4e75-b1ac-0fb722c3ab46', true),
        "25K": this._buildUrl(`MainTableCta${regionSuffix}TwoPhaseFlex${CURRENT_MONTH}`, '75b26996-865d-4ac5-931f-4021216c37bf', true),
        "50K": this._buildUrl(`MainTableCta${regionSuffix}TwoPhaseFlex${CURRENT_MONTH}`, 'f387eb40-1a21-46ca-a91b-fcb4ad4b1848', true),
        "100K": this._buildUrl(`MainTableCta${regionSuffix}TwoPhaseFlex${CURRENT_MONTH}`, '9f760fbf-d1d6-4236-8cf9-d338961bdf90', true),
        "200K": this._buildUrl(`MainTableCta${regionSuffix}TwoPhaseFlex${CURRENT_MONTH}`, 'e02839d7-b72e-4968-9419-31e21bce1235', true),
        "300K": this._buildUrl(`MainTableCta${regionSuffix}TwoPhaseFlex${CURRENT_MONTH}`, '5872a1c3-b1ae-457b-b06d-a75d4dbc5b77', true)
      };
  
      if (isLATAM) {
        baseLinks["2.5K"] = this._buildUrl(`MainTableCtaLATAMTwoPhaseFlex${CURRENT_MONTH}`, 'd9459695-66f7-41ea-a123-ed206d0f4a78', true);
      }
  
      return baseLinks;
    }
  
    // Generate challenge links for One Phase variant
    getChallengeLinksOne(isLATAM = false) {
      const regionSuffix = isLATAM ? 'LATAM' : '';
      const baseLinks = {
        "5K": this._buildUrl(`MainTableCta${regionSuffix}OnePhase${CURRENT_MONTH}`, '7ce47a4e-860a-4ea2-94a5-922682b97dfe', true),
        "10K": this._buildUrl(`MainTableCta${regionSuffix}OnePhase${CURRENT_MONTH}`, 'f03c2872-1f00-465e-adf6-96d8f232570e', true),
        "25K": this._buildUrl(`MainTableCta${regionSuffix}OnePhase${CURRENT_MONTH}`, 'c530c6a6-4fdf-4f48-805f-7bdf6f797b9c', true),
        "50K": this._buildUrl(`MainTableCta${regionSuffix}OnePhase${CURRENT_MONTH}`, 'b26faa79-8b72-41fd-b995-ab68b9a97c45', true),
        "100K": this._buildUrl(`MainTableCta${regionSuffix}OnePhase${CURRENT_MONTH}`, '7fc1a973-4d65-4c72-8ea5-33424e3b29d2', true),
        "200K": this._buildUrl(`MainTableCta${regionSuffix}OnePhase${CURRENT_MONTH}`, 'a4ef64e7-ebd8-4b33-b538-c03c9ebfad61', true)
      };
  
      if (isLATAM) {
        baseLinks["2.5K"] = this._buildUrl(`MainTableCtaLATAMOnePhase${CURRENT_MONTH}`, 'ef0d9ac9-f5cd-481e-bf56-b6f07776f634', true);
      }
  
      return baseLinks;
    }
  
    // Build URL with parameters and broker selection
    _buildUrl(el, id, includeAddons = false, broker = null) {
      const params = new URLSearchParams({
        el,
        id,
        ...this.commonParams
      });

      if (broker) {
        params.append('broker', broker);
      }
  
      if (includeAddons) {
        this.commonAddons.forEach(addon => params.append('addons', addon));
      }
  
      return `${this.baseUrl}?${params.toString()}`;
    }
  }
  
  export default new ChallengeLinksService();
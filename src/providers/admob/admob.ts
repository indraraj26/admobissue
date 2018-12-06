import { Injectable } from '@angular/core';
import { AdMobFree, AdMobFreeInterstitialConfig } from '@ionic-native/admob-free';



@Injectable()
export class AdmobProvider { 

  constructor(public adMobFree: AdMobFree) {    
  }

  async showInterstitialAd() {
    try {
      const interstitialConfig: AdMobFreeInterstitialConfig = {
        id: 'ca-app-pub-3940256099942544/1033173712',
        isTesting: false,
        autoShow: true
      };      
      this.adMobFree.interstitial.config(interstitialConfig);
      await this.adMobFree.interstitial.prepare();      
      return this.adMobFree.on(this.adMobFree.events.INTERSTITIAL_CLOSE);
    } catch (e) { }

    return this.adMobFree.on(this.adMobFree.events.INTERSTITIAL_LOAD_FAIL);
  }


}

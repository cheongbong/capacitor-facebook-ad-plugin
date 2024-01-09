import { WebPlugin } from '@capacitor/core';
export class CapacitorFacebookAdWeb extends WebPlugin {
    // async echo(options: { value: string }): Promise<{ value: string }> {
    //   console.log('ECHO', options);
    //   return options;
    // }
    constructor() {
        super({
            name: 'CapacitorFacebookAd',
            platforms: ['web'],
        });
    }
    async initialize() {
        console.log('initialize');
    }
    async showBanner(options) {
        console.log('showBanner', options);
    }
    // Hide the banner, remove it from screen, but can show it later
    async hideBanner() {
        console.log('hideBanner');
    }
    // Resume the banner, show it after hide
    async resumeBanner() {
        console.log('resumeBanner');
    }
    // Destroy the banner, remove it from screen.
    async removeBanner() {
        console.log('removeBanner');
    }
    async prepareInterstitial(options) {
        console.log('prepareInterstitial', options);
        return {
            adPlacementId: options.adId,
        };
    }
    async showInterstitial() {
        console.log('showInterstitial');
    }
    async prepareRewardVideoAd(options) {
        console.log(options);
        return {
            adPlacementId: options.adId,
        };
    }
    async showRewardVideoAd() {
        return {
            type: '',
            amount: 0,
        };
    }
}
//# sourceMappingURL=web.js.map
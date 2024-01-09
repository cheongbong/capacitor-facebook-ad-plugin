import { registerPlugin } from '@capacitor/core';
const CapacitorFacebookAd = registerPlugin('CapacitorFacebookAd', {
    web: () => import('./web').then(m => new m.CapacitorFacebookAdWeb()),
});
export * from './definitions';
export * from './banner/index';
export * from './interstitial/index';
export * from './reward/index';
export * from './shared/index';
export { CapacitorFacebookAd };
//# sourceMappingURL=index.js.map
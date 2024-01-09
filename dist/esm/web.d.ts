import { WebPlugin } from '@capacitor/core';
import type { CapacitorFacebookAdPlugin } from './definitions';
import { AdRewardItem } from './reward';
import { AdLoadInfo, AdOptions } from './shared';
export declare class CapacitorFacebookAdWeb extends WebPlugin implements CapacitorFacebookAdPlugin {
    constructor();
    initialize(): Promise<void>;
    showBanner(options: AdOptions): Promise<void>;
    hideBanner(): Promise<void>;
    resumeBanner(): Promise<void>;
    removeBanner(): Promise<void>;
    prepareInterstitial(options: AdOptions): Promise<AdLoadInfo>;
    showInterstitial(): Promise<void>;
    prepareRewardVideoAd(options: AdOptions): Promise<AdLoadInfo>;
    showRewardVideoAd(): Promise<AdRewardItem>;
}

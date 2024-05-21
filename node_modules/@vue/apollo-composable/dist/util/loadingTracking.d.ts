import { Ref } from 'vue-demi';
export interface LoadingTracking {
    queries: Ref<number>;
    mutations: Ref<number>;
    subscriptions: Ref<number>;
}
export interface AppLoadingTracking extends LoadingTracking {
    components: Map<any, LoadingTracking>;
}
export declare const globalTracking: AppLoadingTracking;
export declare function getCurrentTracking(): {
    tracking?: undefined;
} | {
    tracking: LoadingTracking;
};
export declare function trackQuery(loading: Ref<boolean>): void;
export declare function trackMutation(loading: Ref<boolean>): void;
export declare function trackSubscription(loading: Ref<boolean>): void;

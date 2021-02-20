import Vue from '../../../vue';
declare const _default: import("../../../vue/types/vue").ExtendedVue<Vue, {
    platforms: string[];
    platformSet: Set<string>;
    status: number;
    refresh: boolean;
}, {
    refreshPanel(): void;
    clacAllPlatforms(): void;
    handleConfirm(): void;
    handlePlatformClick(e: any): void;
    handleClose(): void;
}, unknown, {
    services: unknown[];
    filter: any;
}>;
export default _default;

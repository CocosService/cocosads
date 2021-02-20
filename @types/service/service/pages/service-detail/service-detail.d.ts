import Vue from '../../../vue';
import { Service, ServicePlugin, ServicePluginInfo } from '../../../ifs';
declare const _default: import("../../../vue/types/vue").ExtendedVue<Vue, {
    enable: boolean;
    srv: Service;
    serviceInfo: ServicePluginInfo | undefined;
    servicePlugin: ServicePlugin | undefined;
    service_price: any;
    serviceVersion: string;
    hasUpdate: boolean;
    shows: {
        all: boolean;
        name: boolean;
        version: boolean;
        description: boolean;
        jump: boolean;
        price: boolean;
        platform: boolean;
    };
}, {
    pluginReady(): Promise<void>;
    pluginClose(): Promise<void>;
    backHome(): void;
    getRealPath: (filename: string) => string;
    configDevUrl(): void;
    calcShows(): void;
    versionClick(): void;
    updateClick(): void;
    switchVersion(targetVersion: string): void;
    checkServiceOnGame(): Promise<boolean>;
    checkAllowOpenService(): Promise<boolean>;
    installPlugin(cb: (success: boolean) => void): Promise<void>;
    enableService(enable: boolean): Promise<void>;
    doOpenService(): Promise<any>;
    openServiceRequestServer(): Promise<any>;
    handleEnabelService(e: Event): Promise<void>;
    handleGotoLink(type: "guide" | "dev" | "sample"): Promise<void>;
    gotoService(): Promise<void>;
}, unknown, {
    game: any;
    service: any;
}>;
export default _default;

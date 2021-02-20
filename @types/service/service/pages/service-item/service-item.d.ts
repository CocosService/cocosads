import Vue from '../../../vue';
import { ServicePlugin, ServicePluginInfo } from '../../../ifs';
declare const _default: import("../../../vue/types/vue").ExtendedVue<Vue, {
    serviceInfo: ServicePluginInfo | undefined;
    servicePlugin: ServicePlugin | undefined;
    hasCustomItem: boolean;
    content: any;
    nameTitle: any;
    hasGroup: boolean;
    hasUpdate: boolean;
    headerStyle: {
        display: string;
        'justify-content': string;
        padding: string;
    };
    contentStyle: {
        padding: string;
        'font-size': string;
        'line-height': string;
        color: string;
    };
    imgStyle: {
        height: string;
        width: string;
        "margin-top": string;
        "-webkit-filter": string;
    };
    titleStyle: {
        color: string;
        width: string;
        "font-size": string;
        "margin-left": string;
        "margin-top": string;
        "text-overflow": string;
        overflow: string;
        "white-space": string;
    };
}, {
    getRealPath(filename: string): string;
    handleItemClick(): void;
    clactureVersion(): void;
    setItemHover(isHover: boolean): void;
}, unknown, {
    service: any;
}>;
export default _default;

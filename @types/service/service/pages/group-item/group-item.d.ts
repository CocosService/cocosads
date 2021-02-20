import Vue from '../../../vue';
import { Service } from '../../../ifs';
declare const _default: import("../../../vue/types/vue").ExtendedVue<Vue, {
    title: any;
    unfolded: boolean;
    icon: any;
    hasUpdate: boolean;
    hideTips: string;
    imageStyle: {
        height: string;
        width: string;
        "margin-top": string;
        "-webkit-filter": string;
    };
}, {
    handleItemClick(service: Service): void;
    handleFoldClick(): void;
}, unknown, {
    group: any;
}>;
export default _default;

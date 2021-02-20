import Vue from '../../../vue';
import { ConfigSetAction } from '../../../ifs';
declare const _default: import("../../../vue/types/vue").ExtendedVue<Vue, {
    show: boolean;
    enableConfirm: boolean;
    title: string;
    configName: string;
    configRemarks: string;
    act: ConfigSetAction;
}, {
    getCopedConfigName(name: string): string;
    handleClose(): void;
    handleConfirm(): void;
}, unknown, {
    action: string;
    config: any;
    configs: unknown[];
}>;
export default _default;

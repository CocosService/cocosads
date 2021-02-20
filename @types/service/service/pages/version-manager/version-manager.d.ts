import Vue from '../../../vue';
import { Service } from '../../../ifs';
declare const _default: import("../../../vue/types/vue").ExtendedVue<Vue, {
    srv: Service;
    srvInfo: import("../../../ifs").ServicePluginInfo | undefined;
    versionStr: string;
    upgradeStr: string;
    localVersion: string;
    remoteVersion: string;
    enableUpdate: boolean;
    enableSwitch: boolean;
    selected: string;
}, {
    handleClose(): void;
    handleSelectChange(e: any): void;
    handleSwitch(): void;
    handleUpdate(): void;
}, unknown, {
    service: any;
    action: string;
}>;
export default _default;

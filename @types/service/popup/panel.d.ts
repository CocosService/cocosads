import { ParamType } from '../ifs';
export declare const template: string;
export declare const style: string;
export declare const $: {
    container: string;
};
export declare function ready(pluginName: string, args: ParamType): Promise<void>;
export declare const listeners: {};
export declare const methods: {
    pluginMsg(msg: string, param?: ParamType): Promise<any>;
};
export declare function beforeClose(): Promise<any>;
export declare function close(): Promise<void>;

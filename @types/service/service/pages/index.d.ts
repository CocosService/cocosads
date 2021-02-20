import Vue from '../../vue';
import { ParamType } from '../../ifs';
export declare function createVue(panel: any): Promise<Vue>;
export declare function beforeClosePanel(): Promise<any | void>;
export declare function closePanel(): Promise<any | void>;
export declare const methods: {
    userChanged(): void;
    pluginMsg(msg: string, param?: ParamType): Promise<any>;
};
export declare const listeners: {};

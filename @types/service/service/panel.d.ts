export declare const template: string;
export declare const style: string;
export declare const $: {
    cocos_service: string;
    loader_wrapper: string;
    loading: string;
};
export declare const listeners: {};
export declare const methods: {
    userChanged(): void;
    pluginMsg(msg: string, param?: import("../ifs").ParamType): Promise<any>;
};
export declare function ready(args: any): Promise<void>;
export declare function beforeClose(): Promise<any>;
export declare function close(): Promise<void>;

import { ParamType } from "../ifs";
declare const _default: {
    is_refresh_token: boolean;
    session_token: string;
    /**
     * 对参数进行签名
     * @param param 待签名的参数
     */
    parseParamter: (param: ParamType) => ParamType;
    /**
     * 发起 Creator-API 中的请求
     * @param path  路径
     * @param param 参数
     */
    apiPost: (path: string, param?: ParamType) => Promise<any>;
    /**
     * 根据 Session ID 获取 Session Token
     */
    getSessionToken: () => Promise<void>;
    getRedirectUrl: (redirect_url: string) => Promise<string>;
};
export default _default;

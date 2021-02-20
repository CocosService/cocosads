import { DownloadCallback } from '../ifs';
declare const _default: {
    /**
     * 发送 POST 请求
     * @param url  请求路径
     * @param form 请求参数
     */
    post: (url: string, form: any) => Promise<any>;
    /**
     * 发送 GET 请求
     * @param url  请求路径
     * @param form 请求参数
     */
    get: (url: string, form: any) => Promise<any>;
    /**
     * 下载文件
     * @param url       文件地址
     * @param dist      保存地址
     * @param callback  下载回调
     */
    download: (url: string, dist: string, callback: DownloadCallback) => void;
    objectSortByKey: (object: Object) => Object;
    paramEncode: (param: any, key?: string, encode?: boolean) => string;
};
export default _default;

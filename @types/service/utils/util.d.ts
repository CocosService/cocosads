declare const _default: {
    /**
     * 打开指定资源路径
     * @param uri 资源路径
     */
    openUri: (uri: string) => void;
    /**
     * 校验字符串是否为空
     * @param str 字符串
     */
    validateString: (str: string) => boolean;
    /**
     * 版本比较
     * @param first  第一个版本
     * @param second 第二个版本
     */
    compareVersion: (first: string, second: string) => -1 | 0 | 1;
    /**
     * 清空缓存式 require
     * @param args 脚本文件路径
     */
    require: (...args: string[]) => any;
    /**
     * 删除指定文件夹所有脚本文件或指定脚本文件的 require cache
     * @param args 脚本文件路径
     */
    deleteCache: (...args: string[]) => any;
    /**
     * 获取指定字符串的md5值
     * @param str 字符串
     */
    getStrMD5: (str: string) => string;
    /**
     * 根据指定字符串声称一个指定长度id值
     * @param str 字符串
     * @param len 长度
     */
    generateID: (str: string, len?: number) => string;
};
export default _default;

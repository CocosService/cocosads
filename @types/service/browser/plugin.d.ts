declare const _default: {
    /**
     * 判断本地插件是否存在
     * @param pluginName
     */
    pluginExists: (pluginName: string) => boolean;
    registerI18n: (pluginName: string) => void;
    installPlugin: (pluginName: string, packageUrl: string, callback?: ((staus: string, success: boolean) => void) | undefined) => Promise<boolean>;
};
export default _default;

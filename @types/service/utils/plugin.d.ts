import { ParamType, ServicePluginInfo } from "../ifs";
declare const _default: {
    /**
     * 判断插件是否存在
     * @param pluginName 插件名称
     */
    pluginExists: (pluginName: string) => boolean;
    /**
     * 获取插件信息
     * @param pluginName 插件名称
     */
    getServicePluginInfo: (pluginName: string) => ServicePluginInfo | undefined;
    installPlugin: (pluginName: string, packageUrl: string, callback?: ((staus: string, success: boolean) => void) | undefined) => Promise<boolean>;
    /**
     * 打开弹出式插件
     * @param pluginName 插件名称
     * @param params     要传递的参数
     */
    openPopup: (pluginName: string, params: ParamType) => void;
    /**
     * 关闭弹出式插件
     * @param pluginName 插件名称
     * @param params     要传递的参数
     */
    closePopup: (pluginName: string) => void;
};
export default _default;

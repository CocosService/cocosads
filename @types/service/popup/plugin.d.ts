import { ServicePlugin, ServicePluginInfo } from '../ifs';
interface PluginContainer {
    plugin?: ServicePlugin;
    pluginInfo?: ServicePluginInfo;
}
declare const _default: {
    pluginContainer: PluginContainer;
    /**
     * 初始化弹窗类型的插件信息
     * @param pluginName 插件名称
     */
    _initServicePluginInfo: (pluginName: string) => void;
    getServicePluginInfo: (pluginName: string) => ServicePluginInfo | undefined;
    getServicePlugin: (pluginName: string) => ServicePlugin | undefined;
    createInnerHTML: (plugin: ServicePlugin, shadowRoot: ShadowRoot) => void;
    /**
     * 加载弹出式插件
     * @param pluginName 插件名称
     */
    loadPopup: (pluginName: string) => Promise<void>;
    /**
     * 卸载弹出式插件
     * @param pluginName 插件名称
     */
    unloadPopup: (pluginName: string) => Promise<void>;
};
export default _default;

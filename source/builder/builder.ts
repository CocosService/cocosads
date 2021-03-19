import { ParamType, ServiceConfigInfo } from "editor-build-helper/@types/service/ifs";

import "editor-build-helper/@types/service/utils";

import ebh from 'editor-build-helper'
import { copyFileSync, existsSync, mkdirsSync, unlinkSync } from "fs-extra";
import { dirname, join } from "path";

let analyticsFile = "cocosAnalytics.min.2.2.1.js";
let nAnalyticsFile = "jsb-cocosanalytics.js";
let initAnalytics = "cocosAnalytics-init.js";
let service_name = "service-cocosads";

let supportPlatform = [
    "android",
    "ios",
    "huawei-agc",
    "alipay-mini-game",
    "bytedance-mini-game",
    "oppo-mini-game",
    "huawei-quick-game",
    "cocos-play",
    "vivo-mini-game",
    "xiaomi-quick-game",
    "baidu-mini-game",
    "wechatgame",
    /*"link-sure",*/
    "qtt",
    "web-desktop",
    "web-mobile",
  ];
let nativePlatform = ["android", "ios", "mac", "huawei-agc", "windows"];

let getInitJSContent = function (params: ParamType) {
    return `(function () {
    if ((typeof cocosAnalytics) !== 'undefined'){
        var initArgs = {
            appID: '${params.appid || ''}',
            storeID: '${params.store || ''}',
            engine: 'cocos',
            callNumber: ''
        };
        if (!initArgs.appID || !initArgs.storeID) return console.error('请在编辑器设置好 Cocos Analytics 的 appID，如果在 Android 或者 iOS 下发布，请选择好对应的渠道。');
        cocosAnalytics.init(initArgs);
    }
})();`;
}

let processJavaScriptSupport = function (options: any, result: any, params: any) {
    // 由于 JS 每次都会清空原有构建文件，所有无需执行卸载操作
    if (!ebh.service.getEnableFormOptions(options, service_name)) return;
    // 根据平台类型引用指定的js文件
    ebh.service.copyJSToAssets(result.paths.settings, join(__dirname, './resource/js/', nativePlatform.includes(options.platform) ? nAnalyticsFile : analyticsFile));
    // 写入自动初始化代码
    ebh.service.writeJSToAssets(result.paths.settings, initAnalytics, getInitJSContent(params));
}

let instertIOSSrc = function (destRoot: string) {
    // 处理 service.cmake
    let srvCmakePath = join(destRoot, "proj/service.cmake")
    
    // 处理 cfg.cmake
    let cfgCmakePath = join(destRoot, "proj/cfg.cmake");
    // 向 service.cmake 插入 sdk 以及头文件的引用
    if (!ebh.file.checkFileContent(srvCmakePath, /USE_ANALYTICS/)) {
        ebh.file.replaceFileContent(srvCmakePath, /(#_SRC_)/g, `$1
if(USE_ANALYTICS)
    list(APPEND PROJ_SOURCES
        \${SERVICE_NATIVE_DIR}/service/ServiceAnalytics.h
        \${SERVICE_NATIVE_DIR}/service/ServiceAnalytics.m
    )
endif()`);
        ebh.file.replaceFileContent(srvCmakePath, /(#_LIB_)/g, `$1
    if(USE_ANALYTICS AND IOS)
        add_library(cocosanalytics STATIC IMPORTED GLOBAL)
        set_target_properties(cocosanalytics PROPERTIES
            IMPORTED_LOCATION \${SERVICE_NATIVE_DIR}/libs/analytics/libcocosanalytics.a
            INTERFACE_INCLUDE_DIRECTORIES \${SERVICE_NATIVE_DIR}/libs/analytics/include
        )
        target_link_libraries(\${LIB_NAME}  "-all_load" cocosanalytics)
        target_include_directories(\${LIB_NAME} PRIVATE \${SERVICE_NATIVE_DIR}/libs/analytics/include)
    endif()`);
    }
    // 在 cfg.cmake 的控制变量操控是否需要启用 Analytics 文件
    if (ebh.file.checkFileContent(cfgCmakePath, /USE_ANALYTICS/)) {
        // 存在已有配置则更新
        ebh.file.replaceFileContent(cfgCmakePath, /set\(USE_ANALYTICS (ON|OFF)\)/g, "set(USE_ANALYTICS ON)");
    } else {
        // 否则直接追加内容
        ebh.file.appendFileContent(cfgCmakePath, `set(USE_ANALYTICS ON)`);
    }
}

let processNativeSupport = function (options: any, result: any) {
    let destRoot = dirname(result.paths.dir);
    if (ebh.service.getEnableFormOptions(options, service_name)) {
        // 执行安装操作
        // 写入 service full class name 到 assets/service.json => serviceClasses 的节点中
        ebh.service.writeClassName(result.paths.dir, "com.cocos.service.ServiceAnalytics");
        // 对支持的 native 平台执行特定平台的安装
        if (['android', "huawei-agc"].includes(options.platform)) {
            // android
            // 拷贝需要的文件
            let copyList = [
                { src: join(__dirname, "./resource/sdk/android/libcocosanalytics.jar"), dest: join(destRoot, "proj/libservice/libs/libcocosanalytics.jar") },
                { src: join(__dirname, "./resource/src/android/ServiceAnalytics.java"), dest: join(destRoot, "proj/libservice/src/com/cocos/service/ServiceAnalytics.java") },
            ];
            ebh.file.copyFilesByItem(copyList);
            // 添加 SDK 需要的权限
            let manifestPath = join(destRoot, "/proj/libservice/AndroidManifest.xml")
            ebh.android.addUsesPermission(manifestPath, "INTERNET");
            ebh.android.addUsesPermission(manifestPath, "ACCESS_FINE_LOCATION");
            ebh.android.addUsesPermission(manifestPath, "ACCESS_NETWORK_STATE");
        } else if ('ios' === options.platform) {
            // ios
            // 注：由于 cmake 的特性，想要在一个文件组中引用文件，所有文件都必须放在同一个目录下，所以只能将对应的文件拷贝到项目的 native 目录
            let nativeRoot = join(ccService.csEditor.getProjectPath(), 'native');
            let copyList = [
                { src: join(__dirname, "./resource/sdk/ios/analytics"), dest: join(nativeRoot, "engine/ios/libs/analytics") },
                { src: join(__dirname, "./resource/src/ios/ServiceAnalytics.h"), dest: join(nativeRoot, "engine/ios/service/ServiceAnalytics.h") },
                { src: join(__dirname, "./resource/src/ios/ServiceAnalytics.m"), dest: join(nativeRoot, "engine/ios/service/ServiceAnalytics.m") },
            ];
            ebh.file.copyFilesByItem(copyList);
            // 修改 ios 的配置文件
            instertIOSSrc(destRoot);
        }
    } else {
        // 执行卸载操作
        // 在iOS中，iOS的项目文件是由cmake生成的，可以直接关闭 cmake 的控制变量即可控制服务的开关，关闭iOS宏定义
        let cfgCmakePath = join(destRoot, "proj/cfg.cmake");
        ebh.file.replaceFileContent(cfgCmakePath, /set\(USE_ANALYTICS (ON|OFF)\)/g, "set(USE_ANALYTICS OFF)");
        // 移除 Android 项目支持
        let copyList = [
            { src: join(__dirname, "./resource/sdk/android/libcocosanalytics.jar"), dest: join(destRoot, "proj/libservice/libs/libcocosanalytics.jar") },
            { src: join(__dirname, "./resource/src/android/ServiceAnalytics.java"), dest: join(destRoot, "proj/libservice/src/com/cocos/service/ServiceAnalytics.java") },
        ];
        ebh.file.removeFilesByItem(copyList);
    }
}

/* 启用预览时，在生成 settings 信息是会调用此方法，再次方法中指定的 js sdk 动态导入到预览环境，使得预览时也能正常使用 SDK 而不报错 */
export async function onSettings(params: ParamType, previewType: "browser" | "simulator", insertJS: (js: string) => void) {
    // 获取 Service 的预览用脚本的临时目录 {项目目录}/temp/cs-scripts/
    let tmpPath = ccService.csEditor.getPreviewRoot();
    // 若目录不存在则创建
    if (!existsSync(tmpPath)) mkdirsSync(tmpPath);
    // 拷贝指定的 SDK 文件到该目录
    copyFileSync(join(__dirname, './resource/js/', analyticsFile), join(tmpPath, analyticsFile));
    // 向该目录写入静默初始化代码
    ebh.file.writeFileContent(join(tmpPath, initAnalytics), getInitJSContent(params));
    // 根据预览的类型，向 jsList 中插入对应的节点，按照脚本的加载顺序插入，否则会出现找不到 sdk 入口的问题
    if (previewType === 'browser') {
        // 目前浏览器预览时，加载脚本是通过 http 方式读取的，此时可以通过 cs-scripts/文件名 的方式直接访问上面拷贝的文件
        insertJS(join('cs-scripts', analyticsFile));
        insertJS(join('cs-scripts', initAnalytics));
    } else if (previewType === 'simulator') {
        // 在模拟器预览时，还在脚本是通过文件系统全路径读取的，jsList中的根目录为项目文件夹，需要通过 temp/cs-scripts/文件名 的方式才能访问
        insertJS(join('temp/cs-scripts', analyticsFile));
        insertJS(join('temp/cs-scripts', initAnalytics));
    }
}

/* 当服务的状态发生改变时，触发此方法，可以再次方法导入通用的纯 JS 的 SDK 文件，或者导入 dts 文件 */
export async function onServiceStatusChanged(projectPath: string, info: ServiceConfigInfo) {
    console.log(__dirname, 'cocosads => onServiceStatusChanged');
    let dtsFileDestPath = join(projectPath, 'cocosanalytics.d.ts');
    let dtsFileSrcPath = join(__dirname, "./resource/js/cocosanalytics.d.ts");
    // 若是启用项目则拷贝 dts 文件，否则删除 dts 文件
    if (info.enable) {
        ebh.file.copyFile(dtsFileSrcPath, dtsFileDestPath, true);
    } else {
        ebh.file.removeFile(dtsFileDestPath);
    }
}


export async function onAfterCompressSettings(options: any, result: any) {
    console.log(__dirname, 'cocosads => onAfterCompressSettings');
    // 判断构建平台是否支持，不支持则直接跳过
    if (!supportPlatform.includes(options.platform)) return;
    // 获取 service 配置的参数信息
    let params = ebh.service.getParamsFormOptions(options, service_name);
    // 检查 params 中参数是否存在，否则抛出异常终止构建流程
    if (!params || !ccService.csUtil.validateString(params.appid) || !ccService.csUtil.validateString(params.appid)) {
        throw new Error("Cocos Service (Analytics) - 检测到参数填写不完整，集成失败！请至服务面板中打开对应的服务，完整填写参数。");
    }
    // 开始处理构建集成
    // 处理 JS 部分，
    processJavaScriptSupport(options, result, params);
    // 当前构建平台是否是原生平台，是则继续集成 (前面已经过滤掉了不支持的平台)
    if (nativePlatform.includes(options.platform)) processNativeSupport(options, result);
}

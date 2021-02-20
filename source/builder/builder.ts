import { ParamType } from "../../@types/service/ifs";

export async function onSettings(params: ParamType, previewType: "browser" | "simulator", insertJS: (js: string) => void) {
    console.log(__dirname, 'cocosads => onSettings');
    // 通过调用 insertJS 向 settings.jsList 中 插入项目
}

export async function onServiceStatusChanged(projectPath: string, info: any) {
    console.log(__dirname, 'cocosads => onServiceStatusChanged');
    console.log(__dirname, projectPath, info);
    console.log(__dirname, ccService);
}

export async function onBeforeBuild(options: any, result: any) {
    console.log(__dirname, 'cocosads => onBeforeBuild');
    // 抛出异常则终止构建流程
    // throw new Error("我是故意的，就是不想让你集成成功！");
}

export async function onBeforeCompressSettings(options: any, result: any) {
    console.log(__dirname, 'cocosads => onBeforeCompressSettings');
}

export async function onAfterCompressSettings(options: any, result: any) {
    console.log(__dirname, 'cocosads => onAfterCompressSettings');
}

export async function onAfterBuild(options: any, result: any) {
    console.log(__dirname, 'cocosads => onAfterBuild');
}

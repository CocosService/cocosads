export async function onServiceStatusChanged(projectPath: string, info: any) {
    console.log('analytics => onServiceStatusChanged');
    console.log(projectPath, info);
    // @ts-ignore
    console.log(ccService);
}

export async function onBeforeBuild(options: any, result: any) {
    console.log('analytics => onBeforeBuild');
    // throw new Error("我是故意的，就是不想让你集成成功！");
}

export async function onBeforeCompressSettings(options: any, result: any) {
    console.log('analytics => onBeforeCompressSettings');
}

export async function onAfterCompressSettings(options: any, result: any) {
    console.log('analytics => onAfterCompressSettings');
}

export async function onAfterBuild(options: any, result: any) {
    console.log('analytics => onAfterBuild');
}

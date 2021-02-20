interface IAppendRes {
    hash: string;
    paths: string[];
}
export namespace BuilderWorker {
    export interface IBuild {
        Utils: {
            /**
             * 压缩 uuid
             * 'fc991dd7-0033-4b80-9d41-c8a86a702e59' -> 'fc9913XADNLgJ1ByKhqcC5Z'
             */
            compressUuid: (uuid: string, min: boolean) => string;

            /**
             * 解压缩 uuid
             * 'fc9913XADNLgJ1ByKhqcC5Z' -> 'fc991dd7-0033-4b80-9d41-c8a86a702e59'
             */
            decompressUuid: (uuid: string) => string;

            /**
             * 翻译带有 i18n 开头的名称（i18n:test)(待定)
             * 'i18n:test' -> '测试'
             */
            transI18nName: (name: string) => string;

            /**
             * 移除 db 前缀
             * 'db://assets/test.jpg' -> 'assets/test.jpg'
             */
            removeDbHeader: (url: string) => string;

            /**
             * 将 db 开头的 url 转为项目里的实际 url
             * 'db://assets/test.jpg' -> 'c:/project/assets/test.jpg'
             */
            dbUrlToRawPath: (url: string) => string;

            /**
             * 从路径里获取存在的 uuid
             * 'E:\test3d\library\oc\0c0c1f5742-89b0-4a1e-b5eb-914d84f48c1c.json' -> '0c0c1f5742-89b0-4a1e-b5eb-914d84f48c1c'
             */
            getUuidFromPath: (path: string) => string;

            /**
             * 检查是否全局安装了 nodejs
             */
            isInstallNodeJs: () => Promise<boolean>;

            /**
             * 逐文件拷贝
             */
            copyDirSync: (src: string, dest: string) => void;

            /**
             * 获取相对路径接口
             * 返回 / 拼接的相对路径
             */
            relativeUrl: (from: string, to: string) => string;

            transformCode: (code: string, options: ITransformOptions) => Promise<string>;

            /**
             * 给指定路径添加 md5
             */
            appendMd5ToPaths: (paths: string[]) => IAppendRes | null;

            calcMd5: (data: Buffer | string) => string;
        };
        RAW_ASSETS_HEADER: string;
        LIBRARY_NAME: string;
        GROUP_HEADER: string;
        IMPORT_HEADER: string;

        projectTempDir: string;
        globalTempDir: string;
        __taskId: string;
    }
}

// 定义 builder 进程内的全局变量
declare global {
    const Build: BuilderWorker.IBuild;
    const __manager: {
        taskManager: any;
        currentCompileTask: any;
        currentBuildTask: any;
    };
}

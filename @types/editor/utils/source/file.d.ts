/**
 * 初始化一个可用的文件名
 * @param file 初始文件路径
 * @returns {string} path 可用名称的文件路径
 */
export declare function getName(file: string): string;
interface UnzipOptions {
    peel?: boolean;
}
/**
 * 解压文件夹
 * @param zip
 * @param target
 */
export declare function unzip(zip: string, target: string, options?: UnzipOptions): Promise<void>;
export {};

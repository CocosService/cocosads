import { BuildResult, TaskOption } from "../ifs";
export declare const throwError = true;
export declare function onBeforeBuild(options: TaskOption, result: BuildResult): Promise<void>;
export declare function onBeforeCompressSettings(options: TaskOption, result: BuildResult): Promise<void>;
export declare function onAfterCompressSettings(options: TaskOption, result: BuildResult): Promise<void>;
export declare function onAfterBuild(options: TaskOption, result: BuildResult): Promise<void>;

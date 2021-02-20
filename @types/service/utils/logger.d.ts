import { LogLevel } from "../ifs";
declare const _default: {
    /**
     * 打印日志
     * @param level 日志等级
     * @param log   日志内容
     */
    printLog: (level: LogLevel, log: any) => void;
    log: (log: any) => void;
    info: (log: any) => void;
    warn: (log: any) => void;
    error: (log: any) => void;
};
export default _default;

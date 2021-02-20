interface trackEventInfoOpts {
    eventTag?: string;
    action?: string;
    label?: string;
}
export interface trackEventInfo {
    category: string;
    action: string;
    opts?: trackEventInfoOpts;
    label?: string;
}
export interface trackOptions {
    uid: string;
    cid: string;
}
export interface trackExceptionInfo {
    code: number;
    message: string;
}
export {};

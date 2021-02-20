import { FileFilter } from 'electron';
export interface SelectDialogOptions {
    title?: string;
    path?: string;
    type?: 'directory' | 'file';
    button?: string;
    multi?: boolean;
    filters?: FileFilter[];
}
export interface MessageDialogOptions {
    title?: string;
    detail?: string;
    default?: number;
    cancel?: number;
    buttons?: string[];
}

import fse from "fs-extra";
import { Monitor } from "watch";
declare const _default: {
    zip: (src_dir: string, dist?: string) => Promise<void>;
    unzip: (src: string, dist?: string) => Promise<void>;
    walk: (dir: string, hasDir?: boolean) => string[];
    mkdirs: (dir: string) => void;
    readJson: (...paths: string[]) => any;
    saveJson: (file: string, data: any) => void;
    copy: (src: string, dist: string, options: fse.CopyOptionsSync | undefined) => void;
    move: (src: string, dist: string, options: fse.MoveOptions | undefined) => void;
    remove: (src: string) => void;
    watch: (dir: string, callback: (monitor: Monitor) => void) => void;
    readFile: (...paths: string[]) => string;
    recursive: (dir: string, handle: (file: string) => void, filter?: ((file: string) => boolean) | undefined) => void;
};
export default _default;

import Vue from '../../../vue';
import { ContentMenuItem } from '../../../ifs';
declare const _default: import("../../../vue/types/vue").ExtendedVue<Vue, {
    show: boolean;
    menuStyle: {
        top: string;
        left: string;
    };
    positionContainerStyle: {
        position: string;
        width: string;
        top: string;
        left: string;
        right: string;
    };
    subMenuStyle: {
        position: string;
        left: string;
        right: string;
        top: string;
    };
    curSubMenuItemId: string;
}, {
    setupItemsTopAndBottom(items: ContentMenuItem[]): void;
    itemClick(item: ContentMenuItem, e: MouseEvent): void;
    onSubMenuItemEnter(item: ContentMenuItem): void;
    onSubMenuItemLeave(): void;
}, unknown, {
    position: any;
    items: unknown[];
    callback: Function;
}>;
export default _default;

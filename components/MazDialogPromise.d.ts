import { type PropType } from 'vue';
import { type Color, type Size } from './types';
import { type DialogData } from './MazDialogPromise/use-maz-dialog-promise';
export type DialogButton = {
    text: string;
    type: 'resolve' | 'reject';
    block?: boolean;
    color?: Color;
    disabled?: boolean;
    loading?: boolean;
    outline?: boolean;
    response?: string | boolean;
    rounded?: boolean;
    size?: Size;
};
export { useMazDialogPromise, type DialogState, type DialogData, } from './MazDialogPromise/use-maz-dialog-promise';
export type { Color, Size } from './types';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    /** Dialog Data - type DialogData */
    data: {
        type: PropType<DialogData>;
        default: undefined;
    };
    /** Uniq identifier */
    identifier: {
        type: StringConstructor;
        required: true;
    };
    /** Custom buttons - type DialogButton[] */
    buttons: {
        type: PropType<DialogButton[]>;
        default: () => never[];
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    /** Dialog Data - type DialogData */
    data: {
        type: PropType<DialogData>;
        default: undefined;
    };
    /** Uniq identifier */
    identifier: {
        type: StringConstructor;
        required: true;
    };
    /** Custom buttons - type DialogButton[] */
    buttons: {
        type: PropType<DialogButton[]>;
        default: () => never[];
    };
}>>, {
    data: DialogData;
    buttons: DialogButton[];
}, {}>, {
    title?(_: {}): any;
    default?(_: {
        resolve: (reason?: string | boolean) => void;
        reject: (reason?: string | boolean) => void;
    }): any;
    "footer-button"?(_: {
        resolve: (reason?: string | boolean) => void;
        reject: (reason?: string | boolean) => void;
    }): any;
    "cancel-text"?(_: {}): any;
    "confirm-text"?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};

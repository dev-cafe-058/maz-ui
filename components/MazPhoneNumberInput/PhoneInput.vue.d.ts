import type { Color, Size } from '../MazPhoneNumberInput.vue';
declare const _default: import("vue").DefineComponent<{
    modelValue: import("vue").PropType<string>;
    size: {
        type: import("vue").PropType<Size>;
        required: true;
    };
    label: {
        type: import("vue").PropType<string>;
        default: undefined;
    };
    error: {
        type: import("vue").PropType<boolean>;
    };
    id: {
        type: import("vue").PropType<string>;
        required: true;
    };
    success: {
        type: import("vue").PropType<boolean>;
    };
    disabled: {
        type: import("vue").PropType<boolean>;
    };
    color: {
        type: import("vue").PropType<Color>;
        required: true;
    };
    locales: {
        type: import("vue").PropType<{
            countrySelector: {
                placeholder: string;
                error: string;
                searchPlaceholder: string;
            };
            phoneInput: {
                placeholder: string;
                example: string;
            };
        }>;
        required: true;
    };
    noExample: {
        type: import("vue").PropType<boolean>;
    };
    hasRadius: {
        type: import("vue").PropType<boolean>;
    };
    autoFormat: {
        type: import("vue").PropType<boolean>;
    };
    noFormattingAsYouType: {
        type: import("vue").PropType<boolean>;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (modelValue: string) => void;
    "update:model-value": (phoneNumber?: string | undefined) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: import("vue").PropType<string>;
    size: {
        type: import("vue").PropType<Size>;
        required: true;
    };
    label: {
        type: import("vue").PropType<string>;
        default: undefined;
    };
    error: {
        type: import("vue").PropType<boolean>;
    };
    id: {
        type: import("vue").PropType<string>;
        required: true;
    };
    success: {
        type: import("vue").PropType<boolean>;
    };
    disabled: {
        type: import("vue").PropType<boolean>;
    };
    color: {
        type: import("vue").PropType<Color>;
        required: true;
    };
    locales: {
        type: import("vue").PropType<{
            countrySelector: {
                placeholder: string;
                error: string;
                searchPlaceholder: string;
            };
            phoneInput: {
                placeholder: string;
                example: string;
            };
        }>;
        required: true;
    };
    noExample: {
        type: import("vue").PropType<boolean>;
    };
    hasRadius: {
        type: import("vue").PropType<boolean>;
    };
    autoFormat: {
        type: import("vue").PropType<boolean>;
    };
    noFormattingAsYouType: {
        type: import("vue").PropType<boolean>;
    };
}>> & {
    "onUpdate:model-value"?: ((phoneNumber?: string | undefined) => any) | undefined;
    "onUpdate:modelValue"?: ((modelValue: string) => any) | undefined;
}, {
    label: string;
}, {}>;
export default _default;

import { type HTMLAttributes, type FunctionalComponent, type ComponentPublicInstance, type Component, type SVGAttributes } from 'vue';
import type { Color, ModelValueSimple, Size } from './types';
export type Icon = FunctionalComponent<SVGAttributes> | ComponentPublicInstance | Component;
export type { Color, Size, ModelValueSimple } from './types';
export type Props<T = ModelValueSimple> = {
    /** The style of the component */
    style?: HTMLAttributes['style'];
    /** The class of the component */
    class?: HTMLAttributes['class'];
    /**
     * The value of the input
     * @model
     */
    modelValue?: T | undefined;
    /** The placeholder of the input */
    placeholder?: string;
    /** The label of the component */
    label?: string;
    /** The attribut name of the input */
    name?: string;
    /** The color of the component */
    color?: Color;
    /** The attribut type of the input */
    type?: 'text' | 'date' | 'number' | 'tel' | 'search' | 'url' | 'password' | 'month' | 'time' | 'week' | 'email';
    /** The attribut required of the input */
    required?: boolean;
    /** The attribut disabled of the input */
    disabled?: boolean;
    /** The attribut readonly of the input */
    readonly?: boolean;
    /** The attribut id of the input */
    id?: string;
    /** Enable error state UI */
    error?: boolean;
    /** Enable success state UI */
    success?: boolean;
    /** Enable warning state UI */
    warning?: boolean;
    /** The hint will replace the label */
    hint?: string;
    /** The class of the input wrapper div element */
    inputClasses?: string;
    /** Remove the border of the input */
    noBorder?: boolean;
    /** Remove the radius of the input */
    noRadius?: boolean;
    /** The attribut inputmode of the input */
    inputmode?: HTMLAttributes['inputmode'];
    /** The size of the component */
    size?: Size;
    /** Enable debounce on input - can be `boolean | number`, if it is a number, it is used for the debounce delay */
    debounce?: boolean | number;
    /**
     * The delay of the debounce
     * @deprecated use debounce instead
     */
    debounceDelay?: number;
    /** Display the valid button - this button has type="submit"  */
    validButton?: boolean;
    /** Display the loading state on the valid button */
    validButtonLoading?: boolean;
    /** if true the input will be focus on render */
    autoFocus?: boolean;
    /** if true the component has the colorized border by default, not only on focus */
    borderActive?: boolean;
    /**
     * The left icon of the input
     * `@type` `{string | FunctionalComponent<SVGAttributes> | ComponentPublicInstance | Component}`
     */
    leftIcon?: string | Icon;
    /**
     * The right icon of the input
     * `@type` `{string | FunctionalComponent<SVGAttributes> | ComponentPublicInstance | Component}`
     */
    rightIcon?: string | Icon;
    /**
     * Size of the rounded
     * @values `'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full'`
     */
    roundedSize?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
    /** The input will be displayed in full width */
    block?: boolean;
};
declare const _default: <T extends ModelValueSimple>(__VLS_props: {
    size?: Size | undefined;
    label?: string | undefined;
    error?: boolean | undefined;
    name?: string | undefined;
    id?: string | undefined;
    success?: boolean | undefined;
    warning?: boolean | undefined;
    type?: "number" | "search" | "time" | "text" | "date" | "email" | "month" | "password" | "tel" | "url" | "week" | undefined;
    disabled?: boolean | undefined;
    color?: Color | undefined;
    onFocus?: ((event: Event) => any) | undefined;
    onBlur?: ((event: Event) => any) | undefined;
    onChange?: ((event: Event) => any) | undefined;
    onClick?: ((event: Event) => any) | undefined;
    required?: boolean | undefined;
    readonly?: boolean | undefined;
    roundedSize?: "sm" | "md" | "lg" | "xl" | "none" | "full" | undefined;
    block?: boolean | undefined;
    leftIcon?: string | Icon | undefined;
    rightIcon?: string | Icon | undefined;
    modelValue?: T | undefined;
    "onUpdate:model-value"?: ((value?: T | undefined) => any) | undefined;
    noRadius?: boolean | undefined;
    inputmode?: "search" | "text" | "numeric" | "none" | "email" | "tel" | "url" | "decimal" | undefined;
    placeholder?: string | undefined;
    hint?: string | undefined;
    inputClasses?: string | undefined;
    noBorder?: boolean | undefined;
    debounce?: number | boolean | undefined;
    debounceDelay?: number | undefined;
    validButton?: boolean | undefined;
    validButtonLoading?: boolean | undefined;
    autoFocus?: boolean | undefined;
    borderActive?: boolean | undefined;
} & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, __VLS_ctx?: {
    attrs: any;
    slots: {
        "left-icon"?(_: {}): any;
        "right-icon"?(_: {}): any;
        "valid-button"?(_: {}): any;
    };
    emit: ((evt: "click", event: Event) => void) & ((evt: "blur", event: Event) => void) & ((evt: "change", event: Event) => void) & ((evt: "focus", event: Event) => void) & ((evt: "update:model-value", value?: T | undefined) => void);
} | undefined, __VLS_expose?: ((exposed: import('vue').ShallowUnwrapRef<{}>) => void) | undefined, __VLS_setup?: Promise<{
    props: {
        size?: Size | undefined;
        label?: string | undefined;
        error?: boolean | undefined;
        name?: string | undefined;
        id?: string | undefined;
        success?: boolean | undefined;
        warning?: boolean | undefined;
        type?: "number" | "search" | "time" | "text" | "date" | "email" | "month" | "password" | "tel" | "url" | "week" | undefined;
        disabled?: boolean | undefined;
        color?: Color | undefined;
        onFocus?: ((event: Event) => any) | undefined;
        onBlur?: ((event: Event) => any) | undefined;
        onChange?: ((event: Event) => any) | undefined;
        onClick?: ((event: Event) => any) | undefined;
        required?: boolean | undefined;
        readonly?: boolean | undefined;
        roundedSize?: "sm" | "md" | "lg" | "xl" | "none" | "full" | undefined;
        block?: boolean | undefined;
        leftIcon?: string | Icon | undefined;
        rightIcon?: string | Icon | undefined;
        modelValue?: T | undefined;
        "onUpdate:model-value"?: ((value?: T | undefined) => any) | undefined;
        noRadius?: boolean | undefined;
        inputmode?: "search" | "text" | "numeric" | "none" | "email" | "tel" | "url" | "decimal" | undefined;
        placeholder?: string | undefined;
        hint?: string | undefined;
        inputClasses?: string | undefined;
        noBorder?: boolean | undefined;
        debounce?: number | boolean | undefined;
        debounceDelay?: number | undefined;
        validButton?: boolean | undefined;
        validButtonLoading?: boolean | undefined;
        autoFocus?: boolean | undefined;
        borderActive?: boolean | undefined;
    } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps;
    expose(exposed: import('vue').ShallowUnwrapRef<{}>): void;
    attrs: any;
    slots: {
        "left-icon"?(_: {}): any;
        "right-icon"?(_: {}): any;
        "valid-button"?(_: {}): any;
    };
    emit: ((evt: "click", event: Event) => void) & ((evt: "blur", event: Event) => void) & ((evt: "change", event: Event) => void) & ((evt: "focus", event: Event) => void) & ((evt: "update:model-value", value?: T | undefined) => void);
}>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}> & {
    __ctx?: {
        props: {
            size?: Size | undefined;
            label?: string | undefined;
            error?: boolean | undefined;
            name?: string | undefined;
            id?: string | undefined;
            success?: boolean | undefined;
            warning?: boolean | undefined;
            type?: "number" | "search" | "time" | "text" | "date" | "email" | "month" | "password" | "tel" | "url" | "week" | undefined;
            disabled?: boolean | undefined;
            color?: Color | undefined;
            onFocus?: ((event: Event) => any) | undefined;
            onBlur?: ((event: Event) => any) | undefined;
            onChange?: ((event: Event) => any) | undefined;
            onClick?: ((event: Event) => any) | undefined;
            required?: boolean | undefined;
            readonly?: boolean | undefined;
            roundedSize?: "sm" | "md" | "lg" | "xl" | "none" | "full" | undefined;
            block?: boolean | undefined;
            leftIcon?: string | Icon | undefined;
            rightIcon?: string | Icon | undefined;
            modelValue?: T | undefined;
            "onUpdate:model-value"?: ((value?: T | undefined) => any) | undefined;
            noRadius?: boolean | undefined;
            inputmode?: "search" | "text" | "numeric" | "none" | "email" | "tel" | "url" | "decimal" | undefined;
            placeholder?: string | undefined;
            hint?: string | undefined;
            inputClasses?: string | undefined;
            noBorder?: boolean | undefined;
            debounce?: number | boolean | undefined;
            debounceDelay?: number | undefined;
            validButton?: boolean | undefined;
            validButtonLoading?: boolean | undefined;
            autoFocus?: boolean | undefined;
            borderActive?: boolean | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps;
        expose(exposed: import('vue').ShallowUnwrapRef<{}>): void;
        attrs: any;
        slots: {
            "left-icon"?(_: {}): any;
            "right-icon"?(_: {}): any;
            "valid-button"?(_: {}): any;
        };
        emit: ((evt: "click", event: Event) => void) & ((evt: "blur", event: Event) => void) & ((evt: "change", event: Event) => void) & ((evt: "focus", event: Event) => void) & ((evt: "update:model-value", value?: T | undefined) => void);
    } | undefined;
};
export default _default;
type __VLS_OmitKeepDiscriminatedUnion<T, K extends keyof any> = T extends any ? Pick<T, Exclude<keyof T, K>> : never;
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};

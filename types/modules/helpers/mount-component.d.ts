import { type App, type Component } from 'vue';
export declare function mount<T extends Component>(component: T, options?: {
    props?: Record<string, unknown>;
    children?: unknown;
    app?: App;
    element?: HTMLElement;
    addDestroyInProps?: boolean;
}): {
    vNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>;
    destroy: () => void;
    el: HTMLElement | undefined;
};

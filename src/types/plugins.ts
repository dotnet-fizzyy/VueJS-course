import _Vue from 'vue';

export interface PluginObject {
    install: (Vue: typeof _Vue, options?: unknown) => void;
    [key: string]: unknown;
}

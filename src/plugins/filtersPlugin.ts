import _Vue from 'vue';
import { PluginObject } from '@/types/plugins';

const FiltersPlugin: PluginObject = {
    install: (Vue: typeof _Vue, options?: unknown) => {
        Vue.filter('precision', (value: number, digits: number = 1): string =>
            value.toLocaleString('en-US', {
                useGrouping: false,
                minimumFractionDigits: digits,
                maximumFractionDigits: digits,
            })
        );
        Vue.filter('round', (value: number): string => Math.ceil(value).toString());
        Vue.filter('string', (value: unknown): string => value.toString());
    },
};

export default FiltersPlugin;

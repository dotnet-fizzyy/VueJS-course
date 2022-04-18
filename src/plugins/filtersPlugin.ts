import _Vue from 'vue';
import { PluginObject } from '@/types/plugins';
import { castNumberToStringWithPrecision, castNumberToStringWithRound, castToString } from '@/utils';

const FiltersPlugin: PluginObject = {
    install: (Vue: typeof _Vue, options?: unknown) => {
        Vue.filter('precision', castNumberToStringWithPrecision);
        Vue.filter('round', castNumberToStringWithRound);
        Vue.filter('string', castToString);
    },
};

export default FiltersPlugin;

import App from './App.vue';
import FiltersPlugin from '@/plugins/filtersPlugin';
import Vue from 'vue';
import VueLazyload, { VueLazyloadOptions } from 'vue-lazyload';
import store from '@/vuex/store';
import { getAppSettings } from '@/utils/appSettings';

Vue.config.productionTip = false;

Vue.use(FiltersPlugin);
Vue.use(VueLazyload, {
    preLoad: 1,
    lazyComponent: true,
    attempt: 1,
    error: getAppSettings().defaultPosterUrl,
} as VueLazyloadOptions);

new Vue({
    render: h => h(App),
    store,
}).$mount('#app');

import App from './App.vue';
import FiltersPlugin from '@/plugins/filtersPlugin';
import Fragment from 'vue-fragment';
import Vue from 'vue';
import VueLazyload, { VueLazyloadOptions } from 'vue-lazyload';
import VueResource from 'vue-resource';
import router from './router';
import store from '@/vuex/store';
import { getAppSettings } from '@/utils/appSettings';

const appSettings = getAppSettings();

Vue.use(VueResource);
Vue.use(FiltersPlugin);
Vue.use(Fragment.Plugin);
Vue.use(VueLazyload, {
    preLoad: 1,
    lazyComponent: true,
    attempt: 1,
    error: appSettings.defaultPosterUrl,
} as VueLazyloadOptions);

Vue.config.productionTip = false;
Vue.http.options.root = appSettings.apiUrl;

new Vue({
    render: h => h(App),
    router,
    store,
}).$mount('#app');

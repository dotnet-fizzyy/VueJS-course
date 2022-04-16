import App from './App.vue';
import FiltersPlugin from '@/plugins/filtersPlugin';
import Vue from 'vue';
import VueLazyload, { VueLazyloadOptions } from 'vue-lazyload';

Vue.config.productionTip = false;

Vue.use(FiltersPlugin);
Vue.use(VueLazyload, {
    preLoad: 1,
    lazyComponent: true,
} as VueLazyloadOptions);

new Vue({
    render: h => h(App),
}).$mount('#app');

import App from './App.vue';
import FiltersPlugin from '@/plugins/FiltersPlugin';
import Vue from 'vue';

Vue.config.productionTip = false;

Vue.use(FiltersPlugin);

new Vue({
    render: h => h(App),
}).$mount('#app');

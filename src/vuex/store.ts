import Films from './modules/films';
import Vue from 'vue';
import Vuex from 'vuex';
import { FilmsModuleName } from '@/constants/vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: { [FilmsModuleName]: Films },
});

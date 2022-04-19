import Films, { FilmsModuleName } from '../modules/films/state';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: { [FilmsModuleName]: Films },
});

import Films from '../modules/films/state';
import Vue from 'vue';
import Vuex from 'vuex';
import { getModuleKey } from '@/utils';

Vue.use(Vuex);

const FilmsModuleName: string = 'films';

export const getFilmGetter = (key: string) => getModuleKey(FilmsModuleName, key);

export default new Vuex.Store({
    modules: { [FilmsModuleName]: Films },
});

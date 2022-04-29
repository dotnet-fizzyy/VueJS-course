import Films from '../modules/films/state';
import Vue from 'vue';
import Vuex, { createLogger } from 'vuex';
import { FilmsModuleName } from '@/vuex/store/constants';
import { getAppSettings } from '@/utils/appSettings';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: { [FilmsModuleName]: Films },
    plugins: getAppSettings().isDevelopmentMode ? [createLogger()] : [],
});

import FiltersPlugin from '@/plugins/filtersPlugin';
import MockRoutes from '@/mocks/mockEndpoints';
import Vue from 'vue';
import VueLazyload from 'vue-lazyload';
import VueResource from 'vue-resource';
import Vuex from 'vuex';
import { createLocalVue } from '@vue/test-utils';
import { getAppSettings } from '@/utils/appSettings';

const setupMockHttpMiddleware = (localVue: Vue.VueConstructor<Vue>): void => {
    localVue.http.interceptors.push(((request, next) => {
        const route = MockRoutes.find(item => {
            return request.method === item.method && request.url === item.url;
        });

        if (route) {
            next(request.respondWith(JSON.stringify(route.response), { status: 200 }));
        } else {
            next(request.respondWith({ status: 404, statusText: 'Oh no! Not found!' }));
        }
    }) as VueResource.HttpInterceptor);

    localVue.http.options.root = getAppSettings().apiUrl;

    // todo: try to find the other way to set "http" to global Vue
    Vue.http = localVue.http;
};

export const createDefaultVueInstance = (): Vue.VueConstructor<Vue> => {
    const localVue = createLocalVue();
    localVue.use(VueResource);
    localVue.use(Vuex);
    localVue.use(FiltersPlugin);
    localVue.use(VueLazyload);

    setupMockHttpMiddleware(localVue);

    return localVue;
};

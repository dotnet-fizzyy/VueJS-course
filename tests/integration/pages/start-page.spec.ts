import Films from '@/vuex/modules/films/state';
import FiltersPlugin from '@/plugins/filtersPlugin';
import MockRoutes from '@/mocks/mockEndpoints';
import StartPage from '@/pages/start-page/StartPage.vue';
import Vue from 'vue';
import VueLazyload from 'vue-lazyload';
import VueResource from 'vue-resource';
import Vuex from 'vuex';
import { FilmGetterProps } from '@/vuex/modules/films/getters';
import { FilmsModuleName } from '@/vuex/store/constants';
import { NoFilmsFoundMessage } from '@/constants/search';
import { State } from '@/vuex/store/state';
import { createLocalVue, mount } from '@vue/test-utils';
import { delay } from '@/utils';
import { getAppSettings } from '@/utils/appSettings';

const localVue = createLocalVue();
localVue.use(VueResource);
localVue.use(Vuex);
localVue.use(FiltersPlugin);
localVue.use(VueLazyload);

localVue.http.options.root = getAppSettings().apiUrl;

// todo: try to find the other way to set "http" to global Vue
Vue.http = localVue.http;

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

describe('StartPage.vue', () => {
    test('Should render', () => {
        //Arrange
        const store = new Vuex.Store({
            modules: { [FilmsModuleName]: Films },
        });

        const wrapper = mount(StartPage, {
            store,
            localVue,
        });

        //Act & Assert
        expect(wrapper.element).toMatchSnapshot();
    });

    test('Should display all available films previews in body section from store', () => {
        //Arrange
        const store = new Vuex.Store({
            modules: { [FilmsModuleName]: Films },
        });

        const wrapper = mount(StartPage, {
            store,
            localVue,
        });

        const expectedItemsCount: number = (store.state as State).films.length;

        //Act
        const filmPreviewsWrappers = wrapper.findAll('[data-aqa-preview]');

        //Assert
        expect(filmPreviewsWrappers.length).toEqual(expectedItemsCount);
    });

    test(`Should display "${NoFilmsFoundMessage}" label if film previews empty array was provided from store`, () => {
        //Arrange
        const store = new Vuex.Store({
            modules: {
                [FilmsModuleName]: {
                    ...Films,
                    getters: {
                        ...Films.getters,
                        [FilmGetterProps.FilmsPreviews]: () => [],
                        [FilmGetterProps.IsLoadingItems]: () => false,
                    },
                },
            },
        });

        const wrapper = mount(StartPage, {
            store,
            localVue,
        });

        //Act & Assert
        const noFilmsMessageContainerWrapper = wrapper.find('#no-films-message-container');

        expect(noFilmsMessageContainerWrapper.element).toBeTruthy();

        const noFilmsMessageWrapper = noFilmsMessageContainerWrapper.find('span');

        expect(noFilmsMessageWrapper.text()).toEqual(NoFilmsFoundMessage);
    });

    test(`Should display film full description if it was selected from previews`, async () => {
        //Arrange
        const requestDelay: number = 100;

        const store = new Vuex.Store({
            modules: { [FilmsModuleName]: Films },
        });

        const wrapper = mount(StartPage, {
            store,
            localVue,
        });

        //Act & Assert
        await delay(requestDelay);
        await wrapper.vm.$nextTick();

        const filmPreviewWrapper = wrapper.find('[data-aqa-preview]');
        expect(filmPreviewWrapper.element).toBeTruthy();

        const filmId = filmPreviewWrapper.props('id');
        filmPreviewWrapper.vm.$emit('select', filmId);

        expect(filmPreviewWrapper.emitted('select')).toBeTruthy();

        await delay(requestDelay);
        await wrapper.vm.$nextTick();

        const filmFullDescriptionWrapper = wrapper.find('[data-aqa-full-description]');

        expect(filmFullDescriptionWrapper.element).toBeTruthy();

        const filmPreviewNameWrapper = filmPreviewWrapper.find('[data-aqa-film-preview-name]');
        const filmFullDescriptionNameWrapper = filmFullDescriptionWrapper.find('[data-aqa-full-desc-name]');

        expect(filmPreviewNameWrapper.element).toBeTruthy();
        expect(filmFullDescriptionNameWrapper.element).toBeTruthy();
        expect(filmPreviewNameWrapper.text()).toEqual(filmFullDescriptionNameWrapper.text());
    });
});

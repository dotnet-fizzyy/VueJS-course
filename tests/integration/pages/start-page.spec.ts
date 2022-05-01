import Films from '@/vuex/modules/films/state';
import StartPage from '@/pages/start-page/StartPage.vue';
import Vue from 'vue';
import Vuex from 'vuex';
import router from '@/router';
import store from '@/vuex/store';
import { FilmGetterProps } from '@/vuex/modules/films/getters';
import { FilmsModuleName } from '@/vuex/store/constants';
import { NoFilmsFoundMessage } from '@/constants/search';
import { State } from '@/vuex/store/state';
import { Wrapper, mount } from '@vue/test-utils';
import { createDefaultVueInstance } from '../../setup';
import { delay } from '@/utils';

const localVue = createDefaultVueInstance();

describe('StartPage.vue', () => {
    const createComponent = (store): Wrapper<Vue> =>
        mount(StartPage, {
            store,
            router,
            localVue,
        });

    const findAllFilmsPreviews = (wrapper: Wrapper<Vue>) => wrapper.findAll('[data-aqa-preview]');

    const findFirstFilmPreview = (wrapper: Wrapper<Vue>) => wrapper.find('[data-aqa-preview]');

    const findFilmPreviewNameSection = (wrapper: Wrapper<Vue>) => wrapper.find('[data-aqa-film-preview-name]');

    const findFilmFullDescription = (wrapper: Wrapper<Vue>) => wrapper.find('[data-aqa-full-description]');

    const findFilmFullDescriptionNameSection = (wrapper: Wrapper<Vue>) => wrapper.find('[data-aqa-full-desc-name]');

    const findLoadingIcon = (wrapper: Wrapper<Vue>) => wrapper.find('[data-aqa-loading-icon]');

    const findIdParameterPassedToProps = (wrapper: Wrapper<Vue>) => wrapper.props('id');

    it('Should display all available films previews in body section from store', () => {
        //Arrange
        const wrapper = createComponent(store);

        const expectedItemsCount: number = (store.state as State).films.length;

        //Act
        const filmPreviewsWrappers = findAllFilmsPreviews(wrapper);

        //Assert
        expect(filmPreviewsWrappers.length).toEqual(expectedItemsCount);
    });

    it(`Should display "No films found" label if film previews empty array was provided from store`, () => {
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

        const wrapper = createComponent(store);

        //Act & Assert
        expect(wrapper.html().includes(NoFilmsFoundMessage)).toBeTruthy();
    });

    it(`Should display loading logo if request to API is in process`, () => {
        //Arrange
        const store = new Vuex.Store({
            modules: {
                [FilmsModuleName]: {
                    ...Films,
                    getters: {
                        ...Films.getters,
                        [FilmGetterProps.FilmsPreviews]: () => [],
                        [FilmGetterProps.IsLoadingItems]: () => true,
                    },
                },
            },
        });

        const wrapper = createComponent(store);

        //Act & Assert
        const loadingIconWrapper = findLoadingIcon(wrapper);

        expect(loadingIconWrapper.element).toBeTruthy();
    });

    it(`Should display film full description if it was selected from previews`, async () => {
        //Arrange
        const requestDelay: number = 100;

        const wrapper = createComponent(store);

        //Act & Assert
        await delay(requestDelay);
        await wrapper.vm.$nextTick();

        const filmPreviewWrapper = findFirstFilmPreview(wrapper);
        expect(filmPreviewWrapper.element).toBeTruthy();

        const filmId = findIdParameterPassedToProps(filmPreviewWrapper);
        filmPreviewWrapper.vm.$emit('select', filmId);

        expect(filmPreviewWrapper.emitted('select')).toBeTruthy();

        await delay(requestDelay);
        await wrapper.vm.$nextTick();

        const filmFullDescriptionWrapper = findFilmFullDescription(wrapper);

        expect(filmFullDescriptionWrapper.element).toBeTruthy();

        const filmPreviewNameWrapper = findFilmPreviewNameSection(wrapper);
        const filmFullDescriptionNameWrapper = findFilmFullDescriptionNameSection(wrapper);

        expect(filmPreviewNameWrapper.element).toBeTruthy();
        expect(filmFullDescriptionNameWrapper.element).toBeTruthy();
        expect(filmPreviewNameWrapper.text()).toEqual(filmFullDescriptionNameWrapper.text());
    });
});

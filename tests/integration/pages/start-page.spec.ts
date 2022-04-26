import Films from '@/vuex/modules/films/state';
import StartPage from '@/pages/start-page/StartPage.vue';
import Vuex from 'vuex';
import store from '@/vuex/store';
import { FilmGetterProps } from '@/vuex/modules/films/getters';
import { FilmsModuleName } from '@/vuex/store/constants';
import { NoFilmsFoundMessage } from '@/constants/search';
import { State } from '@/vuex/store/state';
import { createDefaultVueInstance } from '../../setup';
import { delay } from '@/utils';
import { mount } from '@vue/test-utils';

const localVue = createDefaultVueInstance();

describe('StartPage.vue', () => {
    it('Should render', () => {
        //Arrange
        const wrapper = mount(StartPage, {
            store,
            localVue,
        });

        //Act & Assert
        expect(wrapper.element).toMatchSnapshot();
    });

    it('Should display all available films previews in body section from store', () => {
        //Arrange
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

        const wrapper = mount(StartPage, {
            store,
            localVue,
        });

        //Act & Assert
        const noFilmsMessageContainerWrapper = wrapper.find('[data-aqa-no-films-message-container]');

        expect(noFilmsMessageContainerWrapper.element).toBeTruthy();

        const noFilmsMessageWrapper = noFilmsMessageContainerWrapper.find('span');

        expect(noFilmsMessageWrapper.text()).toEqual(NoFilmsFoundMessage);
    });

    it(`Should display film full description if it was selected from previews`, async () => {
        //Arrange
        const requestDelay: number = 100;

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

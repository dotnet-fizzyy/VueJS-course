import Films from '@/vuex/modules/films/state';
import FiltersPlugin from '@/plugins/filtersPlugin';
import StartPage from '@/pages/start-page/StartPage.vue';
import VueLazyload from 'vue-lazyload';
import Vuex from 'vuex';
import { FilmGetterProps } from '@/vuex/modules/films/getters';
import { FilmsModuleName } from '@/vuex/store/constants';
import { NoFilmsFoundMessage } from '@/constants/search';
import { State } from '@/vuex/store/state';
import { createLocalVue, mount } from '@vue/test-utils';

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(FiltersPlugin);
localVue.use(VueLazyload);

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
        const store = new Vuex.Store({
            modules: { [FilmsModuleName]: Films },
        });

        const wrapper = mount(StartPage, {
            store,
            localVue,
        });

        //Act & Assert
        const filmPreviewWrapper = wrapper.find('[data-aqa-preview]');

        expect(filmPreviewWrapper.element).toBeTruthy();

        const filmId = filmPreviewWrapper.props('id');
        filmPreviewWrapper.vm.$emit('select', filmId);

        expect(filmPreviewWrapper.emitted('select')).toBeTruthy();

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

import SearchPanel from '@/components/search/SearchPanel.vue';
import Vuex from 'vuex';
import {
    FilmActionTypes,
    changeSearchActionPayload,
    changeSearchByActionPayload,
    getFilmsRequestActionPayload,
} from '@/vuex/modules/films/actions';
import { FilmGetterProps } from '@/vuex/modules/films/getters';
import { SearchByOptionNames } from '@/enums/search';
import { createLocalVue, shallowMount } from '@vue/test-utils';
import { getFilmModuleType } from '@/vuex/store/utils';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('SearchPanel.vue Tests', () => {
    it('Should render', () => {
        //Arrange
        const actions = {
            [getFilmModuleType(FilmActionTypes.ChangeSortBy)]: jest.fn(),
        };
        const getters = {
            [getFilmModuleType(FilmGetterProps.SearchTerm)]: (): string => 'value',
            [getFilmModuleType(FilmGetterProps.SearchBy)]: (): SearchByOptionNames => SearchByOptionNames.Genre,
        };

        const store = new Vuex.Store({
            actions,
            getters,
        });

        store.dispatch = jest.fn();

        const wrapper = shallowMount(SearchPanel, {
            store,
            localVue,
        });

        //Act & Assert
        expect(wrapper.element).toMatchSnapshot();
    });

    it('Should dispatch "getFilmsRequestActionPayload" action on clicking search button', () => {
        //Arrange
        const actions = {
            [getFilmModuleType(FilmActionTypes.ChangeSortBy)]: jest.fn(),
        };
        const getters = {
            [getFilmModuleType(FilmGetterProps.SearchTerm)]: (): string => 'value',
            [getFilmModuleType(FilmGetterProps.SearchBy)]: (): SearchByOptionNames => SearchByOptionNames.Genre,
        };

        const store = new Vuex.Store({
            actions,
            getters,
        });

        store.dispatch = jest.fn();

        const wrapper = shallowMount(SearchPanel, {
            store,
            localVue,
        });

        //Act & Assert
        const searchButtonWrapper = wrapper.findComponent({ name: 'primary-button' });

        expect(searchButtonWrapper.element).toBeTruthy();

        searchButtonWrapper.vm.$emit('click');

        expect(store.dispatch).toHaveBeenCalledWith(getFilmsRequestActionPayload());
    });

    it('Should dispatch "onChangeSearchQuery" action on changing search input', () => {
        //Arrange
        const actions = {
            [getFilmModuleType(FilmActionTypes.ChangeSortBy)]: jest.fn(),
        };
        const getters = {
            [getFilmModuleType(FilmGetterProps.SearchTerm)]: (): string => 'value',
            [getFilmModuleType(FilmGetterProps.SearchBy)]: (): SearchByOptionNames => SearchByOptionNames.Genre,
        };

        const store = new Vuex.Store({
            actions,
            getters,
        });

        store.dispatch = jest.fn();

        const wrapper = shallowMount(SearchPanel, {
            store,
            localVue,
        });

        const expectedSearchValue: string = 'new_search_value';

        //Act & Assert
        const searchAppInputWrapper = wrapper.findComponent({ name: 'app-input' });

        expect(searchAppInputWrapper.element).toBeTruthy();

        searchAppInputWrapper.vm.$emit('change', expectedSearchValue);

        expect(store.dispatch).toHaveBeenCalledWith(changeSearchActionPayload(expectedSearchValue));
    });

    it('Should dispatch "onChangeSearchByOption" action on changing search by option', () => {
        //Arrange
        const actions = {
            [getFilmModuleType(FilmActionTypes.ChangeSortBy)]: jest.fn(),
        };
        const getters = {
            [getFilmModuleType(FilmGetterProps.SearchTerm)]: (): string => 'value',
            [getFilmModuleType(FilmGetterProps.SearchBy)]: (): SearchByOptionNames => SearchByOptionNames.Genre,
        };

        const store = new Vuex.Store({
            actions,
            getters,
        });

        store.dispatch = jest.fn();

        const wrapper = shallowMount(SearchPanel, {
            store,
            localVue,
        });

        const expectedSearchByValue: SearchByOptionNames = SearchByOptionNames.Title;

        //Act & Assert
        const searchByOptionsWrapper = wrapper.findComponent({ name: 'button-group' });

        expect(searchByOptionsWrapper.element).toBeTruthy();

        searchByOptionsWrapper.vm.$emit('select-option', expectedSearchByValue);

        expect(store.dispatch).toHaveBeenCalledWith(changeSearchByActionPayload(expectedSearchByValue));
    });

    it('Should bind "searchTerm" getter to search input value', () => {
        //Arrange
        const searchTerm: string = 'SomeNewAwesomeValue';

        const getters = {
            [getFilmModuleType(FilmGetterProps.SearchTerm)]: (): string => searchTerm,
            [getFilmModuleType(FilmGetterProps.SearchBy)]: (): SearchByOptionNames => SearchByOptionNames.Genre,
        };

        const store = new Vuex.Store({
            getters,
        });

        const wrapper = shallowMount(SearchPanel, {
            store,
            localVue,
        });

        //Act & Assert
        const searchAppInputWrapper = wrapper.findComponent({ name: 'app-input' });

        expect(searchAppInputWrapper.element).toBeTruthy();
        expect(searchAppInputWrapper.attributes('value')).toEqual(searchTerm);
    });

    it('Should bind "selectedSearchByOption" getter to search by options', () => {
        //Arrange
        const selectedSearchByOption: SearchByOptionNames = SearchByOptionNames.Genre;

        const getters = {
            [getFilmModuleType(FilmGetterProps.SearchTerm)]: (): string => '',
            [getFilmModuleType(FilmGetterProps.SearchBy)]: (): SearchByOptionNames => selectedSearchByOption,
        };

        const store = new Vuex.Store({
            getters,
        });

        const wrapper = shallowMount(SearchPanel, {
            store,
            localVue,
        });

        //Act & Assert
        const searchAppInputWrapper = wrapper.findComponent({ name: 'button-group' });

        expect(searchAppInputWrapper.element).toBeTruthy();
        expect(searchAppInputWrapper.attributes('selectedoption')).toEqual(selectedSearchByOption);
    });
});

import SearchPanel from '@/components/search/SearchPanel.vue';
import Vue from 'vue';
import Vuex from 'vuex';
import router from '@/router';
import {
    FilmActionTypes,
    changeSearchByActionPayload,
    changeSearchTermActionPayload,
    getFilmsRequestActionPayload,
} from '@/vuex/modules/films/actions';
import { FilmGetterProps } from '@/vuex/modules/films/getters';
import { SearchByOptionNames, SortByOptionsNames } from '@/enums/search';
import { Wrapper, shallowMount } from '@vue/test-utils';
import { createDefaultVueInstance } from '../../setup';
import { getFilmModuleType } from '@/vuex/store/utils';

const localVue = createDefaultVueInstance();

describe('SearchPanel.vue Tests', () => {
    const createComponent = (store): Wrapper<Vue> =>
        shallowMount(SearchPanel, {
            store,
            router,
            localVue,
        });

    const findSearchButton = (wrapper: Wrapper<Vue>) => wrapper.findComponent({ name: 'primary-button' });

    const findSearchInput = (wrapper: Wrapper<Vue>) => wrapper.findComponent({ name: 'app-input' });

    const findSearchByOptions = (wrapper: Wrapper<Vue>) => wrapper.findComponent({ name: 'button-group' });

    let store;

    beforeEach(() => {
        const actions = {
            [getFilmModuleType(FilmActionTypes.ChangeSortBy)]: jest.fn(),
        };
        const getters = {
            [getFilmModuleType(FilmGetterProps.SearchTerm)]: (): string => 'SomeAwesomeSearchValue',
            [getFilmModuleType(FilmGetterProps.SearchBy)]: (): SearchByOptionNames => SearchByOptionNames.Genre,
            [getFilmModuleType(FilmGetterProps.SortBy)]: (): SortByOptionsNames => SortByOptionsNames.ReleaseDate,
        };

        store = new Vuex.Store({
            actions,
            getters,
        });

        store.dispatch = jest.fn();
    });

    it('Should render', () => {
        //Arrange
        const wrapper = createComponent(store);

        //Act & Assert
        expect(wrapper.element).toMatchSnapshot();
    });

    it('Should dispatch "getFilmsRequestActionPayload" action on clicking search button', () => {
        //Arrange
        const wrapper = createComponent(store);

        //Act & Assert
        const searchButtonWrapper = findSearchButton(wrapper);

        expect(searchButtonWrapper.element).toBeTruthy();

        searchButtonWrapper.vm.$emit('click');

        expect(store.dispatch).toHaveBeenCalledWith(getFilmsRequestActionPayload());
    });

    it('Should dispatch "onChangeSearchQuery" action on changing search input', () => {
        //Arrange
        const wrapper = createComponent(store);

        const expectedSearchValue: string = 'new_search_value';

        //Act & Assert
        const searchAppInputWrapper = findSearchInput(wrapper);

        expect(searchAppInputWrapper.element).toBeTruthy();

        searchAppInputWrapper.vm.$emit('change', expectedSearchValue);

        expect(store.dispatch).toHaveBeenCalledWith(changeSearchTermActionPayload(expectedSearchValue));
    });

    it('Should dispatch "onChangeSearchByOption" action on changing search by option', () => {
        //Arrange
        const wrapper = createComponent(store);

        const expectedSearchByValue: SearchByOptionNames = SearchByOptionNames.Title;

        //Act & Assert
        const searchByOptionsWrapper = findSearchByOptions(wrapper);

        expect(searchByOptionsWrapper.element).toBeTruthy();

        searchByOptionsWrapper.vm.$emit('select-option', expectedSearchByValue);

        expect(store.dispatch).toHaveBeenCalledWith(changeSearchByActionPayload(expectedSearchByValue));
    });

    it('Should bind "searchTerm" getter to search input value', () => {
        //Arrange
        const wrapper = createComponent(store);

        //Act & Assert
        const searchAppInputWrapper = findSearchInput(wrapper);

        expect(searchAppInputWrapper.element).toBeTruthy();
        expect(searchAppInputWrapper.attributes('value')).toEqual('SomeAwesomeSearchValue');
    });

    it('Should bind "selectedSearchByOption" getter to search by options', () => {
        //Arrange
        const wrapper = createComponent(store);

        //Act & Assert
        const sortByOptionsWrapper = findSearchByOptions(wrapper);

        expect(sortByOptionsWrapper.element).toBeTruthy();
        expect(sortByOptionsWrapper.attributes('selectedoption')).toEqual(SearchByOptionNames.Genre);
    });
});

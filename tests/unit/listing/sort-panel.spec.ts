import SortPanel from '@/components/listing/SortPanel.vue';
import Vuex from 'vuex';
import { FilmActionTypes, changeSortByActionPayload } from '@/vuex/modules/films/actions';
import { FilmGetterProps } from '@/vuex/modules/films/getters';
import { SortByOptionsNames } from '@/enums/search';
import { createLocalVue, shallowMount } from '@vue/test-utils';
import { getFilmModuleType } from '@/vuex/store/utils';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('SortPanel.vue Tests', () => {
    const availableItemsCount: number = 5;

    let actions;
    let getters;
    let store;

    beforeEach(() => {
        actions = {
            [getFilmModuleType(FilmActionTypes.ChangeSortBy)]: jest.fn(),
        };
        getters = {
            [getFilmModuleType(FilmGetterProps.SortBy)]: (): SortByOptionsNames => SortByOptionsNames.ReleaseDate,
            [getFilmModuleType(FilmGetterProps.AvailableCount)]: (): number => availableItemsCount,
        };

        store = new Vuex.Store({
            actions,
            getters,
        });

        store.dispatch = jest.fn();
    });

    test('Should render', () => {
        //Arrange
        const wrapper = shallowMount(SortPanel, {
            store,
            localVue,
        });

        //Act & Assert
        expect(wrapper.element).toMatchSnapshot();
    });

    test('Should render exact "availableItemsCount" qwe', () => {
        //Arrange
        const wrapper = shallowMount(SortPanel, {
            store,
            localVue,
        });

        //Act & Assert
        const availableItemsCountLabelWrapper = wrapper.find('#available-items-count');

        expect(availableItemsCountLabelWrapper.text()).toEqual(`${availableItemsCount} movies found`);
    });

    test('Should dispatch action on select different sort option', () => {
        //Arrange
        const sortOptionEventName: string = 'select-option';

        const wrapper = shallowMount(SortPanel, {
            store,
            localVue,
        });

        const expectedOption: string = 'different_sort_opt';

        //Act & Assert
        const sortOptionsWrapper = wrapper.findComponent({ name: 'button-group' });

        expect(sortOptionsWrapper.element).toBeTruthy();

        sortOptionsWrapper.vm.$emit(sortOptionEventName, expectedOption);

        expect(sortOptionsWrapper.emitted()[sortOptionEventName]).toBeTruthy();
        expect(store.dispatch).toHaveBeenCalledWith(changeSortByActionPayload(expectedOption as SortByOptionsNames));
    });
});

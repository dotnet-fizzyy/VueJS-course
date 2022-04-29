import SortPanel from '@/components/listing/SortPanel.vue';
import Vue from 'vue';
import Vuex from 'vuex';
import { FilmActionTypes, changeSortByActionPayload } from '@/vuex/modules/films/actions';
import { FilmGetterProps } from '@/vuex/modules/films/getters';
import { SortByOptionsNames } from '@/enums/search';
import { Wrapper, shallowMount } from '@vue/test-utils';
import { createDefaultVueInstance } from '../../setup';
import { getFilmModuleType } from '@/vuex/store/utils';

const localVue = createDefaultVueInstance();

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

    const createComponent = (): Wrapper<Vue> =>
        shallowMount(SortPanel, {
            store,
            localVue,
        });

    const findAvailableItemsCountLabel = (wrapper: Wrapper<Vue>) => wrapper.find('[data-aqa-available-items-count]');

    const findButtonGroupComponent = (wrapper: Wrapper<Vue>) => wrapper.findComponent({ name: 'button-group' });

    it('Should render', () => {
        //Arrange
        const wrapper = createComponent();

        //Act & Assert
        expect(wrapper.element).toMatchSnapshot();
    });

    it('Should render exact "availableItemsCount" passed from getter', () => {
        //Arrange
        const wrapper = createComponent();

        //Act & Assert
        const availableItemsCountLabelWrapper = findAvailableItemsCountLabel(wrapper);

        expect(availableItemsCountLabelWrapper.text()).toEqual(`${availableItemsCount} movies found`);
    });

    it('Should dispatch action on select different sort option', () => {
        //Arrange
        const sortOptionEventName: string = 'select-option';

        const wrapper = createComponent();

        const expectedOption: string = 'different_sort_opt';

        //Act & Assert
        const sortOptionsWrapper = findButtonGroupComponent(wrapper);

        expect(sortOptionsWrapper.element).toBeTruthy();

        sortOptionsWrapper.vm.$emit(sortOptionEventName, expectedOption);

        expect(sortOptionsWrapper.emitted()[sortOptionEventName]).toBeTruthy();
        expect(store.dispatch).toHaveBeenCalledWith(changeSortByActionPayload(expectedOption as SortByOptionsNames));
    });
});

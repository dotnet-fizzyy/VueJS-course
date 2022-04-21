import { BaseAction, Mutations } from '@/vuex/store/state';
import { FilmFullDescription } from '@/types/films';
import { FilmsState } from '@/vuex/modules/films/state';
import { MutationTree } from 'vuex';
import { SearchByOptionNames, SortByOptionsNames } from '@/enums/search';

/**
 *  Mutation Types
 */
export enum FilmMutationTypes {
    ChangeSearchTerm = 'CHANGE_SEARCH_TERM',
    ChangeSearchBy = 'CHANGE_SEARCH_BY',
    ChangeSortBy = 'CHANGE_SORT_BY',
    SetSelectedItem = 'SET_SELECTED_ITEM',
    SetItems = 'SET_ITEMS',
}

/**
 *  Payload Interfaces
 */
export interface ChangeSearchTermMutationPayload extends BaseAction {
    value: string;
}

export interface ChangeSearchByMutationPayload extends BaseAction {
    value: SearchByOptionNames;
}

export interface ChangeSortByMutationPayload extends BaseAction {
    value: SortByOptionsNames;
}

export interface SetSelectedItemMutationPayload extends BaseAction {
    value: string;
}

export interface SetItemsMutationPayload extends BaseAction {
    items: FilmFullDescription[];
}

/**
 *  Payloads
 */
export const changeSearchTermMutationPayload = (value: string): ChangeSearchTermMutationPayload => ({
    type: FilmMutationTypes.ChangeSearchTerm,
    value: value,
});

export const changeSortByMutationPayload = (value: SortByOptionsNames): ChangeSortByMutationPayload => ({
    type: FilmMutationTypes.ChangeSortBy,
    value: value,
});

export const changeSearchByMutationPayload = (value: SearchByOptionNames): ChangeSearchByMutationPayload => ({
    type: FilmMutationTypes.ChangeSearchBy,
    value: value,
});

export const setSelectedItemMutationPayload = (value: string): SetSelectedItemMutationPayload => ({
    type: FilmMutationTypes.SetSelectedItem,
    value,
});

export const setItemsMutationPayload = (items: FilmFullDescription[]): SetItemsMutationPayload => ({
    type: FilmMutationTypes.SetItems,
    items,
});

/**
 *  Mutations
 */
export const mutations: MutationTree<FilmsState> & Mutations = {
    [FilmMutationTypes.ChangeSearchTerm]: (state: FilmsState, payload: ChangeSearchTermMutationPayload): void => {
        state.searchTerm = payload.value;
    },
    [FilmMutationTypes.ChangeSearchBy]: (state: FilmsState, payload: ChangeSearchByMutationPayload): void => {
        state.searchBy = payload.value;
    },
    [FilmMutationTypes.ChangeSortBy]: (state: FilmsState, payload: ChangeSortByMutationPayload): void => {
        state.sortBy = payload.value;
    },
    [FilmMutationTypes.SetSelectedItem]: (state: FilmsState, payload: SetSelectedItemMutationPayload): void => {
        state.selectedItem = payload.value;
    },
    [FilmMutationTypes.SetItems]: (state: FilmsState, payload: SetItemsMutationPayload): void => {
        state.items = payload.items;
    },
};

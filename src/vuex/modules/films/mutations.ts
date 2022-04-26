import { BaseAction, Mutations } from '@/vuex/store/state';
import { Film } from '@/types/films';
import { FilmsState } from '@/vuex/modules/films/state';
import { MutationTree } from 'vuex';
import { SearchByOptionNames, SortByOptionsNames } from '@/enums/search';

/**
 *  Mutation Types
 */
export enum FilmMutationTypes {
    GetFilmsRequest = 'GET_FILMS_REQUEST',
    GetFilmsRequestSuccess = 'GET_FILMS_REQUEST_SUCCESS',
    GetFilmsRequestFailure = 'GET_FILMS_REQUEST_FAILURE',
    GetFilmByIdRequest = 'GET_FILM_BY_ID_REQUEST',
    GetFilmByIdRequestSuccess = 'GET_FILM_BY_ID_REQUEST_SUCCESS',
    GetFilmByIdRequestFailure = 'GET_FILM_BY_ID_REQUEST_FAILURE',
    ChangeSearchTerm = 'CHANGE_SEARCH_TERM',
    ChangeSearchBy = 'CHANGE_SEARCH_BY',
    ChangeSortBy = 'CHANGE_SORT_BY',
    BackToSearch = 'BACK_TO_SEARCH',
}

/**
 *  Payload Interfaces
 */
export interface GetFilmsRequestMutationPayload extends BaseAction {}

export interface GetFilmsRequestSuccessMutationPayload extends BaseAction {
    value: {
        items: Film[];
        length: number;
    };
}

export interface GetFilmsRequestFailureMutationPayload extends BaseAction {}

export interface GetFilmByIdRequestMutationPayload extends BaseAction {}

export interface GetFilmByIdRequestSuccessMutationPayload extends BaseAction {
    value: Film;
}

export interface GetFilmByIdRequestFailureMutationPayload extends BaseAction {}

export interface ChangeSearchTermMutationPayload extends BaseAction {
    value: string;
}

export interface ChangeSearchByMutationPayload extends BaseAction {
    value: SearchByOptionNames;
}

export interface ChangeSortByMutationPayload extends BaseAction {
    value: SortByOptionsNames;
}

export interface BackToSearchMutationPayload extends BaseAction {}

/**
 *  Payloads
 */
export const getFilmsRequestMutationPayload = (): GetFilmsRequestMutationPayload => ({
    type: FilmMutationTypes.GetFilmsRequest,
});

export const getFilmsRequestSuccessMutationPayload = (
    items: Film[],
    length: number
): GetFilmsRequestSuccessMutationPayload => ({
    type: FilmMutationTypes.GetFilmsRequestSuccess,
    value: {
        items,
        length,
    },
});

export const getFilmsRequestFailureMutationPayload = (): GetFilmsRequestFailureMutationPayload => ({
    type: FilmMutationTypes.GetFilmsRequestFailure,
});

export const getFilmByIdRequestSuccessMutationPayload = (value: Film): GetFilmByIdRequestSuccessMutationPayload => ({
    type: FilmMutationTypes.GetFilmByIdRequestSuccess,
    value,
});

export const getFilmByIdRequestMutationPayload = (): GetFilmByIdRequestMutationPayload => ({
    type: FilmMutationTypes.GetFilmByIdRequest,
});

export const getFilmByIdRequestFailureMutationPayload = (): GetFilmByIdRequestFailureMutationPayload => ({
    type: FilmMutationTypes.GetFilmByIdRequestFailure,
});

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

export const backToSearchMutationPayload = (): BackToSearchMutationPayload => ({
    type: FilmMutationTypes.BackToSearch,
});

/**
 *  Mutations
 */
export const mutations: MutationTree<FilmsState> & Mutations = {
    [FilmMutationTypes.GetFilmsRequest]: (state: FilmsState): void => {
        state.isLoadingItems = true;
    },
    [FilmMutationTypes.GetFilmsRequestSuccess]: (
        state: FilmsState,
        payload: GetFilmsRequestSuccessMutationPayload
    ): void => {
        state.isLoadingItems = false;
        state.items = payload.value.items;
        state.length = payload.value.length;
    },
    [FilmMutationTypes.GetFilmsRequestFailure]: (state: FilmsState): void => {
        state.isLoadingItems = false;
    },
    [FilmMutationTypes.GetFilmByIdRequest]: (state: FilmsState): void => {
        state.isLoadingSelectedItem = true;
    },
    [FilmMutationTypes.GetFilmByIdRequestSuccess]: (
        state: FilmsState,
        payload: GetFilmByIdRequestSuccessMutationPayload
    ): void => {
        state.isLoadingSelectedItem = false;
        state.selectedItem = payload.value;
    },
    [FilmMutationTypes.GetFilmByIdRequestFailure]: (state: FilmsState): void => {
        state.isLoadingSelectedItem = false;
    },
    [FilmMutationTypes.ChangeSearchTerm]: (state: FilmsState, payload: ChangeSearchTermMutationPayload): void => {
        state.searchTerm = payload.value;
    },
    [FilmMutationTypes.ChangeSearchBy]: (state: FilmsState, payload: ChangeSearchByMutationPayload): void => {
        state.searchBy = payload.value;
    },
    [FilmMutationTypes.ChangeSortBy]: (state: FilmsState, payload: ChangeSortByMutationPayload): void => {
        state.sortBy = payload.value;
    },
    [FilmMutationTypes.BackToSearch]: (state: FilmsState): void => {
        state.selectedItem = null;
    },
};

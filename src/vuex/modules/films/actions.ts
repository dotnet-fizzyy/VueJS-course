import FilmsApi from '@/api/films';
import { ActionTree } from 'vuex';
import { Actions, BaseAction } from '@/vuex/store/state';
import { CollectionResponse, Film } from '@/types/films';
import { FilmGetterProps } from '@/vuex/modules/films/getters';
import { FilmsState } from '@/vuex/modules/films/state';
import { SearchByOptionNames, SortByOptionsNames } from '@/enums/search';
import {
    backToSearchMutationPayload,
    changeSearchByMutationPayload,
    changeSearchTermMutationPayload,
    changeSortByMutationPayload,
    getFilmByIdRequestFailureMutationPayload,
    getFilmByIdRequestMutationPayload,
    getFilmByIdRequestSuccessMutationPayload,
    getFilmsRequestFailureMutationPayload,
    getFilmsRequestMutationPayload,
    getFilmsRequestSuccessMutationPayload,
} from '@/vuex/modules/films/mutations';
import { getFilmModuleType } from '@/vuex/store/utils';

/**
 *  Actions Types
 */
export enum FilmActionTypes {
    GetFilmsRequest = 'GET_FILMS_REQUEST',
    GetFilmByIdRequest = 'GET_FILM_BY_ID_REQUEST',
    ChangeSearchTerm = 'CHANGE_SEARCH_TERM',
    ChangeSortBy = 'CHANGE_SORT_BY',
    ChangeSearchBy = 'CHANGE_SEARCH_BY',
    BackToSearch = 'BACK_TO_SEARCH',
}

/**
 *  Payload Interfaces
 */
export interface GetFilmsRequestActionPayload extends BaseAction {}

export interface GetFilmByIdRequestActionPayload extends BaseAction {
    value: string;
}

export interface ChangeSearchTermActionPayload extends BaseAction {
    value: string;
}

export interface ChangeSortByActionPayload extends BaseAction {
    value: SortByOptionsNames;
}

export interface ChangeSearchByActionPayload extends BaseAction {
    value: SearchByOptionNames;
}

export interface BackToSearchActionPayload extends BaseAction {}

/**
 *  Payloads
 */
export const getFilmsRequestActionPayload = (): GetFilmsRequestActionPayload => ({
    type: getFilmModuleType(FilmActionTypes.GetFilmsRequest),
});

export const getFilmByIdRequestActionPayload = (value: string): GetFilmByIdRequestActionPayload => ({
    type: getFilmModuleType(FilmActionTypes.GetFilmByIdRequest),
    value,
});

export const changeSearchTermActionPayload = (value: string): ChangeSearchTermActionPayload => ({
    type: getFilmModuleType(FilmActionTypes.ChangeSearchTerm),
    value,
});

export const changeSortByActionPayload = (value: SortByOptionsNames): ChangeSortByActionPayload => ({
    type: getFilmModuleType(FilmActionTypes.ChangeSortBy),
    value,
});

export const changeSearchByActionPayload = (value: SearchByOptionNames): ChangeSearchByActionPayload => ({
    type: getFilmModuleType(FilmActionTypes.ChangeSearchBy),
    value,
});

export const backToSearchActionPayload = (): BackToSearchActionPayload => ({
    type: getFilmModuleType(FilmActionTypes.BackToSearch),
});

/**
 *  Actions
 */
export const actions: ActionTree<FilmsState, FilmsState> & Actions = {
    [FilmActionTypes.GetFilmsRequest]: async ({ getters, commit }): Promise<void> => {
        try {
            const searchTerm: string = getters[FilmGetterProps.SearchTerm];
            const searchByOption: SearchByOptionNames = getters[FilmGetterProps.SearchBy];
            const sortByOption: SortByOptionsNames = getters[FilmGetterProps.SortBy];

            commit(getFilmsRequestMutationPayload());

            const { data, limit }: CollectionResponse<Film> = await FilmsApi.getFilms(
                searchTerm,
                searchByOption,
                sortByOption
            );

            commit(getFilmsRequestSuccessMutationPayload(data, limit));
        } catch (e) {
            console.error(e);

            commit(getFilmsRequestFailureMutationPayload());
        }
    },
    [FilmActionTypes.GetFilmByIdRequest]: async (state, payload: GetFilmByIdRequestActionPayload): Promise<void> => {
        try {
            state.commit(getFilmByIdRequestMutationPayload());

            const film: Film = await FilmsApi.getFilmById(payload.value);

            state.commit(getFilmByIdRequestSuccessMutationPayload(film));
        } catch (e) {
            console.error(e);

            state.commit(getFilmByIdRequestFailureMutationPayload());
        }
    },
    [FilmActionTypes.ChangeSearchTerm]: (state, payload: ChangeSearchTermActionPayload): void => {
        state.commit(changeSearchTermMutationPayload(payload.value));
    },
    [FilmActionTypes.ChangeSortBy]: (state, payload: ChangeSortByActionPayload): void => {
        state.commit(changeSortByMutationPayload(payload.value));
    },
    [FilmActionTypes.ChangeSearchBy]: (state, payload: ChangeSearchByActionPayload): void => {
        state.commit(changeSearchByMutationPayload(payload.value));
    },
    [FilmActionTypes.BackToSearch]: (state): void => {
        state.commit(backToSearchMutationPayload());
    },
};

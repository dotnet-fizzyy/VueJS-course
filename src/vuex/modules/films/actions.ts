import FilmsApi from '@/api/films';
import { ActionTree } from 'vuex';
import { Actions, BaseAction } from '@/vuex/store/state';
import { CollectionResponse, Film } from '@/types/films';
import { FilmGetterProps } from '@/vuex/modules/films/getters';
import { FilmsState } from '@/vuex/modules/films/state';
import { SearchByOptionNames, SortByOptionsNames } from '@/enums/search';
import {
    changeSearchByMutationPayload,
    changeSearchTermMutationPayload,
    changeSortByMutationPayload,
    getFilmByIdRequestFailureMutationPayload,
    getFilmByIdRequestMutationPayload,
    getFilmByIdRequestSuccessMutationPayload,
    getFilmsRequestFailureMutationPayload,
    getFilmsRequestMutationPayload,
    getFilmsRequestSuccessMutationPayload,
    setItemsMutationPayload,
    setSelectedItemMutationPayload,
} from '@/vuex/modules/films/mutations';
import { getFilmModuleType } from '@/vuex/store/utils';
import { getMockedFilmsFromJson } from '@/mocks/mockFilms';

/**
 *  Actions Types
 */
export enum FilmActionTypes {
    GetFilmsRequest = 'GET_FILMS_REQUEST',
    GetFilmByIdRequest = 'GET_FILM_BY_ID_REQUEST',
    ChangeSearchTerm = 'CHANGE_SEARCH_TERM',
    ChangeSortBy = 'CHANGE_SORT_BY',
    ChangeSearchBy = 'CHANGE_SEARCH_BY',
    SetSelectedFilm = 'SET_SELECTED_FILM',
    SearchFilms = 'SEARCH_FILMS',
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

export interface SetSelectedFilmActionPayload extends BaseAction {
    value: string;
}

export interface SearchFilmsActionPayload extends BaseAction {}

/**
 *  Payloads
 */
export const getFilmsRequestActionPayload = (): GetFilmsRequestActionPayload => ({
    type: getFilmModuleType(FilmActionTypes.GetFilmsRequest),
});

export const changeSearchActionPayload = (value: string): ChangeSearchTermActionPayload => ({
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

export const setSelectedFilmActionPayload = (value: string): SetSelectedFilmActionPayload => ({
    type: getFilmModuleType(FilmActionTypes.SetSelectedFilm),
    value,
});

export const searchFilmsActionPayload = (): SearchFilmsActionPayload => ({
    type: getFilmModuleType(FilmActionTypes.SearchFilms),
});

/**
 *  Actions
 */
export const actions: ActionTree<FilmsState, FilmsState> & Actions = {
    [FilmActionTypes.GetFilmsRequest]: async (state): Promise<void> => {
        try {
            state.commit(getFilmsRequestMutationPayload());

            const { data, limit }: CollectionResponse<Film> = await FilmsApi.getFilms();

            state.commit(getFilmsRequestSuccessMutationPayload(data, limit));
        } catch (e) {
            console.error(e);

            state.commit(getFilmsRequestFailureMutationPayload());
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
    [FilmActionTypes.SetSelectedFilm]: (state, payload: SetSelectedFilmActionPayload): void => {
        state.commit(setSelectedItemMutationPayload(payload.value));
    },
    [FilmActionTypes.SearchFilms]: ({ getters, commit }): void => {
        const searchTerm: string = getters[FilmGetterProps.SearchTerm];
        const searchByOption: SearchByOptionNames = getters[FilmGetterProps.SearchBy];
        const sortByOption: SortByOptionsNames = getters[FilmGetterProps.SortBy];

        let responseItems = getMockedFilmsFromJson();

        switch (searchByOption) {
            case SearchByOptionNames.Genre:
                responseItems = searchTerm ? responseItems.filter(x => x.genres.includes(searchTerm)) : responseItems;
                break;
            case SearchByOptionNames.Title:
                responseItems = searchTerm ? responseItems.filter(x => x.name.includes(searchTerm)) : responseItems;
                break;
            default:
                break;
        }

        switch (sortByOption) {
            case SortByOptionsNames.Rating:
                responseItems = responseItems.sort((a, b) => {
                    if (a.rating > b.rating) {
                        return 1;
                    }

                    if (a.rating < b.rating) {
                        return -1;
                    }

                    return 0;
                });
                break;
            case SortByOptionsNames.ReleaseDate:
                responseItems = responseItems.sort((a, b) => {
                    if (a.releaseYear > b.releaseYear) {
                        return 1;
                    }

                    if (a.releaseYear < b.releaseYear) {
                        return -1;
                    }

                    return 0;
                });
                break;
            default:
                break;
        }

        commit(setItemsMutationPayload(responseItems));
    },
};

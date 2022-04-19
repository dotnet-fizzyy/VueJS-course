import { FilmFullDescription, FilmPreview } from '@/types/films';
import { FilmsModuleName } from '@/constants/vuex';
import { FilmsState } from '@/vuex/modules/films/state';
import { GetterTree } from 'vuex';
import { getModuleKey } from '@/utils';
import { mapFilmToFilmPreview } from '@/utils/films';

/**
 *  Getter Props
 */
export enum FilmGetterProps {
    FilmsPreviews = 'filmsPreviews',
    AvailableCount = 'availableCount',
    GetFilmFullDescriptionById = 'getFilmFullDescriptionById',
    SearchTerm = 'searchTerm',
    searchBy = 'searchBy',
    SortBy = 'sortBy',
}

/**
 *  Getter Module Props
 */
export const FilmsGetterModuleProps = {
    [FilmGetterProps.FilmsPreviews]: getModuleKey(FilmsModuleName, FilmGetterProps.FilmsPreviews),
    [FilmGetterProps.AvailableCount]: getModuleKey(FilmsModuleName, FilmGetterProps.AvailableCount),
    [FilmGetterProps.GetFilmFullDescriptionById]: getModuleKey(
        FilmsModuleName,
        FilmGetterProps.GetFilmFullDescriptionById
    ),
    [FilmGetterProps.SearchTerm]: getModuleKey(FilmsModuleName, FilmGetterProps.SearchTerm),
};

/**
 *  Getters
 */
export interface FilmsGetters {
    [FilmGetterProps.FilmsPreviews]: (state: FilmsState) => FilmPreview[];
    [FilmGetterProps.AvailableCount]: (state: FilmsState) => number;
    [FilmGetterProps.GetFilmFullDescriptionById]: (state: FilmsState) => (id: string) => FilmFullDescription;
}

export const getters: GetterTree<FilmsState, FilmsState> & FilmsGetters = {
    [FilmGetterProps.FilmsPreviews]: (state: FilmsState): FilmPreview[] => {
        return state.items.map(mapFilmToFilmPreview);
    },
    [FilmGetterProps.AvailableCount]: (state: FilmsState): number => {
        return state.length;
    },
    [FilmGetterProps.GetFilmFullDescriptionById]:
        (state: FilmsState) =>
        (id: string): FilmFullDescription => {
            return state.items.find(film => film.id === id);
        },
    [FilmGetterProps.SearchTerm]: (state: FilmsState): string => {
        return state.searchTerm;
    },
    [FilmGetterProps.searchBy]: (state: FilmsState): string => {
        return state.searchBy;
    },
    [FilmGetterProps.SortBy]: (state: FilmsState): string => {
        return state.sortBy;
    },
};

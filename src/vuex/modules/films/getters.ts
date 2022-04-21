import { FilmFullDescription, FilmPreview } from '@/types/films';
import { FilmsState } from '@/vuex/modules/films/state';
import { GetterTree } from 'vuex';
import { mapFilmToFilmPreview } from '@/utils/films';

/**
 *  Getter Props
 */
export enum FilmGetterProps {
    FilmsPreviews = 'filmsPreviews',
    AvailableCount = 'availableCount',
    GetSelectedFilmWithFullDescription = 'getSelectedFilmWithFullDescription',
    SearchTerm = 'searchTerm',
    SearchBy = 'searchBy',
    SortBy = 'sortBy',
}

/**
 *  Getters
 */
export const getters: GetterTree<FilmsState, FilmsState> = {
    [FilmGetterProps.FilmsPreviews]: (state: FilmsState): FilmPreview[] => {
        return state.items.map(mapFilmToFilmPreview);
    },
    [FilmGetterProps.AvailableCount]: (state: FilmsState): number => {
        return state.length;
    },
    [FilmGetterProps.GetSelectedFilmWithFullDescription]: (state: FilmsState): FilmFullDescription => {
        return state.items.find(film => film.id === state.selectedItem);
    },
    [FilmGetterProps.SearchTerm]: (state: FilmsState): string => {
        return state.searchTerm;
    },
    [FilmGetterProps.SearchBy]: (state: FilmsState): string => {
        return state.searchBy;
    },
    [FilmGetterProps.SortBy]: (state: FilmsState): string => {
        return state.sortBy;
    },
};

import { Film, FilmFullDescription, FilmPreview } from '@/types/films';
import { FilmGetterKeys } from '@/enums/vuex';

export interface FilmsState {
    items: Film[];
    length: number;
}

export interface FilmsGetters {
    [FilmGetterKeys.FilmsPreviews]: (state: FilmsState) => FilmPreview[];
    [FilmGetterKeys.AvailableCount]: (state: FilmsState) => number;
    [FilmGetterKeys.GetFilmFullDescriptionById]: (state: FilmsState) => (id: string) => FilmFullDescription;
}

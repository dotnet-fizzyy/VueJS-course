import { Film, FilmPreview, FilmResponse } from '@/types/films';
import { castToString, getYearFromStringDate } from '@/utils/index';

export const mapFilmToFilmPreview = (film: Film): FilmPreview => ({
    id: film.id,
    name: film.name,
    releaseYear: film.releaseYear,
    posterUrl: film.posterUrl,
    posterAlt: film.posterAlt,
    shortDescription: film.shortDescription,
});

export const mapFilmApiResponseToFilm = (filmRes: FilmResponse): Film => ({
    id: castToString(filmRes.id),
    name: filmRes.title,
    releaseYear: getYearFromStringDate(filmRes.release_date),
    posterUrl: filmRes.poster_path,
    posterAlt: filmRes.title.toLowerCase(),
    shortDescription: filmRes.label ?? 'Unspecified',
    fullDescription: filmRes.overview ?? 'Unspecified',
    rating: filmRes.vote_average ?? 0,
    runtime: filmRes.runtime ?? 0,
    genres: filmRes.genres,
});

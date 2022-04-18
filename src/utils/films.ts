import { Film, FilmPreview } from '@/types/films';
import { castToString, getYearFromStringDate } from '@/utils/index';

export const mapFilmToFilmPreview = (film: Film): FilmPreview => ({
    id: film.id,
    name: film.name,
    releaseYear: film.releaseYear,
    posterUrl: film.posterUrl,
    posterAlt: film.posterAlt,
    shortDescription: film.shortDescription,
});

export const mapFilmResponseToFilm = (filmRes): Film => ({
    id: castToString(filmRes.id),
    name: filmRes.title,
    releaseYear: getYearFromStringDate(filmRes.release_date),
    posterUrl: filmRes.poster_path,
    posterAlt: filmRes.poster_alt ?? filmRes.title.toLowerCase(),
    shortDescription: filmRes.label,
    fullDescription: filmRes.overview ?? '',
    rating: filmRes.vote_average ?? 0,
    runtime: filmRes.runtime ?? 0,
    genres: filmRes.genres,
});

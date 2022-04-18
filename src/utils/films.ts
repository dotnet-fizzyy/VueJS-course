import { Film, FilmPreview } from '@/types/films';

export const mapFilmToFilmPreview = (film: Film): FilmPreview => ({
    id: film.id,
    name: film.name,
    releaseYear: film.releaseYear,
    posterUrl: film.posterUrl,
    posterAlt: film.posterAlt,
    shortDescription: film.shortDescription,
});

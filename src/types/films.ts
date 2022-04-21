export interface Film {
    id: string;
    name: string;
    releaseYear: number;
    posterUrl?: string;
    posterAlt?: string;
    shortDescription: string;
    rating: number;
    runtime: number;
    fullDescription: string;
    genres: string[];
}

export interface FilmPreview extends Omit<Film, 'rating' | 'runtime' | 'fullDescription' | 'genres'> {}

export interface FilmFullDescription extends Film {}

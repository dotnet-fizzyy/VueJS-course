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
}

export interface FilmPreview extends Omit<Film, 'rating' | 'runtime' | 'fullDescription'> {}

export interface FilmFullDescription extends Film {}

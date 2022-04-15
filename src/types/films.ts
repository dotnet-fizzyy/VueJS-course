export interface Film {
    id: string;
    name: string;
    releaseYear: number;
    posterUrl?: string;
    posterAlt?: string;
    shortDescription: string;
}

export interface FilmPreview extends Film {}

export interface FilmFullDescription extends Film {
    rating: number;
    runtime: number;
    fullDescription: string;
}

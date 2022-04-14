export interface Film {
    id: string;
    name: string;
    releaseYear: number;
    posterUrl?: string;
    posterAlt?: string;
    shortDescription: string;
}

export interface FilmShortDescription extends Film {}

export interface FilmFullDescription extends Film {
    rating: number;
    runtime: number;
    fullDescription: string;
}

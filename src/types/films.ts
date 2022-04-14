export interface Film {
    id: string;
    name: string;
    posterUrl?: string;
    posterAlt?: string;
    shortDescription: string;
    releaseYear: number;
}

export interface FilmShortDescription extends Film {}

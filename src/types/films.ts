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

export interface FilmResponse {
    id: number;
    title: string;
    tagline: string;
    vote_average: number;
    vote_count: number;
    release_date: string;
    poster_path: string;
    label: string;
    overview: string;
    budget: number;
    revenue: number;
    runtime: number;
    genres: string[];
}

export interface CollectionResponse<T> {
    data: T[];
    limit: number;
    offset: number;
    total: number;
}

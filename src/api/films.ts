import Vue from 'vue';
import VueResource from 'vue-resource';
import { CollectionResponse, Film, FilmResponse } from '@/types/films';
import { mapFilmApiResponseToFilm } from '@/utils/films';

export default class FilmsApi {
    private static readonly Headers: Record<string, string> = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    };

    public static async getFilms(): Promise<CollectionResponse<Film>> {
        const response: VueResource.HttpResponse = await Vue.http.get(`${FilmsApi.getBaseUrl()}/movies`, {
            headers: FilmsApi.Headers,
        });
        const responseBody: CollectionResponse<FilmResponse> = await response.json();

        return {
            total: responseBody.total,
            limit: responseBody.limit,
            offset: responseBody.offset,
            data: responseBody.data.map(mapFilmApiResponseToFilm),
        } as CollectionResponse<Film>;
    }

    public static async getFilmById(id: string): Promise<Film> {
        const response: VueResource.HttpResponse = await Vue.http.get(`${FilmsApi.getBaseUrl()}/movies/${id}`, {
            headers: FilmsApi.Headers,
        });
        const responseBody: FilmResponse = await response.json();

        return mapFilmApiResponseToFilm(responseBody) as Film;
    }

    private static getBaseUrl(): string {
        const baseUrl = Vue.http?.options?.root;

        if (!baseUrl) {
            throw new Error('Base URL for communicating with API is not defined');
        }

        return baseUrl;
    }
}

import { AppSettings } from '@/types/appSettings';
import { CollectionResponse, FilmResponse } from '@/types/films';
import { getAppSettings } from '@/utils/appSettings';
import { getMockedFilmsFromJson } from '@/mocks/mockFilms';

const mockedFilms: FilmResponse[] = getMockedFilmsFromJson();
const appSettings: AppSettings = getAppSettings();

const GetFilmsResponse = {
    url: `${appSettings.apiUrl}/movies?sortBy=release_date&sortOrder=asc`,
    method: 'GET',
    response: {
        total: 1000,
        offset: 0,
        limit: mockedFilms.length,
        data: mockedFilms,
    } as CollectionResponse<FilmResponse>,
};

const GetFilmByIdResponse = {
    url: `${appSettings.apiUrl}/movies/${mockedFilms[0].id}`,
    method: 'GET',
    response: mockedFilms[0],
};

export default [GetFilmsResponse, GetFilmByIdResponse];

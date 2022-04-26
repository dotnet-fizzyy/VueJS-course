import { AppSettings } from '@/types/appSettings';

let appSettings: undefined | AppSettings = undefined;

export const getAppSettings = (): AppSettings => {
    if (!appSettings) {
        appSettings = {
            isDevelopmentMode: process.env.NODE_ENV === 'development',
            defaultPosterUrl: process.env.VUE_APP_DEFAULT_POSTER_URL_PUBLIC,
            defaultPosterAlt: process.env.VUE_APP_DEFAULT_POSTER_ALT,
            apiUrl: process.env.VUE_APP_API_URL,
        };
    }

    return appSettings;
};

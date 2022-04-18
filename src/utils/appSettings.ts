import { AppSettings } from '@/types/appSettings';

let appSettings: undefined | AppSettings = undefined;

export const getAppSettings = (): AppSettings => {
    if (!appSettings) {
        appSettings = {
            defaultPosterUrl: process.env.VUE_APP_DEFAULT_POSTER_URL,
            defaultPosterAlt: process.env.VUE_APP_DEFAULT_POSTER_ALT,
            isDevelopmentMode: process.env.NODE_ENV === 'development',
        };
    }

    return appSettings;
};

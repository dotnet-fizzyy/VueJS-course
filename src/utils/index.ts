import { FilmGetterKeys } from '@/enums/vuex';

export const castToString = (value: unknown): string => value?.toString() ?? '';

export const castNumberToStringWithPrecision = (value: number, digits: number = 1): string =>
    value.toLocaleString('en-US', {
        useGrouping: false,
        minimumFractionDigits: digits,
        maximumFractionDigits: digits,
    });

export const castNumberToStringWithRound = (value: number, direction: 'up' | 'down'): string => {
    switch (direction) {
        case 'up':
            return Math.ceil(value).toString();
        case 'down':
            return Math.floor(value).toString();
        default:
            return value.toString();
    }
};

export const getGetterKey = (module: string, key: FilmGetterKeys): string => `${module}/${key}`;

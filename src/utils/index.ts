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

export const getModuleKey = (module: string, key: string): string => `${module}/${key}`;

export const getYearFromStringDate = (value: string): number => {
    if (!value) {
        return 0;
    }

    const date = new Date(value);
    if (!date) {
        return 0;
    }

    return date.getFullYear();
};

export const delay = (milliseconds: number): Promise<void> => new Promise<void>(r => setTimeout(r, milliseconds));

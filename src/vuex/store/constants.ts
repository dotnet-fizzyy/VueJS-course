import { getModuleKey } from '@/utils';

export const FilmsModuleName: string = 'films';

export const getFilmModuleType = (key: string) => getModuleKey(FilmsModuleName, key);

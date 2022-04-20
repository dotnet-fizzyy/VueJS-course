import { FilmsModuleName } from '@/vuex/store/constants';
import { getModuleKey } from '@/utils';

export const getFilmModuleType = (key: string) => getModuleKey(FilmsModuleName, key);

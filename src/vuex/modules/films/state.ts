import { BaseState } from '@/vuex/state';
import { Film } from '@/types/films';
import { SearchOptionNames, SortOptionsNames } from '@/enums/search';
import { actions } from '@/vuex/modules/films/actions';
import { getMockedFilmsFromJson } from '@/mocks/mockFilms';
import { getters } from '@/vuex/modules/films/getters';
import { mutations } from '@/vuex/modules/films/mutations';

export interface FilmsState extends BaseState {
    items: Film[];
    length: number;
    searchTerm: string;
    searchBy: string;
    sortBy: string;
}

const mockedFilms = getMockedFilmsFromJson();

const state: FilmsState = {
    items: mockedFilms,
    length: mockedFilms.length,
    searchTerm: '',
    searchBy: SearchOptionNames.Title,
    sortBy: SortOptionsNames.ReleaseDate,
};

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters,
};

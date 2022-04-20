import { Film } from '@/types/films';
import { SearchByOptionNames, SortByOptionsNames } from '@/enums/search';
import { actions } from '@/vuex/modules/films/actions';
import { getMockedFilmsFromJson } from '@/mocks/mockFilms';
import { getters } from '@/vuex/modules/films/getters';
import { mutations } from '@/vuex/modules/films/mutations';

export interface FilmsState {
    selectedItem: string;
    items: Film[];
    length: number;
    searchTerm: string;
    searchBy: SearchByOptionNames;
    sortBy: SortByOptionsNames;
}

const mockedFilms = getMockedFilmsFromJson();

const state: FilmsState = {
    selectedItem: '',
    items: mockedFilms,
    length: mockedFilms.length,
    searchTerm: '',
    searchBy: SearchByOptionNames.Title,
    sortBy: SortByOptionsNames.ReleaseDate,
};

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters,
};

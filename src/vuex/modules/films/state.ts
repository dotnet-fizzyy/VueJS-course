import { Film } from '@/types/films';
import { SearchByOptionNames, SortByOptionsNames } from '@/enums/search';
import { actions } from '@/vuex/modules/films/actions';
import { getters } from '@/vuex/modules/films/getters';
import { mutations } from '@/vuex/modules/films/mutations';

export interface FilmsState {
    isLoadingItems: boolean;
    items: Film[];
    length: number;
    isLoadingSelectedItem: boolean;
    selectedItem: Film | null;
    searchTerm: string;
    searchBy: SearchByOptionNames;
    sortBy: SortByOptionsNames;
}

const state: FilmsState = {
    isLoadingItems: false,
    items: [],
    length: 0,
    isLoadingSelectedItem: false,
    selectedItem: null,
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

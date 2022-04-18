import { ActionTree, GetterTree, MutationTree } from 'vuex';
import { Actions, FilmsGetters, FilmsState, Mutations } from '@/vuex/state';
import { FilmFullDescription, FilmPreview } from '@/types/films';
import { fullFilmsDescription } from '@/mocks/mockFilms';
import { mapFilmToFilmPreview } from '@/utils/films';

const state: FilmsState = {
    items: fullFilmsDescription,
    length: fullFilmsDescription.length,
};

const getters: GetterTree<FilmsState, FilmsState> & FilmsGetters = {
    filmsPreview: (state: FilmsState): FilmPreview[] => {
        return state.items.map(mapFilmToFilmPreview);
    },
    count: (state: FilmsState): number => {
        return state.length;
    },
    fullDescriptionFilmById:
        (state: FilmsState) =>
        (id: string): FilmFullDescription => {
            return state.items.find(film => film.id === id);
        },
};

const actions: ActionTree<FilmsState, FilmsState> & Actions = {};

const mutations: MutationTree<FilmsState> & Mutations = {};

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters,
};

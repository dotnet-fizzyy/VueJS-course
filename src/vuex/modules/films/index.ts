import { ActionTree, GetterTree, MutationTree } from 'vuex';
import { Actions, Mutations } from '@/vuex/state';
import { FilmFullDescription, FilmPreview } from '@/types/films';
import { FilmGetterKeys } from '@/enums/vuex';
import { FilmsGetters, FilmsState } from '@/vuex/modules/films/types';
import { getMockedFilmsFromJson } from '@/mocks/mockFilms';
import { mapFilmToFilmPreview } from '@/utils/films';

const mockedFilms = getMockedFilmsFromJson();

const state: FilmsState = {
    items: mockedFilms,
    length: mockedFilms.length,
};

const getters: GetterTree<FilmsState, FilmsState> & FilmsGetters = {
    [FilmGetterKeys.FilmsPreviews]: (state: FilmsState): FilmPreview[] => {
        return state.items.map(mapFilmToFilmPreview);
    },
    [FilmGetterKeys.AvailableCount]: (state: FilmsState): number => {
        return state.length;
    },
    [FilmGetterKeys.GetFilmFullDescriptionById]:
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

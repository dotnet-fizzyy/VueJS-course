import { BaseAction, Mutations } from '@/vuex/state';
import { FilmsState } from '@/vuex/modules/films/state';
import { MutationTree } from 'vuex';

/**
 *  Mutation Types
 */
export enum FilmMutationTypes {
    ChangeSearch = 'CHANGE_SEARCH',
}

/**
 *  Payload Interfaces
 */
export interface ChangeFilmSearchMutationPayload extends BaseAction {
    value: string;
}

/**
 *  Payloads
 */
export const changeFilmSearchMutationPayload = (value: string): ChangeFilmSearchMutationPayload => ({
    type: FilmMutationTypes.ChangeSearch,
    value: value,
});

/**
 *  Mutations
 */
export interface FilmMutations extends Mutations {
    [FilmMutationTypes.ChangeSearch]: (state: FilmsState, payload: ChangeFilmSearchMutationPayload) => void;
}

export const mutations: MutationTree<FilmsState> & FilmMutations = {
    [FilmMutationTypes.ChangeSearch]: (state: FilmsState, payload: ChangeFilmSearchMutationPayload): void => {
        state.searchTerm = payload.value;
    },
};

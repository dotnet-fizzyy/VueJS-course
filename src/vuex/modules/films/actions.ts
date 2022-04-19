import { ActionTree } from 'vuex';
import { Actions, BaseAction } from '@/vuex/store/state';
import { FilmsState } from '@/vuex/modules/films/state';
import { changeFilmSearchMutationPayload } from '@/vuex/modules/films/mutations';
import { getFilmGetter } from '@/vuex/store';

/**
 *  Actions Types
 */
export enum FilmActionTypes {
    ChangeSearch = 'ChangeSearch',
}

/**
 *  Payload Interfaces
 */
export interface ChangeSearchActionPayload extends BaseAction {
    value: string;
}

/**
 *  Payloads
 */
export const changeSearchActionPayload = (value: string): ChangeSearchActionPayload => ({
    type: getFilmGetter(FilmActionTypes.ChangeSearch),
    value,
});

/**
 *  Actions
 */
export interface FilmActions extends Actions {
    [FilmActionTypes.ChangeSearch]: (state, payload: ChangeSearchActionPayload) => void;
}

export const actions: ActionTree<FilmsState, FilmsState> & FilmActions = {
    [FilmActionTypes.ChangeSearch]: (state, payload: ChangeSearchActionPayload): void => {
        state.commit(changeFilmSearchMutationPayload(payload.value));
    },
};

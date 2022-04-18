import { ActionContext, CommitOptions, DispatchOptions, Store as VuexStore } from 'vuex';
import { FilmsGetters, FilmsState } from '@/vuex/modules/films/types';

export interface State {
    films: FilmsState;
}

export interface Mutations<S = State> {
    [key: string]: (state: S, payload: unknown) => void;
}

type AugmentedActionContext = {
    commit<K extends keyof Mutations>(key: K, payload: Parameters<Mutations[K]>[1]): ReturnType<Mutations[K]>;
} & Omit<ActionContext<State, State>, 'commit'>;

export interface Actions {
    [key: string]: ({ commit }: AugmentedActionContext, payload: unknown) => Promise<void> | void;
}

type Getters = FilmsGetters;

export type Store = Omit<VuexStore<State>, 'getters' | 'commit' | 'dispatch'> & {
    commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
        key: K,
        payload: P,
        options?: CommitOptions
    ): ReturnType<Mutations[K]>;
} & {
    dispatch<K extends keyof Actions>(
        key: K,
        payload: Parameters<Actions[K]>[1],
        options?: DispatchOptions
    ): ReturnType<Actions[K]>;
} & {
    getters: {
        [K in keyof Getters]: ReturnType<Getters[K]>;
    };
};

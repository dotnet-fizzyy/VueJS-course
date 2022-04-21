import { ActionContext, CommitOptions, DispatchOptions, Store as VuexStore } from 'vuex';
import { FilmsState } from '@/vuex/modules/films/state';

export interface BaseAction {
    type: string;
}

export interface State {
    films: FilmsState;
}

export interface Mutations {
    [key: string]: (state: unknown, payload: unknown) => void;
}

type AugmentedActionContext = {
    commit<K extends keyof Mutations>(BaseAction): ReturnType<Mutations[K]>;
} & Omit<ActionContext<unknown, unknown>, 'commit'>;

export interface Actions {
    [key: string]: ({ commit }: AugmentedActionContext, payload: unknown) => Promise<void> | void;
}

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
        [K in keyof Record<string, unknown>]: ReturnType<Record<string, any>[K]>;
    };
};

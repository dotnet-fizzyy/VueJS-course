<template>
    <div data-aqa-search-panel :class="$style.root">
        <span :class="$style['main-label']">Find your movie</span>

        <div :class="$style['search-container']">
            <div :class="$style['input-container']">
                <app-input
                    :value="searchTerm"
                    placeholder="Search"
                    :font-size="inputFontSize"
                    @change="changeSearchQuery"
                />
            </div>
            <div :class="$style['search-button-container']">
                <primary-button :font-size="inputFontSize" @click="search">Search</primary-button>
            </div>
        </div>

        <div :class="$style['options-container']">
            <button-group
                label="Search By"
                :options="filterOptions"
                :selected-option="searchByOption"
                @select-option="changeSearchByOption"
            />
        </div>
    </div>
</template>

<script lang="ts">
import AppInput from '@/components/common/AppInput.vue';
import ButtonGroup from '@/components/common/ButtonGroup.vue';
import PrimaryButton from '@/components/common/PrimaryButton.vue';
import Vue from 'vue';
import { FilmGetterProps } from '@/vuex/modules/films/getters';
import { SearchByOptionNames } from '@/enums/search';
import { SearchByOptions } from '@/constants/search';
import { changeSearchByActionPayload, changeSearchTermActionPayload } from '@/vuex/modules/films/actions';
import { getFilmModuleType } from '@/vuex/store/utils';
import { mapGetters } from 'vuex';

export interface SearchPanelProps {
    search: () => void;
}

export default Vue.extend({
    name: 'SearchPanel',
    components: { AppInput, PrimaryButton, ButtonGroup },
    data() {
        return {
            filterOptions: SearchByOptions,
            inputFontSize: 24,
        };
    },
    computed: {
        ...mapGetters({
            searchTerm: getFilmModuleType(FilmGetterProps.SearchTerm),
            searchByOption: getFilmModuleType(FilmGetterProps.SearchBy),
        }),
    },
    methods: {
        search(): void {
            this.$emit('search');
        },
        changeSearchByOption(option: string): void {
            this.$store.dispatch(changeSearchByActionPayload(option as SearchByOptionNames));
        },
        changeSearchQuery(value: string): void {
            this.$store.dispatch(changeSearchTermActionPayload(value));
        },
    },
});
</script>

<style lang="scss" module scoped>
@import '../../styles/fonts';

.root {
    width: 100%;
    display: flex;
    flex-direction: column;
}

.main-label {
    @extend .font;

    text-transform: uppercase;
    font-size: 30px;
    color: $white;
    letter-spacing: 4px;
}

.search-container {
    margin-top: 50px;
    height: 60px;
    display: flex;
    flex-direction: row;
}

.input-container {
    flex-grow: 1;
}

.search-button-container {
    margin-left: 15px;
    flex-basis: 240px;
}

.options-container {
    margin-top: 15px;
    width: fit-content;
}
</style>

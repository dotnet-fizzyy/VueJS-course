<template>
    <search-panel @search="search" />
</template>

<script lang="ts">
import SearchPanel from '@/components/search/SearchPanel.vue';
import Vue from 'vue';
import { FilmGetterProps } from '@/vuex/modules/films/getters';
import { SearchParams } from '@/types/search';
import { SearchQueryParams } from '@/enums/search';
import { areSearchParamsEqual, createSearchUrl, getSearchParams } from '@/utils/search';
import { getFilmModuleType } from '@/vuex/store/utils';
import { getFilmsRequestActionPayload } from '@/vuex/modules/films/actions';
import { mapGetters } from 'vuex';

export default Vue.extend({
    name: 'StartPageSearchPanel',
    components: { SearchPanel },
    computed: {
        ...mapGetters({
            searchTerm: getFilmModuleType(FilmGetterProps.SearchTerm),
            searchByOption: getFilmModuleType(FilmGetterProps.SearchBy),
            sortByOption: getFilmModuleType(FilmGetterProps.SortBy),
        }),
    },
    methods: {
        search(): void {
            const searchQueryParams: SearchParams = getSearchParams(this.$route);

            if (
                !areSearchParamsEqual(
                    searchQueryParams[SearchQueryParams.SearchTerm],
                    searchQueryParams[SearchQueryParams.SortByOption],
                    searchQueryParams[SearchQueryParams.SearchByOption],
                    this.searchTerm,
                    this.sortByOption,
                    this.searchByOption
                )
            ) {
                this.$router.push(
                    createSearchUrl(this.$route.path, this.searchTerm, this.searchByOption, this.sortByOption)
                );
            }

            this.$store.dispatch(getFilmsRequestActionPayload());
        },
    },
});
</script>

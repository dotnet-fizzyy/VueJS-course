<template>
    <div :class="$style.root">
        <span data-aqa-available-items-count :class="$style.title">{{ availableItemsCount }} movies found</span>

        <button-group
            label="Sort By"
            :options="options"
            :selected-option="selectedOption"
            @select-option="selectOption"
        />
    </div>
</template>

<script lang="ts">
import ButtonGroup from '@/components/common/ButtonGroup.vue';
import Vue from 'vue';
import { FilmGetterProps } from '@/vuex/modules/films/getters';
import { SortByOptions } from '@/constants/search';
import { SortByOptionsNames } from '@/enums/search';
import { changeSortByActionPayload } from '@/vuex/modules/films/actions';
import { getFilmModuleType } from '@/vuex/store/utils';
import { mapGetters } from 'vuex';

export default Vue.extend({
    name: 'SortPanel',
    components: { ButtonGroup },
    data() {
        return {
            options: SortByOptions,
        };
    },
    computed: {
        ...mapGetters({
            selectedOption: getFilmModuleType(FilmGetterProps.SortBy),
            availableItemsCount: getFilmModuleType(FilmGetterProps.AvailableCount),
        }),
    },
    methods: {
        selectOption(option: string): void {
            this.$store.dispatch(changeSortByActionPayload(option as SortByOptionsNames));
        },
    },
});
</script>

<style lang="scss" module scoped>
@import '../../styles/fonts';

.root {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
}

.title {
    @extend .font;

    color: $white;
    font-weight: bold;
    font-size: 16px;
}
</style>

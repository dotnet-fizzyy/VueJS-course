<template>
    <div :class="rootStyle">
        <span :class="titleStyle">{{ availableItemsCount }} movies found</span>

        <Options
            label="Sort By"
            :options="options"
            :selected-option="selectedOption"
            @on-select-option="onSelectOption"
        />
    </div>
</template>

<script lang="ts">
import Options, { OptionGroup } from '@/components/common/Options.vue';
import Vue from 'vue';

const AvailableOptionGroups: OptionGroup[] = [
    { label: 'Release Date', name: 'rd' },
    { label: 'Rating', name: 'rt' },
];

export interface SortPanelProps {
    availableItemsCount: number;
}

export default Vue.extend({
    name: 'SortPanel',
    components: { Options },
    props: {
        availableItemsCount: {
            type: Number,
            required: true,
        },
    },
    data() {
        return {
            options: AvailableOptionGroups,
            selectedOption: AvailableOptionGroups[0].name,
        };
    },
    computed: {
        rootStyle(): string {
            return this.$style.root;
        },
        titleStyle(): string {
            return this.$style.title;
        },
    },
    methods: {
        onSelectOption(option: string): void {
            this.selectedOption = option;
        },
    },
});
</script>

<style lang="scss" module scoped>
@import '../../styles/fonts';

.root {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.title {
    @extend .font;

    color: $white;
    font-weight: bold;
    font-size: 16px;
}
</style>

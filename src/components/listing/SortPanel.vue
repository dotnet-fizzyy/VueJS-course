<template>
    <div :class="$style.root">
        <span :class="$style.title">{{ availableItemsCount }} movies found</span>

        <button-group
            label="Sort By"
            :options="options"
            :selected-option="selectedOption"
            @select-option="onSelectOption"
        />
    </div>
</template>

<script lang="ts">
import ButtonGroup from '@/components/common/ButtonGroup.vue';
import Vue from 'vue';
import { SortByOptions } from '@/constants/search';

export interface SortPanelProps {
    availableItemsCount: number;
}

export default Vue.extend({
    name: 'SortPanel',
    components: { ButtonGroup },
    props: {
        availableItemsCount: {
            type: Number,
            required: true,
        },
    },
    data() {
        return {
            options: SortByOptions,
            selectedOption: SortByOptions[0].name,
        };
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

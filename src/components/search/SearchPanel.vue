<template>
    <div :class="$style.root">
        <span :class="$style['main-label']">Find your movie</span>

        <div :class="$style['search-container']">
            <div :class="$style['input-container']">
                <app-input
                    :value="searchValue"
                    placeholder="Search"
                    :font-size="inputFontSize"
                    @on-change="onChangeSearchQuery"
                />
            </div>
            <div :class="$style['search-button-container']">
                <PrimaryButton @on-click="onSearch">Search</PrimaryButton>
            </div>
        </div>

        <div :class="$style['options-container']">
            <Options
                label="Search By"
                :options="filterOptions"
                :selected-option="selectedFilterOption"
                @on-select-option="onChangeFilterOption"
            />
        </div>
    </div>
</template>

<script lang="ts">
import AppInput from '@/components/common/AppInput.vue';
import Options, { OptionGroup } from '@/components/common/Options.vue';
import PrimaryButton from '@/components/common/PrimaryButton.vue';
import Vue from 'vue';
import { FontSize } from '@/enums/styles';

const AvailableOptionGroups: OptionGroup[] = [
    { label: 'Title', name: 'tl' },
    { label: 'Genre', name: 'gr' },
];

export interface SearchPanelProps {
    onSearch: (searchValue: string, selectedFilterOption: string) => void;
}

export default Vue.extend({
    name: 'SearchPanel',
    components: { AppInput, PrimaryButton, Options },
    data() {
        return {
            filterOptions: AvailableOptionGroups,
            selectedFilterOption: AvailableOptionGroups[0].name,
            searchValue: '',
        };
    },
    computed: {
        inputFontSize(): FontSize {
            return FontSize.Large;
        },
    },
    methods: {
        onSearch(): void {
            this.$emit('on-search', this.searchValue, this.selectedFilterOption);
        },
        onChangeFilterOption(option: string): void {
            this.selectedFilterOption = option;
        },
        onChangeSearchQuery(value: string): void {
            this.searchValue = value;
        },
    },
});
</script>

<style lang="scss" module scoped>
@import '../../styles/fonts';

.root {
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

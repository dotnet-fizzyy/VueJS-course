<template>
    <div :class="$style.root">
        <span :class="$style['main-label']">Find your movie</span>

        <div :class="$style['search-container']">
            <div :class="$style['input-container']">
                <app-input
                    :value="searchValue"
                    placeholder="Search"
                    :font-size="inputFontSize"
                    @change="onChangeSearchQuery"
                />
            </div>
            <div :class="$style['search-button-container']">
                <PrimaryButton :font-size="inputFontSize" @click="onSearch">Search</PrimaryButton>
            </div>
        </div>

        <div :class="$style['options-container']">
            <button-group
                label="Search By"
                :options="filterOptions"
                :selected-option="selectedFilterOption"
                @select-option="onChangeFilterOption"
            />
        </div>
    </div>
</template>

<script lang="ts">
import AppInput from '@/components/common/AppInput.vue';
import ButtonGroup, { ButtonGroupOption } from '@/components/common/ButtonGroup.vue';
import PrimaryButton from '@/components/common/PrimaryButton.vue';
import Vue from 'vue';

const AvailableOptionGroups: ButtonGroupOption[] = [
    { label: 'Title', name: 'tl' },
    { label: 'Genre', name: 'gr' },
];

export interface SearchPanelProps {
    onSearch: (searchValue: string, selectedFilterOption: string) => void;
}

export default Vue.extend({
    name: 'SearchPanel',
    components: { AppInput, PrimaryButton, ButtonGroup },
    data() {
        return {
            filterOptions: AvailableOptionGroups,
            selectedFilterOption: AvailableOptionGroups[0].name,
            searchValue: '',
            inputFontSize: 24,
        };
    },
    methods: {
        onSearch(): void {
            this.$emit('search', this.searchValue, this.selectedFilterOption);
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

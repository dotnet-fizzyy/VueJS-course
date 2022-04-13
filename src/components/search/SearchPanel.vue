<template>
    <div :class="rootStyle">
        <span :class="mainLabelStyle">Find your movie</span>

        <div :class="searchContainerStyle">
            <div :class="inputContainerStyle">
                <CustomInput
                    :value="searchValue"
                    placeholder="Search"
                    :font-size="inputFontSize"
                    @on-change="onChangeSearchQuery"
                />
            </div>
            <div :class="searchButtonContainerStyle">
                <CustomButton :type="buttonType" @on-click="onSearch">Search</CustomButton>
            </div>
        </div>

        <div :class="optionsContainerStyle">
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
import CustomButton, { ButtonType } from '@/components/common/CustomButton.vue';
import CustomInput from '@/components/common/CustomInput.vue';
import Options, { OptionGroup } from '@/components/common/Options.vue';
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
    components: { CustomButton, CustomInput, Options },
    data() {
        return {
            filterOptions: AvailableOptionGroups,
            selectedFilterOption: AvailableOptionGroups[0].name,
            searchValue: '',
        };
    },
    computed: {
        /**
         *  styles
         */
        rootStyle(): string {
            return this.$style.root;
        },
        mainLabelStyle(): string {
            return this.$style['main-label'];
        },
        searchContainerStyle(): string {
            return this.$style['search-container'];
        },
        inputContainerStyle(): string {
            return this.$style['input-container'];
        },
        inputFontSize(): FontSize {
            return FontSize.Large;
        },
        searchButtonContainerStyle(): string {
            return this.$style['search-button-container'];
        },
        optionsContainerStyle(): string {
            return this.$style['options-container'];
        },

        /**
         *  values
         */
        buttonType(): ButtonType {
            return ButtonType.Primary;
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

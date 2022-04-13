<template>
    <div :class="$style.root">
        <span :class="$style['main-label']">Find your movie</span>

        <div :class="$style['search-container']">
            <div :class="$style['input-container']">
                <CustomInput
                    :value="searchValue"
                    placeholder="Search"
                    :font-size="inputFontSize"
                    @on-change="onChangeSearchQuery"
                />
            </div>
            <div :class="$style['search-button-container']">
                <CustomButton :type="buttonType" @on-click="onSearch">Search</CustomButton>
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
        inputFontSize(): FontSize {
            return FontSize.Large;
        },
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

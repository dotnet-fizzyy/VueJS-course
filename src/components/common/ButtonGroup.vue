<template>
    <div :class="$style.root">
        <span :class="$style.label" v-if="!!label">{{ label }}</span>

        <div :class="$style['options-container']">
            <template v-for="(option, index) in options">
                <button
                    :class="[
                        isSelected(option.name) ? $style['selected-option'] : $style['non-selected-option'],
                        $style.option,
                    ]"
                    :key="index"
                    @click="selectOption(option.name)"
                >
                    {{ option.label }}
                </button>
            </template>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export interface ButtonGroupOption {
    label: string;
    name: string;
}

export interface ButtonGroupProps {
    label: string;
    options: ButtonGroupOption[];
    selectedOption: string;
    selectOption: (value: string) => void;
}

export default Vue.extend({
    name: 'ButtonGroup',
    props: {
        label: {
            type: String,
        },
        options: {
            type: Array as Vue.PropType<ButtonGroupOption[]>,
            required: true,
        },
        selectedOption: {
            type: String,
            required: true,
        },
    },
    methods: {
        selectOption(option: string): void {
            if (option === this.selectedOption) {
                return;
            }

            this.$emit('select-option', option);
        },
        isSelected(optionName: string): boolean {
            return optionName === this.selectedOption;
        },
    },
});
</script>

<style lang="scss" scoped module>
@import '../../styles/buttons';
@import '../../styles/fonts';

.root {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.label {
    @extend .font;

    text-transform: uppercase;
    margin-right: 20px;
}

.options-container {
    display: flex;
    flex-direction: row;
    height: 35px;
}

.selected-option {
    @extend .primary-button;
}

.non-selected-option {
    @extend .secondary-button;
}

.option {
    &:first-child {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }

    &:last-child {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }
}
</style>

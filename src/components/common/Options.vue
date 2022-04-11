<template>
    <div :class="rootStyle">
        <span :class="labelStyle" v-if="!!label">{{ label }}</span>

        <div :class="optionsContainerStyle">
            <template v-for="(option, index) in options">
                <button :class="getButtonStyle(option.name)" v-bind:key="index" v-on:click="onClick(option.name)">
                    {{ option.label }}
                </button>
            </template>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export interface OptionGroup {
    label: string;
    name: string;
}

export default Vue.extend({
    name: 'Options',
    props: {
        label: {
            type: String,
        },
        options: {
            type: Array as Vue.PropType<OptionGroup[]>,
            required: true,
        },
        selectedOption: {
            type: String,
            required: true,
        },
    },
    computed: {
        rootStyle(): string {
            return this.$style.root;
        },
        labelStyle(): string {
            return this.$style.font;
        },
        optionsContainerStyle(): string {
            return this.$style['options-container'];
        },
    },
    methods: {
        onClick(option: string): void {
            if (option === this.selectedOption) {
                return;
            }

            this.$emit('on-select-option', option);
        },
        getButtonStyle(optionName: string): string[] {
            const buttonStyle: string =
                optionName === this.selectedOption ? this.$style['primary-button'] : this.$style['secondary-button'];

            return [buttonStyle, this.$style.option];
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

.options-container {
    display: flex;
    flex-direction: row;
    height: 35px;
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

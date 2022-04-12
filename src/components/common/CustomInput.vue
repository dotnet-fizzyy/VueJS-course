<template>
    <div v-bind:class="rootStyle">
        <span v-if="!!label" v-bind:class="labelStyle">{{ label }}</span>

        <input v-bind:class="inputStyle" v-bind:placeholder="placeholder" v-bind:value="value" v-on:input="onChange" />

        <div v-if="!!errorMessage" v-bind:class="errorMessageContainerStyle">
            <error-icon />
            <span v-bind:class="errorMessageStyle">{{ errorMessage }}</span>
        </div>
    </div>
</template>

<script lang="ts">
import ErrorIcon from '@/assets/icons/Error.vue';
import Vue from 'vue';
import { FontSize } from '@/enums/styles';

export interface CustomInputProps {
    value: string;
    label?: string;
    placeholder?: string;
    errorMessage?: string;
    fontSize?: FontSize;
    onChange: (value: string) => void;
}

export default Vue.extend({
    name: 'CustomInput',
    components: { ErrorIcon },
    props: {
        label: {
            type: String,
        },
        placeholder: {
            type: String,
        },
        value: {
            type: String,
            required: true,
        },
        fontSize: {
            type: String,
            default: FontSize.Medium,
        },
        errorMessage: {
            type: String,
        },
    },
    computed: {
        rootStyle(): string {
            return this.$style.root;
        },
        labelStyle(): string {
            return this.$style.label;
        },
        inputStyle(): string[] {
            const fontSizeStyle = this.$style[this.fontSize];

            return [this.$style.input, fontSizeStyle];
        },
        errorMessageContainerStyle(): string {
            return this.$style['error-message-container'];
        },
        errorMessageStyle(): string {
            return this.$style['error-message'];
        },
    },
    methods: {
        onChange(event): void {
            const value: string = event.target.value;

            this.$emit('on-change', value);
        },
    },
});
</script>

<style lang="scss" module scoped>
@import '../../styles/inputs';
@import '../../styles/fonts';

.root {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}

.label {
    @extend .font;
    color: getRgbaWhite($white-medium-opacity);
    margin-bottom: 15px;
}

.error-message-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 7px;
}

.error-message {
    color: $light-red;
    margin-left: 5px;
    font-family: $roboto;
    font-size: 14px;
}
</style>

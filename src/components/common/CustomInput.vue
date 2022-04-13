<template>
    <div :class="$style.root">
        <span v-if="!!label" :class="$style.label">{{ label }}</span>

        <input
            :class="[$style.input, $style[fontSize]]"
            :placeholder="placeholder"
            :value="value"
            v-on:input="onChange"
        />

        <div v-if="!!errorMessage" :class="$style['error-message-container']">
            <error-icon />
            <span :class="$style['error-message']">{{ errorMessage }}</span>
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

<template>
    <div :class="$style.root">
        <span v-if="!!label" :class="$style.label">{{ label }}</span>

        <input :class="$style.input" v-font-size="fontSize" :placeholder="placeholder" :value="value" @input="change" />

        <div v-if="!!errorMessage" :class="$style['error-message-container']">
            <error-icon />
            <span :class="$style['error-message']">{{ errorMessage }}</span>
        </div>
    </div>
</template>

<script lang="ts">
import ErrorIcon from '@/components/icons/ErrorIcon.vue';
import Vue from 'vue';
import { DefaultFontSize } from '@/constants/styles';
import { FontSizeDirective, FontSizeDirectiveName } from '@/directives/fontSizeDirective';

export interface AppInputProps {
    value: string;
    label?: string;
    placeholder?: string;
    errorMessage?: string;
    fontSize?: number;
    change: (value: string) => void;
}

export default Vue.extend({
    name: 'AppInput',
    components: { ErrorIcon },
    directives: {
        [FontSizeDirectiveName]: FontSizeDirective,
    },
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
            type: Number,
            default: DefaultFontSize,
        },
        errorMessage: {
            type: String,
        },
    },
    methods: {
        change(event): void {
            const value: string = event.target.value;

            this.$emit('change', value);
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

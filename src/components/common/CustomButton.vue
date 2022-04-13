<template>
    <button
        :class="[
            type === 'primary' ? $style['primary-button'] : $style['secondary-button'],
            $style[fontSize],
            $style[fontStyle],
        ]"
        v-on:click="onClick"
    >
        <slot />
    </button>
</template>

<script lang="ts">
import Vue from 'vue';
import { FontSize, FontStyle } from '@/enums/styles';

export enum ButtonType {
    Primary = 'primary',
    Secondary = 'secondary',
}

export interface CustomButtonProps {
    title: string;
    type?: ButtonType;
    fontStyle?: FontStyle;
    fontSize?: FontSize;
    onClick: () => void;
}

export default Vue.extend({
    name: 'CustomButton',
    props: {
        type: {
            type: String,
            default: ButtonType.Primary,
        },
        fontSize: {
            type: String,
            default: FontSize.Medium,
        },
        fontStyle: {
            type: String,
            default: FontStyle.Normal,
        },
    },
    methods: {
        onClick() {
            this.$emit('on-click');
        },
    },
});
</script>

<style lang="scss" scoped module>
@import '../../styles/buttons';
@import '../../styles/fonts';
</style>

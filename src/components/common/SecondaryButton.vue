<template>
    <button :class="[$style['secondary-button'], $style[fontSize], $style[fontStyle]]" v-on:click="onClick">
        <slot />
    </button>
</template>

<script lang="ts">
import Vue from 'vue';
import { FontSize, FontStyle } from '@/enums/styles';

export interface SecondaryButtonProps {
    title: string;
    fontStyle?: FontStyle;
    fontSize?: FontSize;
    onClick: () => void;
}

export default Vue.extend({
    name: 'SecondaryButton',
    props: {
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

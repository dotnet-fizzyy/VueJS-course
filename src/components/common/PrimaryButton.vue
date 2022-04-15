<template>
    <button :class="[$style['primary-button'], $style[fontSize], $style[fontStyle]]" @click="onClick">
        <slot />
    </button>
</template>

<script lang="ts">
import Vue from 'vue';
import { FontSize, FontStyle } from '@/enums/styles';

export interface PrimaryButtonProps {
    title: string;
    fontStyle?: FontStyle;
    fontSize?: FontSize;
    onClick: () => void;
}

export default Vue.extend({
    name: 'PrimaryButton',
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

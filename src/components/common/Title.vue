<template>
    <span :class="[$style.font, $style[fontStyle], $style[fontSize]]"><slot /></span>
</template>

<script lang="ts">
import Vue from 'vue';
import { FontSize, FontStyle } from '@/enums/styles';

export interface TitleProps {
    fontStyle?: FontStyle;
    fontSize?: FontSize;
    title: string;
}

export default Vue.extend({
    name: 'Title',
    props: {
        fontStyle: {
            type: String,
            default: FontStyle.Normal,
        },
        fontSize: {
            type: String,
            default: FontSize.Medium,
        },
    },
});
</script>

<style lang="scss" scoped module>
@import '../../styles/fonts';
</style>

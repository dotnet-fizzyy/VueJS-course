<template>
    <button :class="[$style['secondary-button'], $style[fontSize], $style[fontStyle]]" @click="click">
        <slot />
    </button>
</template>

<script lang="ts">
import ButtonMixin from '@/mixins/ButtonMixin';
import Vue from 'vue';
import { BaseButtonProps } from '@/types/button';

export interface SecondaryButtonProps extends BaseButtonProps {}

export default Vue.extend({
    name: 'SecondaryButton',
    mixins: [ButtonMixin],
});
</script>

<style lang="scss" scoped module>
@import '../../styles/buttons';
@import '../../styles/fonts';
</style>

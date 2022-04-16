<template>
    <button v-font-size="fontSize" :class="[$style['primary-button'], $style[fontStyle]]" @click="click">
        <slot />
    </button>
</template>

<script lang="ts">
import ButtonMixin from '@/mixins/buttonMixin';
import Vue from 'vue';
import { BaseButtonProps } from '@/types/button';

export interface PrimaryButtonProps extends BaseButtonProps {}

export default Vue.extend({
    name: 'PrimaryButton',
    mixins: [ButtonMixin],
});
</script>

<style lang="scss" scoped module>
@import '../../styles/buttons';
@import '../../styles/fonts';
</style>

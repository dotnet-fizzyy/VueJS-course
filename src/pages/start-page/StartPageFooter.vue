<template>
    <div :class="$style.root">
        <logo-icon />
    </div>
</template>

<script lang="ts">
import LogoIcon from '@/components/icons/LogoIcon.vue';
import Vue from 'vue';

export default Vue.extend({
    name: 'StartPageFooter',
    components: { LogoIcon },
});
</script>

<style lang="scss" module scoped>
@import '../../styles/fonts';

.root {
    height: 70px;
    background-color: $light-grey;
    margin-top: auto;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>

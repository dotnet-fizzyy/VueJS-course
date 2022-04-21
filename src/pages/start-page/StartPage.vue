<template>
    <div :class="$style.root">
        <start-page-header />

        <start-page-body />

        <start-page-footer />
    </div>
</template>

<script lang="ts">
import StartPageBody from '@/pages/start-page/StartPageBody.vue';
import StartPageFooter from '@/pages/start-page/StartPageFooter.vue';
import StartPageHeader from '@/pages/start-page/StartPageHeader.vue';
import Vue from 'vue';

export default Vue.extend({
    name: 'StartPage',
    components: {
        StartPageFooter,
        StartPageHeader,
        StartPageBody,
    },
});
</script>

<style lang="scss" module scoped>
.root {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
</style>

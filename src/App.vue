<template>
    <div id="app">
        <div id="main">
            <start-view />
        </div>
    </div>
</template>

<script lang="ts">
import StartView from '@/components/views/StartView.vue';
import Vue from 'vue';

export default Vue.extend({
    name: 'App',
    components: {
        StartView,
    },
});
</script>

<style lang="scss">
@import '../src/styles/fonts';

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: $light-grey;
    width: 100%;
    box-sizing: border-box;
}

#main {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-basis: 1200px;
    height: 100%;
    background-color: $dark-grey;
    box-shadow: 0 0 30px getRgbaBlack(0.5);
}
</style>

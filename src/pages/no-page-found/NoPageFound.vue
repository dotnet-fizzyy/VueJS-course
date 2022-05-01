<template>
    <div :class="$style.root">
        <span :class="$style['error-title']">404 :(</span>
        <span :class="$style['error-description']">Sorry, the page you are looking does not exist.</span>

        <router-link :class="$style['back-to-main-page-link']" to="/">back to main page</router-link>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: 'NoPageFound',
});
</script>

<style lang="scss" module scoped>
@import '../../styles/fonts';

.root {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.error-title {
    @extend .font;
    @extend .bold;

    font-size: 70px;
    margin-bottom: 40px;
}

.error-description {
    @extend .font;

    font-size: 20px;
    margin-bottom: 15px;
}

.back-to-main-page-link {
    @extend .font;

    font-size: 20px;

    &:visited {
        color: getRgbaWhite($white-medium-opacity);
    }
}
</style>

<template>
    <div :class="$style.root">
        <div :class="$style.header">
            <div :class="$style['header-background']">
                <div :class="$style['search-container']">
                    <div :class="$style['logo-container']">
                        <logo />
                    </div>

                    <search-panel />
                </div>
            </div>
        </div>

        <div :class="$style.body">
            <div :class="$style['sort-panel-container']">
                <sort-panel :available-items-count="7" />
            </div>
            <div></div>
        </div>

        <div :class="$style.footer">
            <logo />
        </div>
    </div>
</template>

<script lang="ts">
import Logo from '../../assets/icons/Logo.vue';
import SearchPanel from '@/components/search/SearchPanel.vue';
import SortPanel from '@/components/listing/SortPanel.vue';
import Vue from 'vue';

export default Vue.extend({
    name: 'StartView',
    components: { SearchPanel, SortPanel, Logo },
});
</script>

<style lang="scss" module scoped>
@import '../../styles/fonts';

.root {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}

.header {
    height: 400px;
    background-image: url('https://res.cloudinary.com/djlynoeio/image/upload/v1649880735/vue/film-posters.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.header-background {
    height: 100%;
    background-color: getRgbaBlack(0.8);
    backdrop-filter: blur(3px);
    position: relative;
}

.logo-container {
    position: absolute;
    left: 60px;
    top: 20px;
}

.search-container {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0 120px;
}

.body {
}

.sort-panel-container {
    height: 70px;
    background-color: $light-grey;
    display: flex;
    align-items: center;
    flex-direction: row;
    padding: 0 120px;
}

.footer {
    height: 70px;
    background-color: $light-grey;
    margin-top: auto;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>

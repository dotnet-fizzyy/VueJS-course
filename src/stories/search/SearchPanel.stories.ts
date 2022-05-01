import SearchPanel from '@/components/search/SearchPanel.vue';
import router from '@/router';
import store from '@/vuex/store';

export default {
    title: 'search/SearchPanel',
    component: SearchPanel,
};

const Template = (args, { argTypes }) => ({
    components: { SearchPanel },
    props: Object.keys(argTypes),
    store,
    router,
    template: '<div style="background-color: #555555; padding: 30px; width: 700px;"><SearchPanel /></div>',
});

export const Default = Template.bind({});

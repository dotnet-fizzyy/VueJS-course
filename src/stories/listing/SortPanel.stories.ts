import SortPanel from '@/components/listing/SortPanel.vue';
import router from '@/router';
import store from '@/vuex/store';

export default {
    title: 'listing/SortPanel',
    component: SortPanel,
};

const Template = (args, { argTypes }) => ({
    components: { SortPanel },
    props: Object.keys(argTypes),
    store,
    router,
    template:
        '<div style="background-color: #555555; padding: 30px; width: 600px;"><SortPanel v-bind="$props" /></div>',
});

export const Default = Template.bind({});

import SearchPanel, { SearchPanelProps } from '@/components/search/SearchPanel.vue';
import store from '@/vuex/store';
import { action } from '@storybook/addon-actions';

export default {
    title: 'search/SearchPanel',
    component: SearchPanel,
};

const Template = (args, { argTypes }) => ({
    components: { SearchPanel },
    props: Object.keys(argTypes),
    store,
    template:
        '<div style="background-color: #555555; padding: 30px; width: 700px;"><SearchPanel @search="$props.search" /></div>',
});

export const Default = Template.bind({});
Default.args = {
    search: action('click search'),
} as SearchPanelProps;

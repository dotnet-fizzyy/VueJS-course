import SearchPanel, { SearchPanelProps } from '@/components/search/SearchPanel.vue';
import { action } from '@storybook/addon-actions';

export default {
    title: 'search/SearchPanel',
    component: SearchPanel,
};

const Template = (args, { argTypes }) => ({
    components: { SearchPanel },
    props: Object.keys(argTypes),
    template:
        '<div style="background-color: #555555; padding: 30px; width: 700px;"><SearchPanel @on-click-search="$props.onClickSearch" /></div>',
});

export const Default = Template.bind({});
Default.args = {
    onClickSearch: action('onClickSearch'),
} as SearchPanelProps;

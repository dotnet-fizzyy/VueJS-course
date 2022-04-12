import SortPanel, { SortPanelProps } from '@/components/search/SortPanel.vue';

export default {
    title: 'search/SortPanel',
    component: SortPanel,
};

const Template = (args, { argTypes }) => ({
    components: { SortPanel },
    props: Object.keys(argTypes),
    template:
        '<div style="background-color: #555555; padding: 30px; width: 600px;"><SortPanel :available-items-count="$props.availableItemsCount" /></div>',
});

export const Default = Template.bind({});
Default.args = {
    availableItemsCount: 7,
} as SortPanelProps;

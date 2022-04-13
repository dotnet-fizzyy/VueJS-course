import SortPanel, { SortPanelProps } from '@/components/listing/SortPanel.vue';

export default {
    title: 'listing/SortPanel',
    component: SortPanel,
};

const Template = (args, { argTypes }) => ({
    components: { SortPanel },
    props: Object.keys(argTypes),
    template:
        '<div style="background-color: #555555; padding: 30px; width: 600px;"><SortPanel v-bind="$props" /></div>',
});

export const Default = Template.bind({});
Default.args = {
    availableItemsCount: 7,
} as SortPanelProps;

import SecondaryButton, { SecondaryButtonProps } from '@/components/common/SecondaryButton.vue';
import { FontSize, FontStyle } from '@/enums/styles';
import { action } from '@storybook/addon-actions';

export default {
    title: 'common/SecondaryButton',
    component: SecondaryButton,
};

const Template = (args, { argTypes }) => ({
    components: { SecondaryButton },
    props: Object.keys(argTypes),
    template:
        '<div style="width: 150px; height: 30px"><SecondaryButton v-bind="$props" @on-click="$props.click">{{ $props.title }}</SecondaryButton></div>',
});

export const Default = Template.bind({});
Default.args = {
    title: 'Hello world!',
    fontStyle: FontStyle.Normal,
    fontSize: FontSize.Medium,
    click: action('clicked'),
} as SecondaryButtonProps;

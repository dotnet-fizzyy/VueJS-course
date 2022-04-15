import PrimaryButton, { PrimaryButtonProps } from '@/components/common/PrimaryButton.vue';
import { FontSize, FontStyle } from '@/enums/styles';
import { action } from '@storybook/addon-actions';

export default {
    title: 'common/PrimaryButton',
    component: PrimaryButton,
};

const Template = (args, { argTypes }) => ({
    components: { PrimaryButton },
    props: Object.keys(argTypes),
    template:
        '<div style="width: 150px; height: 30px"><PrimaryButton v-bind="$props" @on-click="$props.click">{{ $props.title }}</PrimaryButton></div>',
});

export const Default = Template.bind({});
Default.args = {
    title: 'Hello world!',
    fontStyle: FontStyle.Normal,
    fontSize: FontSize.Medium,
    click: action('clicked'),
} as PrimaryButtonProps;

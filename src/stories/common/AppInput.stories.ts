import AppInput, { AppInputProps } from '@/components/common/AppInput.vue';
import { FontSize } from '@/enums/styles';
import { action } from '@storybook/addon-actions';

export default {
    title: 'common/AppInput',
    component: AppInput,
};

const Template = (args, { argTypes }) => ({
    components: { AppInput },
    props: Object.keys(argTypes),
    template:
        '<div style="max-width: 200px; width: 100%; height: 90px; background-color: #555555; padding: 10px"><AppInput v-bind="$props" @on-change="onChange" /></div>',
});

export const InputWithLabelAndError = Template.bind({});
InputWithLabelAndError.args = {
    label: 'Small title',
    placeholder: 'Placeholder',
    value: '',
    errorMessage: 'Some error',
    onChange: action('change'),
} as AppInputProps;

export const SimpleInputWithLargeFont = Template.bind({});
SimpleInputWithLargeFont.args = {
    placeholder: 'Placeholder',
    value: '',
    fontSize: FontSize.Large,
    onChange: action('change'),
} as AppInputProps;

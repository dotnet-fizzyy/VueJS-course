import CustomInput, { CustomInputProps } from '@/components/common/CustomInput.vue';
import { action } from '@storybook/addon-actions';

export default {
    title: 'common/CustomInput',
    component: CustomInput,
};

const Template = (args, { argTypes }) => ({
    components: { CustomInput },
    props: Object.keys(argTypes),
    template:
        '<div style="max-width: 200px; width: 100%; height: 90px; background-color: #555555; padding: 10px"><CustomInput :label="label" :value="value" :placeholder="placeholder" :error-message="errorMessage" @on-change="onChange" /></div>',
});

export const InputWithLabelAndError = Template.bind({});
InputWithLabelAndError.args = {
    label: 'Small title',
    placeholder: 'Placeholder',
    value: '',
    errorMessage: 'Some error',
    onChange: action('change'),
} as CustomInputProps;

export const SimpleInput = Template.bind({});
SimpleInput.args = {
    placeholder: 'Placeholder',
    value: '',
    onChange: action('change'),
} as CustomInputProps;

import InputField from '@/components/common/InputField.vue';
import { action } from '@storybook/addon-actions';

export default {
    title: 'common/InputField',
};

export const Default = () => ({
    components: { InputField },
    template:
        '<div style="max-width: 200px; width: 100%; height: 90px; background-color: #555555; padding: 10px"><InputField :label="label" :value="value" :placeholder="placeholder" :error-message="errorMessage" @on-change="onChange" /></div>',
    data: () => ({
        label: 'Small title',
        placeholder: 'Placeholder',
        value: '',
        errorMessage: 'Some error',
    }),
    methods: { onChange: action('change') },
});

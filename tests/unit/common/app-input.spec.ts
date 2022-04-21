import AppInput from '@/components/common/AppInput.vue';
import { shallowMount } from '@vue/test-utils';

describe('AppInput.vue Tests', () => {
    test('Should render', () => {
        //Arrange
        const wrapper = shallowMount(AppInput, {
            propsData: {
                label: 'Label',
                value: 'Value',
                placeholder: 'Placeholder',
                errorMessage: 'Error message',
                fontSize: 16,
            },
        });

        //Act & Assert
        expect(wrapper.element).toMatchSnapshot();
    });

    test('Should not render "label" block if it was not provided via props', () => {
        //Arrange
        const wrapper = shallowMount(AppInput, {
            propsData: {
                value: 'Value',
                placeholder: 'Placeholder',
                errorMessage: 'Error message',
                fontSize: 16,
            },
        });

        //Act & Assert
        expect(wrapper.element).toMatchSnapshot();
    });

    test('Should not render "error" block if it was not provided via props', () => {
        //Arrange
        const wrapper = shallowMount(AppInput, {
            propsData: {
                label: 'Label',
                value: 'Value',
                placeholder: 'Placeholder',
                fontSize: 16,
            },
        });

        //Act & Assert
        expect(wrapper.element).toMatchSnapshot();
    });

    test('Should emit event with changed value in input', () => {
        //Arrange
        const wrapper = shallowMount(AppInput, {
            propsData: {
                label: 'Label',
                value: '',
                placeholder: 'Placeholder',
                errorMessage: 'Error message',
                fontSize: 16,
            },
        });

        const expectedValue = 'Hello world!';

        //Act & Assert
        const inputWrapper = wrapper.find('input');

        // @ts-ignore Value exists in `element`
        expect(inputWrapper.element.value).toEqual('');

        inputWrapper.setValue(expectedValue);

        expect(wrapper.emitted().change).toBeTruthy();
        expect(wrapper.emitted().change[0][0]).toEqual(expectedValue);
    });
});

import AppInput from '@/components/common/AppInput.vue';
import Vue from 'vue';
import { Wrapper, shallowMount } from '@vue/test-utils';

describe('AppInput.vue Tests', () => {
    const createComponent = (propsData): Wrapper<Vue> =>
        shallowMount(AppInput, {
            propsData,
        });

    const findInputField = (wrapper: Wrapper<Vue>) => wrapper.find('input');

    it('Should render', () => {
        //Arrange
        const wrapper = createComponent({
            label: 'Label',
            value: 'Value',
            placeholder: 'Placeholder',
            errorMessage: 'Error message',
            fontSize: 16,
        });

        //Act & Assert
        expect(wrapper.element).toMatchSnapshot();
    });

    it('Should not render "label" block if it was not provided via props', () => {
        //Arrange
        const wrapper = createComponent({
            value: 'Value',
            placeholder: 'Placeholder',
            errorMessage: 'Error message',
            fontSize: 16,
        });

        //Act & Assert
        expect(wrapper.element).toMatchSnapshot();
    });

    it('Should not render "error" block if it was not provided via props', () => {
        //Arrange
        const wrapper = createComponent({
            label: 'Label',
            value: 'Value',
            placeholder: 'Placeholder',
            fontSize: 16,
        });

        //Act & Assert
        expect(wrapper.element).toMatchSnapshot();
    });

    it('Should emit event with changed value in input', () => {
        //Arrange
        const wrapper = createComponent({
            label: 'Label',
            value: '',
            placeholder: 'Placeholder',
            errorMessage: 'Error message',
            fontSize: 16,
        });

        const expectedValue = 'Hello world!';

        //Act & Assert
        const inputWrapper = findInputField(wrapper);

        // @ts-ignore Value exists in `element`
        expect(inputWrapper.element.value).toEqual('');

        inputWrapper.setValue(expectedValue);

        expect(wrapper.emitted().change).toBeTruthy();
        expect(wrapper.emitted().change[0][0]).toEqual(expectedValue);
    });
});

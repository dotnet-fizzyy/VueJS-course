import PrimaryButton from '@/components/common/PrimaryButton.vue';
import { FontStyle } from '@/enums/styles';
import { shallowMount } from '@vue/test-utils';

describe('PrimaryButton.vue Tests', () => {
    test('Should render', () => {
        //Arrange
        const wrapper = shallowMount(PrimaryButton, {
            propsData: {
                fontSize: 16,
                fontStyle: FontStyle.Bold,
            },
            slots: {
                default: 'ClickPrimaryButton',
            },
        });

        //Act & Assert
        expect(wrapper.element).toMatchSnapshot();
    });

    test('Should contain correct text message', () => {
        //Arrange
        const message = 'Hello world!';

        const wrapper = shallowMount(PrimaryButton, {
            propsData: {
                fontSize: 16,
                fontStyle: FontStyle.Bold,
            },
            slots: {
                default: message,
            },
        });

        //Act & Assert
        expect(wrapper.text()).toEqual(message);
    });

    test('Should emit event on click', () => {
        //Arrange
        const wrapper = shallowMount(PrimaryButton, {
            propsData: {
                fontSize: 16,
                fontStyle: FontStyle.Bold,
            },
            slots: {
                default: 'ClickPrimaryButton',
            },
        });

        //Act
        wrapper.trigger('click');

        //Assert
        expect(wrapper.emitted().click).toBeTruthy();
    });
});

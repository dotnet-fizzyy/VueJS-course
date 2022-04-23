import SecondaryButton from '@/components/common/SecondaryButton.vue';
import { FontStyle } from '@/enums/styles';
import { shallowMount } from '@vue/test-utils';

describe('SecondaryButton.vue Tests', () => {
    test('Should render', () => {
        //Arrange
        const wrapper = shallowMount(SecondaryButton, {
            propsData: {
                fontSize: 14,
                fontStyle: FontStyle.Italic,
            },
            slots: {
                default: 'ClickSecondaryButton',
            },
        });

        //Act & Assert
        expect(wrapper.element).toMatchSnapshot();
    });

    test('Should contain correct text message', () => {
        //Arrange
        const message = 'Hello world!';

        const wrapper = shallowMount(SecondaryButton, {
            propsData: {
                fontSize: 14,
                fontStyle: FontStyle.Italic,
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
        const wrapper = shallowMount(SecondaryButton, {
            propsData: {
                fontSize: 14,
                fontStyle: FontStyle.Italic,
            },
            slots: {
                default: 'ClickSecondaryButton',
            },
        });

        //Act
        wrapper.trigger('click');

        //Assert
        expect(wrapper.emitted('click')).toBeTruthy();
    });
});

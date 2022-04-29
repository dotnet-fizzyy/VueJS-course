import SecondaryButton from '@/components/common/SecondaryButton.vue';
import Vue from 'vue';
import { FontStyle } from '@/enums/styles';
import { Wrapper, shallowMount } from '@vue/test-utils';

describe('SecondaryButton.vue Tests', () => {
    const createComponent = (propsData, slots): Wrapper<Vue> =>
        shallowMount(SecondaryButton, {
            propsData,
            slots,
        });

    it('Should render', () => {
        //Arrange
        const wrapper = createComponent(
            {
                fontSize: 14,
                fontStyle: FontStyle.Italic,
            },
            {
                default: 'ClickSecondaryButton',
            }
        );

        //Act & Assert
        expect(wrapper.element).toMatchSnapshot();
    });

    it('Should contain correct text message', () => {
        //Arrange
        const message = 'Hello world!';

        const wrapper = createComponent(
            {
                fontSize: 14,
                fontStyle: FontStyle.Italic,
            },
            {
                default: message,
            }
        );

        //Act & Assert
        expect(wrapper.text()).toEqual(message);
    });

    it('Should emit event on click', () => {
        //Arrange
        const wrapper = createComponent(
            {
                fontSize: 14,
                fontStyle: FontStyle.Italic,
            },
            {
                default: 'ClickSecondaryButton',
            }
        );

        //Act
        wrapper.trigger('click');

        //Assert
        expect(wrapper.emitted('click')).toBeTruthy();
    });
});

import PrimaryButton from '@/components/common/PrimaryButton.vue';
import Vue from 'vue';
import { FontStyle } from '@/enums/styles';
import { Wrapper, shallowMount } from '@vue/test-utils';

describe('PrimaryButton.vue Tests', () => {
    const createComponent = (propsData, slots): Wrapper<Vue> =>
        shallowMount(PrimaryButton, {
            propsData,
            slots,
        });

    it('Should render', () => {
        //Arrange
        const wrapper = createComponent(
            {
                fontSize: 16,
                fontStyle: FontStyle.Bold,
            },
            {
                default: 'ClickPrimaryButton',
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
                fontSize: 16,
                fontStyle: FontStyle.Bold,
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
                fontSize: 16,
                fontStyle: FontStyle.Bold,
            },
            {
                default: 'ClickPrimaryButton',
            }
        );

        //Act
        wrapper.trigger('click');

        //Assert
        expect(wrapper.emitted('click')).toBeTruthy();
    });
});

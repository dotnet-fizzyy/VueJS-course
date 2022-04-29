import ButtonGroup from '@/components/common/ButtonGroup.vue';
import Vue from 'vue';
import { Wrapper, shallowMount } from '@vue/test-utils';

describe('ButtonGroup.vue Tests', () => {
    const createComponent = (propsData): Wrapper<Vue> =>
        shallowMount(ButtonGroup, {
            propsData,
        });

    it('Should render', () => {
        //Arrange
        const selectedOption = 'btn2';

        const wrapper = createComponent({
            label: 'Label',
            options: [
                { label: 'First Button', name: 'btn1' },
                { label: 'Second Button', name: selectedOption },
            ],
            selectedOption,
        });

        //Act & Assert
        expect(wrapper).toMatchSnapshot();
    });

    it('Should not render "label" block if it was not provided via props', () => {
        //Arrange
        const selectedOption = 'btn2';

        const wrapper = createComponent({
            options: [
                { label: 'First Button', name: 'btn1' },
                { label: 'Second Button', name: selectedOption },
            ],
            selectedOption,
        });

        //Act & Assert
        expect(wrapper).toMatchSnapshot();
    });

    it('Should emit event if non-selected button was clicked', () => {
        //Arrange
        const nonSelectedOption = 'bt1';
        const selectedOption = 'btn2';

        const wrapper = createComponent({
            label: 'Label',
            options: [
                { label: 'First Button', name: nonSelectedOption },
                { label: 'Second Button', name: selectedOption },
            ],
            selectedOption,
        });

        //Act & Assert
        const nonSelectedButtonWrapper = wrapper.find(`[data-aqa-button-name=${nonSelectedOption}]`);

        expect(nonSelectedButtonWrapper.element).toBeTruthy();

        nonSelectedButtonWrapper.trigger('click');

        expect(wrapper.emitted()['select-option']).toBeTruthy();
        expect(wrapper.emitted()['select-option'][0][0]).toEqual(nonSelectedOption);
    });

    it('Should not emit event if selected button was clicked', () => {
        //Arrange
        const nonSelectedOption = 'bt1';
        const selectedOption = 'btn2';

        const wrapper = shallowMount(ButtonGroup, {
            propsData: {
                label: 'Label',
                options: [
                    { label: 'First Button', name: nonSelectedOption },
                    { label: 'Second Button', name: selectedOption },
                ],
                selectedOption,
            },
        });

        //Act & Assert
        const selectedButtonWrapper = wrapper.find(`[data-aqa-button-name=${selectedOption}]`);

        expect(selectedButtonWrapper.element).toBeTruthy();

        selectedButtonWrapper.trigger('click');

        expect(wrapper.emitted()['select-option']).toBeFalsy();
    });
});

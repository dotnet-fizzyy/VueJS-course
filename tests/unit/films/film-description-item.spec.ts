import FilmDescriptionItem from '@/components/films/FilmDescriptionItem.vue';
import { shallowMount } from '@vue/test-utils';

describe('FilmDescriptionItem.vue Tests', () => {
    it('Should render', () => {
        //Arrange
        const wrapper = shallowMount(FilmDescriptionItem, {
            propsData: {
                keyLabel: 'Key Label',
                additionalLabel: 'Addit Label',
            },
        });

        //Act & Assert
        expect(wrapper.element).toMatchSnapshot();
    });
});

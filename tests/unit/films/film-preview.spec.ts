import FilmPreview from '@/components/films/FilmPreview.vue';
import { shallowMount } from '@vue/test-utils';

describe('FilmPreview.vue Tests', () => {
    test('Should render', () => {
        //Arrange
        const wrapper = shallowMount(FilmPreview, {
            propsData: {
                id: 'id',
                posterUrl: 'poster_url',
                posterAlt: 'poster_alt',
                name: 'Film Name',
                shortDescription: 'Short Description',
                releaseYear: 2022,
            },
        });

        //Act & Assert
        expect(wrapper.element).toMatchSnapshot();
    });

    test('Should emit event on click', () => {
        //Arrange
        const id = 'filmId';

        const wrapper = shallowMount(FilmPreview, {
            propsData: {
                id,
                posterUrl: 'poster_url',
                posterAlt: 'poster_alt',
                name: 'Film Name',
                shortDescription: 'Short Description',
                releaseYear: 2022,
            },
        });

        //Act
        wrapper.trigger('click');

        //Arrange
        expect(wrapper.emitted('select')).toBeTruthy();
        expect(wrapper.emitted('select')[0][0]).toEqual(id);
    });
});

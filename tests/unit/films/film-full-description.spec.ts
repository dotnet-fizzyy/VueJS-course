import FilmFullDescription from '@/components/films/FilmFullDescription.vue';
import FiltersPlugin from '@/plugins/filtersPlugin';
import VueLazyload from 'vue-lazyload';
import { createLocalVue, shallowMount } from '@vue/test-utils';

const localVue = createLocalVue();
localVue.use(FiltersPlugin);
localVue.use(VueLazyload);

describe('FilmFullDescription.vue Tests', () => {
    it('Should render', () => {
        //Arrange
        const wrapper = shallowMount(FilmFullDescription, {
            localVue,
            propsData: {
                name: 'Film Name',
                releaseYear: 2022,
                runtime: 120,
                rating: 4.2,
                shortDescription: 'Short Description',
                fullDescription: 'Some Long Film Description',
                posterUrl: 'posterUrl',
                posterAlt: 'posterAlt',
            },
        });

        //Act & Assert
        expect(wrapper.element).toMatchSnapshot();
    });

    it('Should add precision to rating if it is numeral', () => {
        //Arrange
        const numeralRating = 4;

        const wrapper = shallowMount(FilmFullDescription, {
            localVue,
            propsData: {
                name: 'Film Name',
                releaseYear: 2022,
                runtime: 120,
                rating: numeralRating,
                shortDescription: 'Short Description',
                fullDescription: 'Some Long Film Description',
                posterUrl: 'posterUrl',
                posterAlt: 'posterAlt',
            },
        });

        //Act
        const ratingWrapper = wrapper.find('[data-aqa-full-rating]');

        //Assert
        expect(ratingWrapper.element).toBeTruthy();
        expect(ratingWrapper.text()).toEqual(`${numeralRating}.0`);
    });

    it('Should round to up film runtime if it is digit', () => {
        //Arrange
        const originalRuntime = 121.4;
        const expectedRuntime = 122;

        const wrapper = shallowMount(FilmFullDescription, {
            localVue,
            propsData: {
                name: 'Film Name',
                releaseYear: 2022,
                runtime: originalRuntime,
                rating: 4.2,
                shortDescription: 'Short Description',
                fullDescription: 'Some Long Film Description',
                posterUrl: 'posterUrl',
                posterAlt: 'posterAlt',
            },
        });

        //Act
        const filmDescriptionWrappers = wrapper.findAllComponents({ name: 'film-description-item' });
        const runtimeWrapper = filmDescriptionWrappers.wrappers[1];

        //Assert
        expect(runtimeWrapper.element).toBeTruthy();
        expect(runtimeWrapper.attributes('additionallabel')).toEqual('min');
        expect(runtimeWrapper.attributes('keylabel')).toEqual(expectedRuntime.toString());
    });
});

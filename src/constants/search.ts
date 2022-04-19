import { ButtonGroupOption } from '@/components/common/ButtonGroup.vue';
import { SearchOptionNames, SortOptionsNames } from '@/enums/search';

export const SortByOptions: ButtonGroupOption[] = [
    { label: 'Release Date', name: SortOptionsNames.ReleaseDate },
    { label: 'Rating', name: SortOptionsNames.Rating },
];

export const SearchByOptions: ButtonGroupOption[] = [
    { label: 'Title', name: SearchOptionNames.Title },
    { label: 'Genre', name: SearchOptionNames.Genre },
];

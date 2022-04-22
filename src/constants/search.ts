import { ButtonGroupOption } from '@/types/button';
import { SearchByOptionNames, SortByOptionsNames } from '@/enums/search';

export const SortByOptions: ButtonGroupOption[] = [
    { label: 'Release Date', name: SortByOptionsNames.ReleaseDate },
    { label: 'Rating', name: SortByOptionsNames.Rating },
];

export const SearchByOptions: ButtonGroupOption[] = [
    { label: 'Title', name: SearchByOptionNames.Title },
    { label: 'Genre', name: SearchByOptionNames.Genre },
];

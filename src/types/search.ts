import { SearchQueryParams } from '@/enums/search';

export interface SearchParams {
    [SearchQueryParams.SearchTerm]?: string;
    [SearchQueryParams.SearchByOption]: string;
    [SearchQueryParams.SortByOption]: string;
}

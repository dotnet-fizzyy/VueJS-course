import { Dictionary, Route } from 'vue-router/types/router';
import { RawLocation } from 'vue-router';
import { SearchParams } from '@/types/search';
import { SearchQueryParams } from '@/enums/search';

export const getSearchParams = (route: Route): SearchParams => ({
    [SearchQueryParams.SearchTerm]: route.query[SearchQueryParams.SearchTerm] as string,
    [SearchQueryParams.SearchByOption]: route.query[SearchQueryParams.SearchByOption] as string,
    [SearchQueryParams.SortByOption]: route.query[SearchQueryParams.SortByOption] as string,
});

export const areSearchParamsEqual = (
    prevSearchTerm: string,
    prevSortBy: string,
    prevSearchBy: string,
    nextSearchTerm: string,
    nextSortBy: string,
    nextSearchBy: string
): boolean => prevSearchTerm === nextSearchTerm && prevSortBy === nextSortBy && prevSearchBy === nextSearchBy;

export const createSearchUrl = (
    path: string,
    searchTerm: string,
    searchByOption: string,
    sortByOption: string
): RawLocation => {
    const query: SearchParams = {
        [SearchQueryParams.SearchByOption]: searchByOption,
        [SearchQueryParams.SortByOption]: sortByOption,
    };

    if (searchTerm) {
        query[SearchQueryParams.SearchTerm] = searchTerm;
    }

    return {
        path,
        query: query as unknown as Dictionary<string>,
    };
};

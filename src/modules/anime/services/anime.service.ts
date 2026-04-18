import apiClient from '@/core/api/api-client';
import type { JikanPaginatedResponse } from '@/core/types/common';
import type { Anime, AnimeFilters, Genre } from '../types';

export const fetchAnimeList = async (filters: AnimeFilters): Promise<JikanPaginatedResponse<Anime[]>> => {
    const { data } = await apiClient.get<JikanPaginatedResponse<any[]>>('/anime', {
        params: {
            q: filters.query,
            genres: filters.genreId,
            status: filters.status === 'all' ? undefined : filters.status,
            page: filters.page,
            limit: 20,
        },
    });



    return data;
};

export const fetchAnimeById = async (id: number): Promise<Anime> => {
    const { data } = await apiClient.get<{ data: any }>(`/anime/${id}`);

    return data.data
};


export const fetchGenres = async (): Promise<Genre[]> => {
    const { data } = await apiClient.get<{ data: any[] }>('/genres/anime');

    return data.data
};
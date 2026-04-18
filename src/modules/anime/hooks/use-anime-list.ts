import { useQuery } from '@tanstack/react-query';
import { fetchAnimeList } from '../services/anime.service';
import type { AnimeFilters } from '../types';
import { animeKeys } from './query-keys';

export const useAnimeList = (filters: AnimeFilters) => {
    return useQuery({
        queryKey: animeKeys.list(filters),
        queryFn: () => fetchAnimeList(filters),
        // Esto evita que la aplicación haga peticiones si no hay una búsqueda o filtro
        placeholderData: (previousData) => previousData,
    });
};
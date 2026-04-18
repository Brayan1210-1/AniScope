import { useQuery } from '@tanstack/react-query';
import { fetchAnimeById, fetchGenres } from '../services/anime.service';
import { animeKeys } from './query-keys';

export const useAnimeDetail = (id: number) => {
    return useQuery({
        queryKey: animeKeys.detail(id),
        queryFn: () => fetchAnimeById(id),
        enabled: !!id, // Solo se ejecuta si hay un ID válido
    });
};

export const useGenres = () => {
    return useQuery({
        queryKey: animeKeys.genres(),
        queryFn: fetchGenres,
        staleTime: Infinity,
    });
};
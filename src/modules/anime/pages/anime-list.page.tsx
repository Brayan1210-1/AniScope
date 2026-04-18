import { useState } from 'react';
import { useAnimeList, type AnimeFilters } from '../index';

export const AnimeListPage = () => {
    const [filters, setFilters] = useState<AnimeFilters>({
        query: '',
        genreId: null,
        status: 'all',
        page: 1,
    });

    const { data, isLoading, isError } = useAnimeList(filters);

    if (isLoading) return <div>Cargando animes...</div>;
    if (isError) return <div>Error al cargar los datos</div>;

    return (
        <div>
            <h1>Explorador</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {data?.data.map((anime) => (
                    <div key={anime.mal_id} className="border p-4 rounded shadow" >
                        <img src={anime.images.jpg.image_url} alt={anime.title} className="w-full h-64 object-cover" />
                        <h3 className="font-bold mt-2">{anime.title}</h3>
                        <p className="text-sm text-gray-600">{anime.status}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
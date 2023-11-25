import { useQuery } from '@tanstack/react-query';
import genres from '../data/genres';
import APIClient from '../services/api-client';

export interface Genre {
	id: number;
	name: string;
	image_background: string;
}

// const useGenre = () => useData<Genre>('/genres');
// const useGenre = () => ({ data: genres, isLoading: false, error: null });

const apiClient = new APIClient<Genre>('/genres');

const useGenre = () =>
	useQuery({
		queryKey: ['genres'],
		queryFn: () => apiClient.getAll(),
		staleTime: 24 * 60 * 60 * 1000, // 24h
		initialData: genres
	});

export default useGenre;

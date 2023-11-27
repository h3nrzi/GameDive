import { useQuery } from '@tanstack/react-query';
import APIClient from '../services/api-client';
import Game from '../entities/Game';

const useGame = (slug: string) => {
	const apiClient = new APIClient<Game>('/games');

	return useQuery({
		queryKey: ['games', slug],
		queryFn: () => apiClient.get(slug)
	});
};

export default useGame;

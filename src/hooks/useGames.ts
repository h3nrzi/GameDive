import { useQuery } from '@tanstack/react-query';
import { GameQuery } from '../App';
import apiClient, { FetchResponse } from '../services/api-client';
import { Platform } from './usePlatforms';

export interface Game {
	name: string;
	id: number;
	background_image: string;
	parent_platforms: { platform: Platform }[];
	metacritic: number;
	rating_top: number;
}

// const useGames = (gameQuery: GameQuery) =>
// 	useData<Game>(
// 		'/games',
// 		{
// 			params: {
// 				genres: gameQuery.genre?.id,
// 				parent_platforms: gameQuery.platform?.id,
// 				ordering: gameQuery.sortOrder,
// 				search: gameQuery.searchTxt
// 			}
// 		},
// 		[gameQuery]
// 	);

const useGames = (gameQuery: GameQuery) =>
	useQuery<FetchResponse<Game>, Error>({
		queryKey: ['games', gameQuery],
		queryFn: () =>
			apiClient
				.get<FetchResponse<Game>>('/games', {
					params: {
						genres: gameQuery.genre?.id,
						parent_platforms: gameQuery.platform?.id,
						ordering: gameQuery.sortOrder,
						search: gameQuery.searchTxt
					}
				})
				.then((res) => res.data),
		staleTime: 24 * 60 * 60 * 1000 // 24h
	});

export default useGames;

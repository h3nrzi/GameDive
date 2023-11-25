import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { GameQuery } from '../App';
import APIClient, { FetchResponse } from '../services/api-client';
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
// {
// 	params: {
// 		genres: gameQuery.genre?.id,
// 		parent_platforms: gameQuery.platform?.id,
// 		ordering: gameQuery.sortOrder,
// 		search: gameQuery.searchTxt
// 	}
// },
// 		[gameQuery]
// 	);

const apiClient = new APIClient<Game>('/games');

const useGames = (gameQuery: GameQuery) =>
	useInfiniteQuery<FetchResponse<Game>, Error>({
		queryKey: ['games', gameQuery],
		queryFn: ({ pageParam = 1 }) =>
			apiClient.getAll({
				params: {
					genres: gameQuery.genreId,
					parent_platforms: gameQuery.platformId,
					ordering: gameQuery.sortOrder,
					search: gameQuery.searchTxt,
					page: pageParam
				}
			}),
		staleTime: 24 * 60 * 60 * 1000, // 24h
		getNextPageParam: (lastPage, allPages) => {
			return lastPage.next ? allPages.length + 1 : undefined;
		}
	});

export default useGames;

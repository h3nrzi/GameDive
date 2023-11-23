import { GameQuery } from '../App';
import useData from './useData';

export interface Platform {
	id: number;
	name: string;
	slug: string;
}

export interface Game {
	name: string;
	id: number;
	background_image: string;
	parent_platforms: { platform: Platform }[];
	metacritic: number;
	rating_top: number;
}

const useGames = (gameQuery: GameQuery) =>
	useData<Game>(
		'/games',
		{
			params: {
				genres: gameQuery.genre?.id,
				parent_platforms: gameQuery.platform?.id,
				ordering: gameQuery.sortOrder,
				search: gameQuery.searchTxt
			}
		},
		[gameQuery]
	);
export default useGames;

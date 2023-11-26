import { create } from 'zustand';

interface GameQuery {
	genreId?: number | undefined;
	platformId?: number | undefined;
	sortOrder?: string;
	searchTxt?: string;
}

interface gameQueryStore {
	gameQuery: GameQuery;
	setGenreId: (genreId: number) => void;
	setPlatformId: (platformId: number) => void;
	setSortOrder: (sortOrder: string) => void;
	setSearchTxt: (searchTxt: string) => void;
}

const useGameQueryStore = create<gameQueryStore>((set) => ({
	gameQuery: {},
	setSearchTxt(searchTxt) {
		set(() => ({ gameQuery: { searchTxt } }));
	},
	setGenreId(genreId) {
		set((store) => ({ gameQuery: { ...store.gameQuery, genreId: genreId } }));
	},
	setPlatformId(platformId) {
		set((store) => ({ gameQuery: { ...store.gameQuery, platformId: platformId } }));
	},
	setSortOrder(sortOrder) {
		set((store) => ({ gameQuery: { ...store.gameQuery, sortOrder: sortOrder } }));
	}
}));

export default useGameQueryStore;

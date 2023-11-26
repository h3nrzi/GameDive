import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import useGenre from '../hooks/useGenre';
import useGenres from '../hooks/useGenres';
import useGameQueryStore from '../store';

const GenreSelector = () => {
	const { data } = useGenres();
	const setSelectedGenreId = useGameQueryStore((s) => s.setGenreId);

	const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
	const currentGenre = useGenre(selectedGenreId);

	return (
		<Menu>
			<MenuButton as={Button} rightIcon={<BsChevronDown />}>
				{currentGenre ? currentGenre.name : 'Genres'}
			</MenuButton>
			<MenuList>
				{data.results.map((genre) => (
					<MenuItem key={genre.id} onClick={() => setSelectedGenreId(genre.id)}>
						{genre.name}
					</MenuItem>
				))}
			</MenuList>
		</Menu>
	);
};

export default GenreSelector;

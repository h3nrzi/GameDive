import { Heading } from '@chakra-ui/react';
import useGenre from '../hooks/useGenre';
import usePlatform from '../hooks/usePlatform';
import useGameQueryStore from '../store';

const GameHeading = () => {
	const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
	const currentPlatform = usePlatform(platformId);

	const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
	const currentGenre = useGenre(genreId);

	const heading = `${currentPlatform?.name || ''} ${currentGenre?.name || ''} Games`;

	return (
		<Heading as="h1" marginY={5} fontSize="5xl">
			{heading}
		</Heading>
	);
};

export default GameHeading;

import { Heading } from '@chakra-ui/react';
import { GameQuery } from '../App';
import useGenre from '../hooks/useGenre';
import usePlatforms from '../hooks/usePlatforms';

interface Props {
	gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
	const { data: genres } = useGenre();
	const currentGenre = genres?.results.find((g) => g.id === gameQuery.genreId);

	const { data: platforms } = usePlatforms();
	const currentPlatform = platforms?.results.find((p) => p.id === gameQuery.platformId);

	const heading = `${currentPlatform?.name || ''} ${currentGenre?.name || ''} Games`;

	return (
		<Heading as="h1" marginY={5} fontSize="5xl">
			{heading}
		</Heading>
	);
};

export default GameHeading;

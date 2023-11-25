import { Heading } from '@chakra-ui/react';
import { GameQuery } from '../App';
import useGenre from '../hooks/useGenre';
import usePlatform from '../hooks/usePlatform';

interface Props {
	gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
	const currentPlatform = usePlatform(gameQuery.platformId);
	const currentGenre = useGenre(gameQuery.genreId);

	const heading = `${currentPlatform?.name || ''} ${currentGenre?.name || ''} Games`;

	return (
		<Heading as="h1" marginY={5} fontSize="5xl">
			{heading}
		</Heading>
	);
};

export default GameHeading;

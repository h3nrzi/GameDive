import { Card, CardBody, HStack, Heading, Image, useColorMode } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Game from '../entities/Game';
import getCropImageUrl from '../services/image-url';
import CriticScore from './CriticScore';
import Emoji from './Emoji';
import PlatformIconList from './PlatformIconList';

interface Props {
	game: Game;
}

const GameCard = ({ game }: Props) => {
	const { colorMode } = useColorMode();
	const bg = colorMode == 'light' ? 'gray.100' : 'gray.700';

	return (
		<Card>
			<Link to={'/games/' + game.slug}>
				<Image src={getCropImageUrl(game.background_image)} />
				<CardBody backgroundColor={bg}>
					<HStack justifyContent="space-between" marginBottom={3}>
						<PlatformIconList platforms={game.parent_platforms.map(({ platform }) => platform)} />
						<CriticScore score={game.metacritic} />
					</HStack>
					<Heading fontSize="xl">
						{game.name}
						<Emoji rating={game.rating_top} />
					</Heading>
				</CardBody>
			</Link>
		</Card>
	);
};

export default GameCard;

import { Card, CardBody, HStack, Heading, Image } from '@chakra-ui/react';
import { Game } from '../hooks/useGames';
import PlatformIconList from './PlatformIconList';
import CriticScore from './CriticScore';
import getCropImageUrl from '../services/image-url';

interface Props {
	game: Game;
}

const GameCard = ({ game }: Props) => {
	return (
		<Card>
			<Image src={getCropImageUrl(game.background_image)} />
			<CardBody>
				<Heading fontSize="xx-large">{game.name}</Heading>
				<HStack justifyContent="space-between">
					<PlatformIconList
						platforms={game.parent_platforms.map(({ platform }) => platform)}
					/>
					<CriticScore score={game.metacritic} />
				</HStack>
			</CardBody>
		</Card>
	);
};

export default GameCard;
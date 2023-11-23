import { Button, HStack, Image, List, ListItem, Spinner } from '@chakra-ui/react';
import useGenre, { Genre } from '../hooks/useGenre';
import getCropImageUrl from '../services/image-url';

interface Props {
	onSelectedGenre: (genre: Genre) => void;
	selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectedGenre }: Props) => {
	const { data: genres, isLoading, error } = useGenre();

	if (error) return null;
	if (isLoading) return <Spinner />;

	return (
		<List>
			{genres.map((g) => (
				<ListItem key={g.id} paddingY="5px">
					<HStack>
						<Image boxSize="32px" borderRadius={8} src={getCropImageUrl(g.image_background)} />
						<Button
							variant="link"
							fontSize="large"
							onClick={() => onSelectedGenre(g)}
							fontWeight={g.id === selectedGenre?.id ? 'bold' : 'normal'}>
							{g.name}
						</Button>
					</HStack>
				</ListItem>
			))}
		</List>
	);
};

export default GenreList;

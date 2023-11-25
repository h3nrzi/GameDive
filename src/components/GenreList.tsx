import { Button, HStack, Heading, Image, List, ListItem, Spinner } from '@chakra-ui/react';
import useGenre, { Genre } from '../hooks/useGenres';
import getCropImageUrl from '../services/image-url';

interface Props {
	onSelectedGenre: (genre: Genre) => void;
	selectedGenreId?: number;
}

const GenreList = ({ selectedGenreId, onSelectedGenre }: Props) => {
	const { data, isLoading, error } = useGenre();

	// if (error) return null;
	// if (isLoading) return <Spinner />;

	return (
		<>
			<Heading as="h2" fontSize="2xl" marginBottom={3}>
				Genres
			</Heading>
			<List>
				{data?.results.map((genre) => (
					<ListItem key={genre.id} paddingY="5px">
						<HStack>
							<Image
								boxSize="32px"
								borderRadius={8}
								src={getCropImageUrl(genre.image_background)}
								objectFit="cover"
							/>
							<Button
								variant="link"
								fontSize="large"
								onClick={() => onSelectedGenre(genre)}
								fontWeight={genre.id === selectedGenreId ? 'bold' : 'normal'}
								whiteSpace="normal"
								textAlign="left">
								{genre.name}
							</Button>
						</HStack>
					</ListItem>
				))}
			</List>
		</>
	);
};

export default GenreList;

import { Button, HStack, Heading, Image, List, ListItem } from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';
import getCropImageUrl from '../services/image-url';
import useGameQueryStore from '../store';

const GenreList = () => {
	const { data } = useGenres();
	const setSelectedGenreId = useGameQueryStore((s) => s.setGenreId);
	const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);

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
								onClick={() => setSelectedGenreId(genre.id)}
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

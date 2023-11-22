import { HStack, List, ListItem, Image, Text, Spinner } from '@chakra-ui/react';
import useGenre from '../hooks/useGenre';
import getCropImageUrl from '../services/image-url';

const GenreList = () => {
	const { data: genres, isLoading, error } = useGenre();

	if (error) return null;
	if (isLoading) return <Spinner />;

	return (
		<List>
			{genres.map((g) => (
				<ListItem key={g.id} paddingY="5px">
					<HStack>
						<Image
							boxSize="32px"
							borderRadius={8}
							src={getCropImageUrl(g.image_background)}
						/>
						<Text fontSize="large">{g.name}</Text>
					</HStack>
				</ListItem>
			))}
		</List>
	);
};

export default GenreList;

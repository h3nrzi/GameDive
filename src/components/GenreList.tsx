import { HStack, List, ListItem, Image, Text } from '@chakra-ui/react';
import useGenre from '../hooks/useGenre';
import getCropImageUrl from '../services/image-url';

const GenreList = () => {
	const { data: genres } = useGenre();
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

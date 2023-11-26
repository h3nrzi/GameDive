import { Box, Grid, GridItem, HStack, Show } from '@chakra-ui/react';
import GameGrid from '../components/GameGrid';
import GameHeading from '../components/GameHeading';
import GenreList from '../components/GenreList';
import GenreSelector from '../components/GenreSelector';
import PlatformSelector from '../components/PlatformSelector';
import SortSelector from '../components/SortSelector';

const HomePage = () => {
	return (
		<Grid
			templateAreas={{ base: `"main"`, lg: `"aside main"` }}
			templateColumns={{ base: '1fr', lg: '200px 1fr' }}>
			<Show above="lg">
				<GridItem area="aside" paddingX={3} marginTop="165px">
					<GenreList />
				</GridItem>
			</Show>
			<GridItem area="main">
				<Box paddingLeft={3}>
					<GameHeading />
					<HStack spacing={3} marginBottom={5} marginX={2}>
						<PlatformSelector />
						<Show below="lg">
							<GenreSelector />
						</Show>
						<Show above="lg">
							<SortSelector />
						</Show>
					</HStack>
				</Box>
				<GameGrid />
			</GridItem>
		</Grid>
	);
};

export default HomePage;

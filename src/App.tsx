import { Box, Grid, GridItem, HStack, Show } from '@chakra-ui/react';
import GameGrid from './components/GameGrid';
import GameHeading from './components/GameHeading';
import GenreList from './components/GenreList';
import NavBar from './components/NavBar';
import PlatformSelector from './components/PlatformSelector';
import SortSelector from './components/SortSelector';
import GenreSelector from './components/GenreSelector';

const App = () => {
	return (
		<Grid
			templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
			templateColumns={{ base: '1fr', lg: '200px 1fr' }}>
			<GridItem area="nav">
				<NavBar />
			</GridItem>
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

export default App;

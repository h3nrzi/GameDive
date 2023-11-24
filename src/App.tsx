import { Box, Grid, GridItem, HStack, Show } from '@chakra-ui/react';
import { useState } from 'react';
import GameGrid from './components/GameGrid';
import GameHeading from './components/GameHeading';
import GenreList from './components/GenreList';
import NavBar from './components/NavBar';
import PlatformSelector from './components/PlatformSelector';
import SortSelector from './components/SortSelector';
import { Genre } from './hooks/useGenre';
import { Platform } from './hooks/usePlatforms';

export interface GameQuery {
	genre: Genre | null;
	platform: Platform | null;
	sortOrder: string;
	searchTxt: string;
}

const App = () => {
	const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

	return (
		<Grid
			templateAreas={{
				base: `"nav" "main"`,
				lg: `"nav nav" "aside main"`
			}}
			templateColumns={{
				base: '1fr',
				lg: '200px 1fr'
			}}>
			<GridItem area="nav">
				<NavBar
					onSearch={(searchTxt) =>
						setGameQuery({
							...gameQuery,
							searchTxt: searchTxt
						})
					}
				/>
			</GridItem>
			<Show above="lg">
				<GridItem area="aside" paddingX={3} marginTop="165px">
					<GenreList
						onSelectedGenre={(g) =>
							setGameQuery({
								...gameQuery,
								genre: g
							})
						}
						selectedGenre={gameQuery.genre}
					/>
				</GridItem>
			</Show>
			<GridItem area="main">
				<Box paddingLeft={3}>
					<GameHeading gameQuery={gameQuery} />
					<HStack spacing={5} marginBottom={5}>
						<PlatformSelector
							onSelectPlatform={(p) =>
								setGameQuery({
									...gameQuery,
									platform: p
								})
							}
							selectedPlatform={gameQuery.platform}
						/>
						<SortSelector
							onSelectSortOrder={(orderValue) =>
								setGameQuery({
									...gameQuery,
									sortOrder: orderValue
								})
							}
							sortOrder={gameQuery.sortOrder}
						/>
					</HStack>
				</Box>
				<GameGrid gameQuery={gameQuery} />
			</GridItem>
		</Grid>
	);
};

export default App;

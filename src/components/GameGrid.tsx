import { Button, SimpleGrid, Spinner, Text } from '@chakra-ui/react';
import React from 'react';
import { GameQuery } from '../App';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardContainer from './GameCardContainer';
import GameCardSkeleton from './GameCardSkeleton';
import InfiniteScroll from 'react-infinite-scroll-component';
interface Props {
	gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
	const { data, error, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage } = useGames(gameQuery);
	const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

	if (error) return <Text>{error.message}</Text>;

	const fetchedGamesCount = data?.pages.reduce((total, page) => total + page.results.length, 0);

	return (
		<>
			<InfiniteScroll
				dataLength={fetchedGamesCount || 0}
				hasMore={!!hasNextPage}
				next={() => fetchNextPage()}
				loader={<Spinner />}>
				<SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6} padding="10px">
					{isLoading &&
						skeletons.map((s) => (
							<GameCardContainer key={s}>
								<GameCardSkeleton />
							</GameCardContainer>
						))}
					{data?.pages.map((page, index) => (
						<React.Fragment key={index}>
							{page.results.map((game) => (
								<GameCardContainer key={game.id}>
									<GameCard game={game} />
								</GameCardContainer>
							))}
						</React.Fragment>
					))}
				</SimpleGrid>
			</InfiniteScroll>

			{/* {hasNextPage && (
				<Button onClick={() => fetchNextPage()} margin={7} colorScheme="green" variant="outline">
					{isFetchingNextPage ? <Spinner /> : 'Load More'}
				</Button>
			)} */}
		</>
	);
};

export default GameGrid;

new Set();

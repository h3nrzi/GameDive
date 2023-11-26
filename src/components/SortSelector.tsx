import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import useGameQueryStore from '../store';

const SortSelector = () => {
	const setSelectedSortOrder = useGameQueryStore((s) => s.setSortOrder);

	const sortOrders = [
		{ value: '', label: 'Relevance' },
		{ value: '-added', label: 'Date added' },
		{ value: 'name', label: 'Name' },
		{ value: '-release', label: 'Release date' },
		{ value: '-metacritic', label: 'Popularity' },
		{ value: '-rating', label: 'Average rating' }
	];

	const sortOrder = useGameQueryStore((s) => s.gameQuery.sortOrder);
	const currentSortOrder = sortOrders.find((order) => order.value === sortOrder);

	return (
		<Menu>
			<MenuButton as={Button} rightIcon={<BsChevronDown />}>
				Order by: {currentSortOrder ? currentSortOrder.label : 'Relevance'}
			</MenuButton>
			<MenuList>
				{sortOrders.map((order) => (
					<MenuItem key={order.value} value={order.value} onClick={() => setSelectedSortOrder(order.value)}>
						{order.label}
					</MenuItem>
				))}
			</MenuList>
		</Menu>
	);
};

export default SortSelector;

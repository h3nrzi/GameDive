import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import usePlatform from '../hooks/usePlatform';
import usePlatforms from '../hooks/usePlatforms';
import useGameQueryStore from '../store';

const PlatformSelector = () => {
	const { data } = usePlatforms();
	const setSelectedPlatformId = useGameQueryStore((s) => s.setPlatformId);

	const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platformId);
	const currentPlatform = usePlatform(selectedPlatformId);

	return (
		<Menu>
			<MenuButton as={Button} rightIcon={<BsChevronDown />}>
				{currentPlatform ? currentPlatform.name : 'Platforms'}
			</MenuButton>
			<MenuList>
				{data?.results.map((platform) => (
					<MenuItem key={platform.id} onClick={() => setSelectedPlatformId(platform.id)}>
						{platform.name}
					</MenuItem>
				))}
			</MenuList>
		</Menu>
	);
};

export default PlatformSelector;

import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import usePlatforms, { Platform } from '../hooks/usePlatforms';
import usePlatform from '../hooks/usePlatform';

interface Props {
	onSelectPlatform: (platform: Platform) => void;
	selectedPlatformId?: number;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatformId }: Props) => {
	const { data, isLoading, error } = usePlatforms();
	const currentPlatform = usePlatform(selectedPlatformId);

	// if (error) return null;

	return (
		<Menu>
			<MenuButton as={Button} rightIcon={<BsChevronDown />}>
				{currentPlatform ? currentPlatform.name : 'Platforms'}
			</MenuButton>
			<MenuList>
				{data?.results.map((platform) => (
					<MenuItem key={platform.id} onClick={() => onSelectPlatform(platform)}>
						{platform.name}
					</MenuItem>
				))}
			</MenuList>
		</Menu>
	);
};

export default PlatformSelector;

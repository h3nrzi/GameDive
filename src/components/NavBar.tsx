import { HStack, Image, useColorMode } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo-game-dive.png';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';

const NavBar = () => {
	const { colorMode } = useColorMode();
	const bg = colorMode === 'light' ? 'gray.800' : '';

	return (
		<HStack padding="10px" spacing={1}>
			<Link to="/">
				<Image src={logo} boxSize="50px" bg={bg} borderRadius="10" objectFit="contain" />
			</Link>
			<SearchInput />
			<ColorModeSwitch />
		</HStack>
	);
};

export default NavBar;

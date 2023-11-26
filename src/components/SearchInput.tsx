import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { useRef } from 'react';
import { BsSearch } from 'react-icons/bs';
import useGameQueryStore from '../store';

const SearchInput = () => {
	const setSearchTxt = useGameQueryStore((s) => s.setSearchTxt);
	const ref = useRef<HTMLInputElement>(null);

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();

				if (ref.current) setSearchTxt(ref.current.value);
			}}>
			<InputGroup>
				<InputLeftElement children={<BsSearch />} />
				<Input borderRadius={20} placeholder="Search games..." variant="filled" ref={ref} />;
			</InputGroup>
		</form>
	);
};

export default SearchInput;

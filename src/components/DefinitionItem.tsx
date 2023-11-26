import { Badge, Box, Heading, useColorMode } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface Props {
	term: string;
	children: ReactNode | ReactNode[];
}

const DefinitionItem = ({ term, children }: Props) => {
	return (
		<Box marginY={5}>
			<Badge as="dt" fontSize="md" colorScheme="gray">
				{term}
			</Badge>
			<dd>{children}</dd>
		</Box>
	);
};

export default DefinitionItem;

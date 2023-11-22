import React, {type ReactElement, useState} from 'react';
import {Box, Button, Input} from '@mui/material';
import {Search} from '@mui/icons-material';

interface SearchInputProps {
	placeholder?: string;
	onSearch: (value: string) => void;
	disableUnderline?: boolean;
}

const SearchInput = ({placeholder, disableUnderline, onSearch}: SearchInputProps): ReactElement => {
	const [searchValue, setSearchValue] = useState<string>('');

	return (
		<Box
			pl={1}
			display={'flex'}
			flexDirection={'row'}
			overflow={'hidden'}
			borderRadius={'50px'}
			border={'1px solid #ccc'}
		>
			<Input
				placeholder={placeholder}
				fullWidth={true}
				startAdornment={<Search/>}
				disableUnderline={disableUnderline}
				value={searchValue}
				onChange={(e) => setSearchValue(e.target.value)}
			/>

			<Button
				variant={'contained'}
				onClick={() => onSearch(searchValue)}
				sx={{borderRadius: 0}}
			>
				Search
			</Button>
		</Box>
	);
};

export default SearchInput;

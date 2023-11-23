import React, {type ReactElement, useState} from 'react';
import {Box, Button, Input} from '@mui/material';
import {Close, Search} from '@mui/icons-material';

interface SearchInputProps {
	placeholder?: string;
	onSearch: (value: string) => void;
	resetSearch?: () => void;
	disableUnderline?: boolean;
}

const SearchInput = ({placeholder, disableUnderline, onSearch, resetSearch}: SearchInputProps): ReactElement => {
	const [searchValue, setSearchValue] = useState<string>('');

	const ResetSearch = () => {
		if (searchValue === '' || !resetSearch) return null;

		return <Close sx={{paddingRight: 1}} onClick={() => {
			setSearchValue('');
			resetSearch();
		}}/>;
	};

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
				endAdornment={<ResetSearch/>}
				disableUnderline={disableUnderline}
				value={searchValue}
				onChange={(e) => setSearchValue(e.target.value)}
				onKeyDown={(e) => e.key === 'Enter' && onSearch(searchValue)}
			/>

			<Button variant={'contained'} onClick={() => onSearch(searchValue)} sx={{borderRadius: 0, px: 4}}>
				Search
			</Button>
		</Box>
	);
};

export default SearchInput;

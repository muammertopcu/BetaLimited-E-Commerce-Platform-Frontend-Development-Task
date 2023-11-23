import React, {type ReactElement} from 'react';
import {AppBar, Container, Grid, Toolbar} from '@mui/material';
import {SearchInput} from '@/components';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '@/redux/store';
import {searchProducts} from '@/redux/slices/productSlice';

const Header = (): ReactElement => {
	const dispatch = useDispatch<AppDispatch>();

	const handleSearch = (value: string) => {
		dispatch(searchProducts(value));
	}

	return (
		<AppBar position={'static'} sx={{backgroundColor: '#FFF'}}>
			<Container maxWidth={'xl'}>
				<Toolbar>
					<Grid container alignItems={'center'} my={2}>
						<Grid item xs={12} sm={6} md={4} lg={3} xl={2} mb={1} display={'flex'} justifyContent={{
							xs: 'center',
							sm: 'flex-start'
						}}>
							<img src={require('@/assets/img/logo.png')} alt={'logo'} className={'logo-img'}/>
						</Grid>

						<Grid item xs={12} sm={6} md={8} lg={9} xl={10} mt={1}>
							<SearchInput
								placeholder={'Searching for...'}
								onSearch={handleSearch}
								disableUnderline={true}
							/>
						</Grid>
					</Grid>
				</Toolbar>
			</Container>
		</AppBar>
	);
};

export default Header;

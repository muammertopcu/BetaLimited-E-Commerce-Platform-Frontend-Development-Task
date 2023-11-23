import React, {type ReactElement, useEffect} from 'react';
import {EmptyCard, ProductCard} from '@/components';
import {Backdrop, CircularProgress, Grid} from '@mui/material';
import {Product} from '@/types';
import {useDispatch, useSelector} from 'react-redux';
import type {AppDispatch, RootState} from '@/redux/store';
import {getProducts} from '@/redux/slices/productSlice';
import {getCart} from '@/redux/slices/cartSlice';

function Home(): ReactElement {
	const dispatch = useDispatch<AppDispatch>();
	const {products, status} = useSelector((state: RootState) => state.product);
	const {cart} = useSelector((state: RootState) => state.cart);
	const isLoading = status === 'loading';

	useEffect(() => {
		const getProduct = () => dispatch(getProducts());
		const getCartItems = () => dispatch(getCart());

		getProduct();
		getCartItems();
	}, [dispatch]);

	if (status === 'idle' && products.length === 0) {
		return <EmptyCard message={'No products available'}/>;
	}

	return (
		<Grid container p={5} spacing={3}>
			{products.map((product: Product) => (
				<Grid item xs={12} sm={6} md={4} key={product.id}>
					<ProductCard
						product={product}
						cartItem={cart?.find((item) => item.productId === product.id)}
					/>
				</Grid>
			))}

			<Backdrop open={isLoading} sx={{zIndex: (theme) => theme.zIndex.drawer + 1}}>
				<CircularProgress color={'primary'}/>
			</Backdrop>
		</Grid>
	);
}

export default Home;

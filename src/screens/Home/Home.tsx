import React, {type ReactElement, useEffect} from 'react';
import {Layout, ProductCard} from '@/components';
import {Grid} from '@mui/material';
import {Product} from '@/types';
import {useDispatch, useSelector} from 'react-redux';
import type {AppDispatch, RootState} from '@/redux/store';
import {getProducts} from '@/redux/slices/productSlice';
import {getCart} from '@/redux/slices/cartSlice';

function Home(): ReactElement {
	const dispatch = useDispatch<AppDispatch>();
	const {products} = useSelector((state: RootState) => state.product);
	const {cart} = useSelector((state: RootState) => state.cart);

	useEffect(() => {
		const getProduct = () => dispatch(getProducts()).catch((err) => console.log(err));
		const getCartItems = () => dispatch(getCart()).catch((err) => console.log(err));

		getProduct();
		getCartItems();
	}, [dispatch]);

	return (
		<Layout>
			<Grid container p={5} spacing={3}>
				{
					products.map((product: Product) => (
						<Grid item xs={12} sm={6} md={4} key={product.id}>
							<ProductCard
								product={product}
								cartItem={cart.find((item) => item.productId === product.id)}
							/>
						</Grid>
					))
				}
			</Grid>
		</Layout>
	);
}

export default Home;

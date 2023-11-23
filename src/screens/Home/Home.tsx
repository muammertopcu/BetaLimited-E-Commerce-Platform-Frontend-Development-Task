import React, {type ReactElement, useEffect} from 'react';
import {Layout, ProductCard} from '@/components';
import {Grid} from '@mui/material';
import {Product} from '@/types';
import {useDispatch, useSelector} from 'react-redux';
import type {AppDispatch, RootState} from '@/redux/store';
import {getProducts} from '@/redux/slices/productSlice';

function Home(): ReactElement {
	const dispatch = useDispatch<AppDispatch>();
	const {products} = useSelector((state: RootState) => state.product);

	useEffect(() => {
		const getProduct = async () => {
			await dispatch(getProducts());
		};

		getProduct().catch((err) => console.log(err));
	}, [dispatch]);

	return (
		<Layout>
			<Grid container p={5} spacing={3}>
				{
					products.map((product: Product) => (
						<Grid item xs={12} sm={6} md={4} key={product.id}>
							<ProductCard product={product}/>
						</Grid>
					))
				}
			</Grid>
		</Layout>
	);
}

export default Home;

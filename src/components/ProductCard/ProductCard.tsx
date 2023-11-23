import {Box, Grid, Rating, Typography} from '@mui/material';
import {CartItem, type Product} from '@/types';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '@/redux/store';
import {addToCart, getCart, subtractFromCart} from '@/redux/slices/cartSlice';
import {CartActionCard, Image} from '@/components';

interface ProductCardProps {
	product: Product;
	cartItem?: CartItem;
}

const ProductCard = ({product, cartItem}: ProductCardProps) => {
	const dispatch = useDispatch<AppDispatch>();

	const addToCartHandler = () => {
		dispatch(addToCart(product.id));
		setTimeout(() => dispatch(getCart()), 100);
	};

	const subtractFromCartHandler = () => {
		dispatch(subtractFromCart(product.id));
		setTimeout(() => dispatch(getCart()), 100);
	};

	return (
		<Box boxShadow={1} borderRadius={1} position={'relative'}>
			<Image src={product.image} alt={product.name}/>

			<Box p={2}>
				<Grid container>
					<Grid item xs={10}>

						<Rating value={product.rating} size={'small'} readOnly/>

						<Typography variant={'body1'} fontWeight={'bold'}>{product.name}</Typography>

						<Box display={'flex'} flexDirection={'row'} alignItems={'center'}>
							<Typography variant={'body1'} color={'primary'} fontWeight={'bold'}>
								${product.price}
							</Typography>

							<Typography
								variant={'body2'}
								color={'text.secondary'}
								sx={{textDecoration: 'line-through'}}
								ml={1}
							>
								${product.originalPrice}
							</Typography>
						</Box>
					</Grid>

					<Grid item xs={2} display={'flex'} justifyContent={'flex-end'}>
						{
							cartItem && (
								<CartActionCard
									cartItem={cartItem}
									addToCartHandler={addToCartHandler}
									subtractFromCartHandler={subtractFromCartHandler}
								/>
							)
						}
					</Grid>
				</Grid>
			</Box>

			<Box
				position={'absolute'}
				top={15}
				left={15}
				bgcolor={'primary.main'}
				color={'white'}
				borderRadius={5}
				py={0.5}
				px={2}
			>
				<Typography fontSize={12}>{product.discount}</Typography>
			</Box>
		</Box>
	);
};

export default ProductCard;

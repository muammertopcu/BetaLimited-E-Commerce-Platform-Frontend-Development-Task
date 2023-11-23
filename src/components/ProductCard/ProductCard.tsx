import {Box, Grid, Rating, Typography} from '@mui/material';
import {Add, Remove} from '@mui/icons-material';
import {Product} from '@/types';

interface ProductCardProps {
	product: Product;
}

const ProductCard = ({product}: ProductCardProps) => {
	return (
		<Box boxShadow={1} borderRadius={1} p={3} position={'relative'}>
			<img src={product.image} alt={product.name} width={'100%'}/>

			<Box>
				<Rating value={product.rating} size={'small'} readOnly/>

				<Typography variant={'body1'} fontWeight={'bold'}>{product.name}</Typography>

				<Grid container>
					<Grid item xs={10}>
						<Box display={'flex'} flexDirection={'row'} alignItems={'center'}>
							<Typography variant={'body1'} color={'primary'} fontWeight={'bold'}>
								${product.price}
							</Typography>
							<Box mx={.3}/>
							<Typography variant={'body2'} color={'text.secondary'}
										sx={{textDecoration: 'line-through'}}>
								${product.originalPrice}
							</Typography>
						</Box>
					</Grid>

					<Grid item xs={2} display={'flex'} justifyContent={'flex-end'}>
						<Remove color={'primary'} onClick={() => null}/>
						<Box mx={.5}/>
						<Typography variant={'body1'} color={'text.primary'} fontWeight={'bold'}>
							1
						</Typography>
						<Box mx={.5}/>
						<Add color={'primary'} onClick={() => null}/>
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
				<Typography>{product.discount}</Typography>
			</Box>
		</Box>
	);
};

export default ProductCard;

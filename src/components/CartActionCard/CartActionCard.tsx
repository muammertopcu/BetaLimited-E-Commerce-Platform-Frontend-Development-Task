import {Box, Typography} from '@mui/material';
import {Add, Remove} from '@mui/icons-material';
import {type CartItem} from '@/types';

interface CartActionCardProps {
	addToCartHandler: () => void;
	subtractFromCartHandler: () => void;
	cartItem: CartItem;
}

const CartActionCard = ({addToCartHandler, subtractFromCartHandler, cartItem}: CartActionCardProps) => {
	return (
		<Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
			<Remove color={'primary'} onClick={subtractFromCartHandler} sx={{
				cursor: 'pointer',
				opacity: cartItem.quantity ? 1 : 0,
				border: '1px solid',
				borderColor: 'primary',
				borderRadius: 1,
			}}/>

			<Typography variant={'body1'} color={'text.primary'} my={1} fontWeight={'bold'} sx={{
				opacity: cartItem.quantity ? 1 : 0
			}}>
				{cartItem.quantity || 0}
			</Typography>

			<Add color={'primary'} onClick={addToCartHandler} sx={{
				cursor: 'pointer',
				border: '1px solid',
				borderColor: 'primary',
				borderRadius: 1,
			}}/>
		</Box>
	);
};

export default CartActionCard;

import {configureStore} from '@reduxjs/toolkit';
import {cartSlice, productSlice} from '@/redux/slices';

export const store = configureStore({
	reducer: {
		product: productSlice,
		cart: cartSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

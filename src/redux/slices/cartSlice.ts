import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {type CartItem} from '@/types';
import {api} from '@/services';

export const getCart = createAsyncThunk(
	'cart/getCart',
	async () => {
		const {data} = await api.get('/interview/view-cart');
		return data;
	},
);

export const addToCart = createAsyncThunk(
	'cart/addToCart',
	async (id: string) => {
		const {data} = await api.post(`/interview/add-to-cart?id=${id}`);
		return data;
	},
);

export const subtractFromCart = createAsyncThunk(
	'cart/subtractFromCart',
	async (id: string) => {
		const {data} = await api.post(`/interview/subtract-from-cart?id=${id}`);
		return data;
	},
);

export interface CartSliceState {
	cart: CartItem[];
}

const initialState: CartSliceState = {
	cart: [],
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getCart.fulfilled, (state, action) => {
			state.cart = action.payload;
		});
	},
});

export default cartSlice.reducer;

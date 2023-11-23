import {type Product} from '@/types';
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {api} from '@/services';

export const getProducts = createAsyncThunk(
	'product/getProducts',
	async () => {
		const {data} = await api.get('/interview/products');
		return data;
	},
);

export const searchProducts = createAsyncThunk(
	'product/searchProducts',
	async (searchTerm: string) => {
		const {data} = await api.get(`/interview/search?name=${searchTerm}`);
		return data;
	},
);

export interface ProductSliceState {
	products: Product[];
}

const initialState: ProductSliceState = {
	products: [],
};

const productSlice = createSlice({
	name: 'product',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getProducts.fulfilled, (state, action) => {
			state.products = action.payload;
		});
		builder.addCase(searchProducts.fulfilled, (state, action) => {
			state.products = action.payload;
		});
	},
});

export default productSlice.reducer;

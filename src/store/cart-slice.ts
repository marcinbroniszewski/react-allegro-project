import { createSlice } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

export interface CartItemInterface {
	id: string
	name: string
	price: number
	quantity: number
	totalPrice: number
	img: string
}

export interface CartState {
	items: CartItemInterface[]
}

const initialState: CartState = { items: [] }

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart(state, action) {
			const existingItem = state.items.find(item => item.id === action.payload.id)

			if (existingItem) {
				existingItem.quantity++
			} else {
				state.items.push(action.payload)
			}
		},
		removeFromCart(state, action) {
			const existingItem = state.items.find(item => item.id === action.payload.id)

			if (existingItem) {
				existingItem.quantity--
			}
		},
		updateItemQuantity(state, action) {
			const existingItem = state.items.find(item => item.id === action.payload.id)

			if (existingItem) {
				existingItem.quantity = action.payload.quantity
			}
		},
		deleteFromCart(state,action) {
			const existingItem = state.items.find(item => item.id === action.payload.id)

			if (existingItem) {
				const filteredArray = state.items.filter(item => item.id !== existingItem.id) 

				state.items = filteredArray
			}
		}
		
	},
})

const persistConfig = {
	key: 'cart',
	storage,
}

export default persistReducer(persistConfig, cartSlice.reducer)
export const { addToCart, removeFromCart, updateItemQuantity, deleteFromCart } = cartSlice.actions

import { createSlice } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

export interface CartItemInterface {
	id: string
	name: string
	price: number
	quantity: number
	img: string
}

export interface CartState {
	items: CartItemInterface[],
	totalPrice: number
}

const initialState: CartState = { items: [],
totalPrice: 0 }

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart(state, action) {
			const existingItem = state.items.find(item => item.id === action.payload.id)

			if (existingItem) {
				existingItem.quantity += action.payload.quantity
			} else {
				state.items.push(action.payload)
			}

			state.totalPrice += action.payload.price * action.payload.quantity
		},
		removeFromCart(state, action) {
			const existingItem = state.items.find(item => item.id === action.payload.id)

			if (existingItem) {
				existingItem.quantity--
				state.totalPrice -= action.payload.price
			}
		},
		updateItemQuantity(state, action) {
			const existingItem = state.items.find(item => item.id === action.payload.id)

			if (existingItem) {
				state.totalPrice += (action.payload.quantity - existingItem.quantity) * existingItem.price;
				existingItem.quantity = action.payload.quantity
			}
		},
		deleteFromCart(state,action) {
			const existingItem = state.items.find(item => item.id === action.payload.id)

			if (existingItem) {
				state.totalPrice -= existingItem.quantity * existingItem.price
				const filteredArray = state.items.filter(item => item.id !== existingItem.id) 

				state.items = filteredArray
			}
		},
		clearCart(state) {
			return initialState
		}
	},
})

const persistConfig = {
	key: 'cart',
	storage,
}

export default persistReducer(persistConfig, cartSlice.reducer)
export const { addToCart, removeFromCart, updateItemQuantity, deleteFromCart, clearCart } = cartSlice.actions

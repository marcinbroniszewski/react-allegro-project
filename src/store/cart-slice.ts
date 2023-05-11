import { createSlice } from '@reduxjs/toolkit'

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

const initialState: CartState = { items: JSON.parse(localStorage.getItem('cart')!) || [] }

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

			localStorage.setItem('cart', JSON.stringify(state.items))
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

export default cartSlice.reducer
export const { addToCart, removeFromCart, updateItemQuantity, deleteFromCart } = cartSlice.actions

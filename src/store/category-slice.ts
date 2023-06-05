import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export interface CategoryState {
	selectedCategory: string
	selectedSubcategory: string
	selectedSubSubcategory: string
	categorySelectionTab: boolean
}

const initialState: CategoryState = {
	selectedCategory: '',
    selectedSubcategory: '',
    selectedSubSubcategory: '',
	categorySelectionTab: false,
}

const categorySlice = createSlice({
	name: 'category',
	initialState,
	reducers: {
		setCategory: (state, action: PayloadAction<string>) => {
			state.selectedCategory = action.payload
		},
        setSubcategory: (state, action: PayloadAction<string>) => {
state.selectedSubcategory = action.payload
        },
        setSubSubcategory: (state, action: PayloadAction<string>) => {
state.selectedSubSubcategory = action.payload
        },
		toggleSelectionTab: (state, action : PayloadAction<boolean>) => {
			state.categorySelectionTab = action.payload
		},
	},
})

export default categorySlice.reducer
export const { setCategory, setSubcategory, setSubSubcategory, toggleSelectionTab } = categorySlice.actions
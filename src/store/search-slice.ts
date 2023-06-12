import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface SearchState {
    matchingObjects: any[]
}

const initialState: SearchState = {
    matchingObjects: []
}

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setMatchingObjects: (state, action: PayloadAction<any[]>)=> {
state.matchingObjects = action.payload
        }
    }
})

export default searchSlice.reducer
export const {setMatchingObjects} = searchSlice.actions
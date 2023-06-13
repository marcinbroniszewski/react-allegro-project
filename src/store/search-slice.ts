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

interface Product {
	title: string
    link: string
}

export function createMatchingObjects(data: any, searchValue: string, selectValue: string): Product[] {
    const matchingObjects: Product[] = [];
  
    const searchInData = (data: any, categoryPath: string[] = []) => {
      if (typeof data === 'object' && data !== null) {
        for (const key in data) {
          const value = data[key];
  
          if (key === 'title' && typeof value === 'string' && value.toLowerCase().includes(searchValue.toLowerCase())) {
            const link = `/${categoryPath.join('/')}`
            matchingObjects.push({ ...data, link });
          } else {
            searchInData(value, [...categoryPath, key])
          }
        }
      }
    };
  
    if (selectValue === 'all-categories') {
        searchInData(data);
    } else {
      const selectedCategory = data[selectValue];
      const categoryPath = selectValue.split('/');
      searchInData(selectedCategory, categoryPath);
    }
  
    return matchingObjects;
  }
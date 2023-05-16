import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

export interface AuthStateInterface  {
  user: {
    uid: string,
    email: any
  } | null
}

const initialState: AuthStateInterface = {
  user: null
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<AuthStateInterface['user']>) => {
      state.user = action.payload
    }
  },
});

const persistConfig = {
  key: 'auth',
  storage: storage,
  whitelist: ['user']
};

const persistedReducer = persistReducer(persistConfig, authSlice.reducer);

export default persistedReducer;
export const {setUser} = authSlice.actions;
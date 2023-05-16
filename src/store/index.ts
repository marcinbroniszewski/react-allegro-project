import { configureStore} from "@reduxjs/toolkit";
import cartReducer from "./cart-slice";
import { persistStore } from "redux-persist";
import authReducer from "./auth-slice";
import thunk from 'redux-thunk'

const store = configureStore({
    reducer: {
        cart: cartReducer,
        auth: authReducer
    },
    middleware: [thunk]
})

export const persistor = persistStore(store)
export default store
export type RootState = ReturnType<typeof store.getState>
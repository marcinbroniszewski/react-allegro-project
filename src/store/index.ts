import { configureStore} from "@reduxjs/toolkit";
import cartReducer from "./cart-slice";
import { persistStore } from "redux-persist";
import authReducer from "./auth-slice";
import thunk from 'redux-thunk'
import categoryReducer from "./category-slice";
import searchReducer from "./search-slice";

const store = configureStore({
    reducer: {
        cart: cartReducer,
        auth: authReducer,
        category: categoryReducer,
        search: searchReducer
    },
    middleware: [thunk]
})

export const persistor = persistStore(store)
export default store
export type RootState = ReturnType<typeof store.getState>

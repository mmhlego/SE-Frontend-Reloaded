import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/user";

// Redux store
export const store = configureStore({
	reducer: {
		user: userReducer
	}
});

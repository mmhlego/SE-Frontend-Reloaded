import { configureStore } from "@reduxjs/toolkit";
import users from "./reducers/Users";

// Redux store
export const store = configureStore({
	reducer: {
		users: users
	}
});

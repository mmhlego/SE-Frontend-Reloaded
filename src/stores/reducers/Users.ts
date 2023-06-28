import { createSlice } from "@reduxjs/toolkit";
import UserData from "../../models/UserData";

const item = localStorage.getItem("user");

const initialStateUser: UserData = item
	? JSON.parse(item)
	: {
			expiresIn: "",
			jwtToken: "",
			role: "",
			username: ""
	  };

// This is user reducer
export const userSlice = createSlice({
	name: "user",
	initialState: initialStateUser,
	reducers: {
		login: (
			state: UserData,
			action: {
				type: string;
				payload: UserData;
			}
		) => {
			state = action.payload;
			return state;
		},
		logOut: (state) => {
			state = {
				expiresIn: "",
				jwtToken: "",
				role: "",
				username: ""
			};
			return state;
		}
	}
});

export const { login, logOut } = userSlice.actions;

export default userSlice.reducer;

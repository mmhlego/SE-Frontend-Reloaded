import { createContext, useEffect, useState } from "react";
import { Roles } from "../models/Types";
import axios from "axios";
import { GetCurrentCart } from "../apis/OrderApis";
import { Order } from "../models/Order";

interface Context {
	loggedIn: boolean;
	username: string;
	role: Roles | undefined;
	cart: Order | undefined;
	setLoggedIn: (val: boolean) => void;
	setUsername: (val: string) => void;
	setRole: (val: Roles) => void;
	setCart: (val: Order | undefined) => void;
}

export const MainContext = createContext<Context>({
	loggedIn: false,
	username: "",
	role: undefined,
	cart: undefined,
	setLoggedIn: () => {},
	setUsername: () => {},
	setRole: () => {},
	setCart: () => {}
});

export const ContextProvider = ({ children }: { children: JSX.Element[] | JSX.Element }) => {
	const [loggedIn, setLoggedIn] = useState<boolean>(false);
	const [username, setUsername] = useState<string>("");
	const [role, setRole] = useState<Roles>();
	const [cart, setCart] = useState<Order | undefined>(undefined);

	// 	useEffect(() => {
	// 		const jwt = localStorage.getItem("jwt");
	// 		const username = localStorage.getItem("username")!;
	// 		const role = localStorage.getItem("role")!;
	//
	// 		if (jwt !== null) {
	// 			axios.defaults.headers.common.Authorization = `Bearer ${jwt}`;
	// 			setUsername(username!);
	// 			setLoggedIn(true);
	// 			setRole(role as Roles);
	// 		}
	// 	}, []);

	const ctx = {
		loggedIn,
		username,
		role,
		cart,
		setLoggedIn,
		setUsername,
		setRole,
		setCart
	};

	return <MainContext.Provider value={ctx}>{children}</MainContext.Provider>;
};

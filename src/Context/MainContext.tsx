import { createContext, useEffect, useState } from "react";
import { Roles } from "../models/Types";

interface Context {
	loggedIn: boolean;
	username: string;
	role: Roles | undefined;
	setLoggedIn: (val: boolean) => void;
	setUsername: (val: string) => void;
	setRole: (val: Roles) => void;
}

export const MainContext = createContext<Context>({
	loggedIn: false,
	username: "",
	role: undefined,
	setLoggedIn: () => {},
	setUsername: () => {},
	setRole: () => {}
});

export const ContextProvider = ({ children }: { children: JSX.Element[] | JSX.Element }) => {
	const [loggedIn, setLoggedIn] = useState<boolean>(false);
	const [username, setUsername] = useState<string>("");
	const [role, setRole] = useState<Roles>();

	useEffect(() => {}, []);

	const ctx = {
		loggedIn,
		username,
		role,
		setLoggedIn,
		setUsername,
		setRole
	};

	return <MainContext.Provider value={ctx}>{children}</MainContext.Provider>;
};

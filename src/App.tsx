import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "font-awesome/css/font-awesome.min.css";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router";
import { router } from "./routes/Routes";
import { store } from "./stores/Store";
import { useContext, useLayoutEffect } from "react";
import axios from "axios";
import { ContextProvider, MainContext } from "./Context/MainContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GetCurrentCart } from "./apis/OrderApis";
import { Roles } from "./models/Types";

function App() {
	const client = new QueryClient();

	const ctx = useContext(MainContext);

	useLayoutEffect(() => {
		axios.defaults.baseURL = "http://localhost:6060/";
		axios.defaults.headers.common["Content-Type"] = "application/json";
		axios.defaults.headers["Access-Control-Allow-Origin"] = "*";

		const jwt = localStorage.getItem("jwt");
		const username = localStorage.getItem("username")!;
		const role = localStorage.getItem("role")!;

		if (jwt !== null) {
			axios.defaults.headers.common.Authorization = `Bearer ${jwt}`;
			ctx.setUsername(username!);
			ctx.setLoggedIn(true);
			ctx.setRole(role as Roles);
		}

		setInterval(() => {
			console.log(ctx.loggedIn);
			console.log(ctx.role);
			if (ctx.loggedIn && ctx.role === "Customer") {
				GetCurrentCart()
					.then((res) => {
						ctx.setCart(res);

						console.log(res);
					})
					.catch(() => {
						ctx.setCart(undefined);
					});
			}
		}, 5000);
	}, []);

	return (
		// <ContextProvider>
		<Provider store={store}>
			<QueryClientProvider client={client}>
				<RouterProvider router={router} />
				<ToastContainer position="bottom-right" />
			</QueryClientProvider>
		</Provider>
		// </ContextProvider>
	);
}

export default App;

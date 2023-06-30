import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "font-awesome/css/font-awesome.min.css";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router";
import { router } from "./routes/Routes";
import { store } from "./stores/Store";
import { useLayoutEffect } from "react";
import axios from "axios";
import { ContextProvider } from "./Context/MainContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
	const client = new QueryClient();

	useLayoutEffect(() => {
		axios.defaults.baseURL = "http://localhost:6060/";
		axios.defaults.headers.common["Content-Type"] = "application/json";
		axios.defaults.headers["Access-Control-Allow-Origin"] = "*";
	}, []);

	return (
		<ContextProvider>
			<Provider store={store}>
				<QueryClientProvider client={client}>
					<RouterProvider router={router} />
					<ToastContainer position="bottom-right" />
				</QueryClientProvider>
			</Provider>
		</ContextProvider>
	);
}

export default App;

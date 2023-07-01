import "font-awesome/css/font-awesome.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/Colors.scss";
import "./styles/index.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ContextProvider } from "./Context/MainContext.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<ContextProvider>
			<App />
		</ContextProvider>
	</React.StrictMode>
);

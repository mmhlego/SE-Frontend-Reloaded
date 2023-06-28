import "font-awesome/css/font-awesome.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/Colors.scss";
import "./styles/index.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

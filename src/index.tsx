import "./assets/tailwind/index.css";
import "./assets/css/global.css";
import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./module/home";
import reportWebVitals from "./reportWebVitals";
import Layout from "shared/components/Layout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	<React.StrictMode>
		<ToastContainer theme="dark" autoClose={700} />
		<Layout>
			<Home />
		</Layout>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

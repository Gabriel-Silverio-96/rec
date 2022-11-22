import "./assets/tailwind/index.css";
import "./assets/css/global.css";
import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./module/home";
import reportWebVitals from "./reportWebVitals";
import Layout from "shared/components/Layout";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
	<React.StrictMode>
		<Layout>
			<Home />
		</Layout>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React, { createContext } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App";
import UserStore from "./store/UserStore";
import RegPage from "./pages/RegPage/RegPage";
export const Context = createContext(null);

console.log("http://localhost:8000/");

ReactDOM.render(
	<Context.Provider
		value={{
			userStore: new UserStore(),
		}}
	>
		<App />
	</Context.Provider>,
	document.getElementById("root")
);

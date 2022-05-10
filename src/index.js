import React, { createContext } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App";
import UserStore from "./store/UserStore";
import AnnounStore from "./store/AnnounStore";
import RegPage from "./pages/RegPage";
import BasketStore from "./store/BasketStore";
export const Context = createContext(null);

// console.log("http://localhost:8000/");

ReactDOM.render(
	<Context.Provider
		value={{
			userStore: new UserStore(),
			announStore: new AnnounStore(),
			basketStore: new BasketStore(),
		}}
	>
		<App />
	</Context.Provider>,
	document.getElementById("root")
);

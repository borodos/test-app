import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { Context } from "../index";
import { privateRoutes, publicRoutes } from "../routes";
import { observer } from "mobx-react-lite";

export const AppRouter = observer(() => {
	const { user } = useContext(Context);

	return (
		<Routes>
			{user._isAuth &&
				privateRoutes.map(({ path, component }) => (
					<Route key={path} path={path} element={component} />
				))}
			{publicRoutes.map(({ path, component }) => (
				<Route key={path} path={path} element={component} />
			))}
		</Routes>
	);
});

export default AppRouter;

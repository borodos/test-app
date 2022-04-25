import BasketPage from "./pages/BasketPage/BasketPage";
import MainPage from "./pages/MainPage/MainPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import SearchPage from "./pages/SearchPage/SearchPage";
import { AuthPage } from "./pages/AuthPage/AuthPage";

export const privateRoutes = [
	{
		path: "/basket",
		component: <BasketPage />,
	},

	{
		path: "/profile",
		component: <ProfilePage />,
	},

	{
		path: "/search",
		component: <SearchPage />,
	},
];

export const publicRoutes = [
	{
		path: "/",
		component: <MainPage />,
	},

	{
		path: "/login",
		component: <AuthPage />,
	},

	{
		path: "/registration",
		component: <AuthPage />,
	},
];

import BasketPage from "../src/pages/BasketPage";
import { MainPage } from "../src/pages/MainPage";
import { ProfilePage } from "../src/pages/ProfilePage";
import SearchPage from "../src/pages/SearchPage";
import { AuthPage } from "../src/pages/AuthPage";

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

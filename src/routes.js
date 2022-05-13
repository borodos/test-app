import { BasketPage } from "../src/pages/BasketPage";
import { MainPage } from "../src/pages/MainPage";
import { ProfilePage } from "../src/pages/ProfilePage";
import SearchPage from "../src/pages/SearchPage";
import { AuthPage } from "../src/pages/AuthPage";
import { UserAnnounsPage } from "../src/pages/UserAnnounsPage";
import { MessagesPage } from "./pages/MessagesPage";

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

	{
		path: "/my_announs",
		component: <UserAnnounsPage />,
	},

	{
		path: "/my_messages",
		component: <MessagesPage />,
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

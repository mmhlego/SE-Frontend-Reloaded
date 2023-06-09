import { createBrowserRouter, Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ContactPage from "../pages/ContactPage";
import FaqPage from "../pages/FaqPage";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
import TestPage from "../pages/TestPage";
import RulesPage from "../pages/RulesPage";
import SearchPage from "../pages/SearchPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import ForgotPage from "../pages/ForgotPage";
import SellersPage from "../pages/SellersPage";
import MessagesPage from "../pages/MessagesPage";
import ProfilePage from "../pages/ProfilePage";
import SellerPage from "../pages/SellerPage";
import ProductPage from "../pages/ProductPage";
import ProductsPage from "../pages/ProductsPage";

export const router = createBrowserRouter([
	{
		path: "/",
		element: (
			<>
				<Header />
				<Outlet />
				<Footer />
			</>
		),
		children: [
			{
				index: true,
				element: <HomePage />
			},
			{
				path: "/messages",
				element: <MessagesPage />
			},
			{
				path: "/products",
				element: <ProductsPage />
			},
			{
				path: "/products/:productId",
				element: <ProductPage />
			},
			{
				path: "/sellers",
				element: <SellersPage />
			},
			{
				path: "/sellers/:sellerId",
				element: <SellerPage />
			},
			{
				path: "/profile",
				element: <ProfilePage />
			},
			{
				path: "/rules",
				element: <RulesPage />
			},
			{
				path: "/contact-us",
				element: <ContactPage />
			},
			{
				path: "/faq",
				element: <FaqPage />
			},
			{
				path: "/search",
				element: <SearchPage />
			}
		]
	},
	{
		path: "/login",
		element: <LoginPage />
	},
	{
		path: "/register",
		element: <RegisterPage />
	},
	{
		path: "/forgot",
		element: <ForgotPage />
	},
	// {
	// 	path: "/auth/verify",
	// 	element: <VerifyPage />
	// },
	// {
	// 	path: "/payment",
	// 	element: <PaymentPage />
	// },
	{
		path: "*",
		element: (
			<>
				<Header />
				<NotFoundPage />
				<Footer />
			</>
		)
	},
	{
		path: "/test",
		element: <TestPage />
	}
]);

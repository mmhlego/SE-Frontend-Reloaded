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
			// {
			// 	path: "/products",
			// 	element: <ProductsPage />
			// },
			// {
			// 	path: "/products/:id",
			// 	element: <ProductPage />
			// },
			// {
			// 	path: "/sellers",
			// 	element: <SellersPage />
			// },
			// {
			// 	path: "/sellers/:id",
			// 	element: <SellerPage />
			// },
			// {
			// 	path: "/dashboard",
			// 	element: <DashboardPage />
			// },
			// {
			// 	path: "/dashboard",
			// 	element: <DashboardPage />
			// },
			// {
			// 	path: "/rules",
			// 	element: <RulesPage />
			// },
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
	// {
	// 	path: "/auth/login",
	// 	element: <LoginPage />
	// },
	// {
	// 	path: "/auth/register",
	// 	element: <RegisterPage />
	// },
	// {
	// 	path: "/auth/forgot",
	// 	element: <ForgotPasswordPage />
	// },
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

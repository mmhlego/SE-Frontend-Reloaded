import { createBrowserRouter, Outlet } from "react-router-dom";
import TestPage from "../pages/TestPage";
import App from "../App";

export const router = createBrowserRouter([
	// {
	// 	path: "/",
	// 	element: (
	// 		<>
	// 			<Header />
	// 			<Outlet />
	// 			<Footer />
	// 		</>
	// 	),
	// 	children: [
	// 		{
	// 			index: true,
	// 			element: <HomePage />
	// 		},
	// 		{
	// 			path: "/products",
	// 			element: <ProductsPage />
	// 		},
	// 		{
	// 			path: "/products/:id",
	// 			element: <ProductPage />
	// 		},
	// 		{
	// 			path: "/sellers",
	// 			element: <SellersPage />
	// 		},
	// 		{
	// 			path: "/sellers/:id",
	// 			element: <SellerPage />
	// 		},
	// 		{
	// 			path: "/dashboard",
	// 			element: <DashboardPage />
	// 		},
	// 		{
	// 			path: "/dashboard",
	// 			element: <DashboardPage />
	// 		},
	// 		{
	// 			path: "/rules",
	// 			element: <RulesPage />
	// 		},
	// 		{
	// 			path: "/rules",
	// 			element: <RulesPage />
	// 		},
	// 		{
	// 			path: "/about-us",
	// 			element: <AboutPage />
	// 		},
	// 		{
	// 			path: "/support",
	// 			element: <SupportPage />
	// 		},
	// 		{
	// 			path: "/FAQ",
	// 			element: <FaqPage />
	// 		}
	// 	]
	// },
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
	// {
	// 	path: "*",
	// 	element: (
	// 		<>
	// 			<Header />
	// 			<NotFoundPage />
	// 			<Footer />
	// 		</>
	// 	)
	// },
	{
		path: "/",
		element: <App />
	},
	{
		path: "/test",
		element: <TestPage />
	}
]);

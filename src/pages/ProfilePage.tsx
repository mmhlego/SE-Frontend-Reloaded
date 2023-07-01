import { ReactNode, useContext } from "react";
import { MainContext } from "../Context/MainContext";
import { Navigate, useNavigate } from "react-router";

type Page = {
	title: string;
	element: ReactNode;
};

export default function ProfilePage() {
	const ctx = useContext(MainContext);
	const navigate = useNavigate();

	if (!ctx.loggedIn) {
		return <Navigate to="/" />;
	}

	const sharedPages: Page[] = [
		{
			title: "تغییر رمز عبور",
			element: <div />
		},
		{
			title: "تغییر رمز عبور",
			element: <div />
		},
		{
			title: "تغییر رمز عبور",
			element: <div />
		}
	];
	const ownerPages: Page[] = [];
	const adminPages: Page[] = [];
	const storekeeperPages: Page[] = [];
	const sellerPages: Page[] = [];
	const customerPages: Page[] = [];

	return <div>ProfilePage</div>;
}

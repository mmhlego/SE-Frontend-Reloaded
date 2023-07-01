import { useQuery } from "@tanstack/react-query";
import { useContext, useState } from "react";
import { AiOutlineMessage } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { FiSearch } from "react-icons/fi";
import { IoIosArrowBack, IoMdLogOut } from "react-icons/io";
import { SlLogin } from "react-icons/sl";
import { useLocation, useNavigate } from "react-router";
import { twMerge } from "tailwind-merge";
import { MainContext } from "../Context/MainContext";
import { GetAllSubcategories, GetCategories } from "../apis/Products/CategoryApis";
import Button from "./Button";
import InputField from "./InputField";

export default function Header() {
	const [searchText, setSearchText] = useState("");
	const navigate = useNavigate();
	const ctx = useContext(MainContext);

	return (
		<>
			<div className="flex flex-row-reverse items-center px-16 border-b border-gray-200">
				<HeaderButton text="خانه" path="/" />
				<HeaderButton text="قوانین" path="/rules" />
				<HeaderButton text="سوالات متداول" path="/faq" />
				<HeaderButton text="تماس با ما" path="/contact-us" />

				<InputField
					value={searchText}
					onChange={setSearchText}
					className="w-52 mr-auto bg-gray-100 border-gray-300/40 text-sm shadow-none"
					rtl
				/>

				<Button
					accent="cyan"
					secondary
					className="mr-2 shadow-none border"
					onClick={() => {
						if (searchText.length > 0) navigate(`/search?value=${searchText}`);
					}}>
					<FiSearch />
					جستجو
				</Button>
			</div>
			<div
				className="flex gap-5 px-16 sticky top-0 items-center border-b border-gray-200 shadow-md bg-white z-10"
				dir="rtl">
				<MenuButton text="محصولات">
					<ProductsSection />
				</MenuButton>
				<MenuButton text="فروشندگان">
					<SellersSection />
				</MenuButton>
				{ctx.loggedIn ? (
					<div className="flex gap-2 mr-auto items-center">
						<p className="">خوش آمدید {ctx.username}</p>
						<Button
							accent="orange"
							className="mr-0 px-2.5 gap-2"
							onClick={() => navigate("/messages")}>
							پیام ها
							<AiOutlineMessage />
						</Button>
						<Button
							accent="green"
							className="px-2.5 gap-2"
							onClick={() => navigate("/profile")}>
							پروفایل
							<CgProfile />
						</Button>
						<Button
							accent="red"
							className="px-2.5 gap-2"
							onClick={() => {
								localStorage.clear();
								ctx.setLoggedIn(false);
								navigate("/");
							}}>
							خروج
							<IoMdLogOut />
						</Button>
					</div>
				) : (
					<Button
						accent="blue"
						className="mr-auto px-4 gap-3"
						onClick={() => navigate("/login")}>
						ورود
						<SlLogin />
					</Button>
				)}
			</div>
		</>
	);
}

type Props = {
	text: string;
	path: string;
};
function HeaderButton({ text, path }: Props) {
	return (
		<a
			className={twMerge(
				"inline-block px-4 py-4",
				useLocation().pathname === path
					? "border-b-2 border-blue text-blue font-medium"
					: ""
			)}
			href={path}>
			{text}
		</a>
	);
}

type Props2 = {
	text: string;
	children: React.ReactNode;
};
function MenuButton({ text, children }: Props2) {
	return (
		<div
			className={twMerge(
				"flex items-center gap-2 p-3 hover:bg-blue/5 duration-200 cursor-pointer rounded-lg [&>svg]:hover:-rotate-90 [&>div]:hover:opacity-100 [&>div]:hover:pointer-events-auto"
			)}>
			<p>{text}</p>
			<IoIosArrowBack className="duration-200" />

			<div className="top-12 right-0 px-5 w-screen absolute rounded-md opacity-0 duration-300 pointer-events-none">
				{children}
			</div>
		</div>
	);
}

function ProductsSection() {
	const [selected, setSelected] = useState<string>();
	const navigate = useNavigate();

	const { data: categories } = useQuery(["categories"], () => GetCategories(), {
		onSuccess(res) {
			setSelected(res[0].id);
		}
	});
	const { data: subcategories } = useQuery(["subcategories"], () => GetAllSubcategories());

	return (
		<div className="bg-white p-3 border border-gray-300 shadow-lg rounded-lg grid grid-cols-[25%_auto]">
			<div className="border-gray-300 border-l pl-2">
				{categories?.map((c) => (
					<div
						className={twMerge(
							"flex gap-3 items-center p-2 hover:bg-cyan/10 rounded-lg duration-200 border-2 border-transparent",
							selected === c.id ? "bg-cyan/10 border-blue/10" : ""
						)}
						key={c.id}
						onMouseEnter={() => setSelected(c.id)}>
						<i
							className={
								"scale-[1.5] aspect-square grid place-content-center w-6 fa " +
								c.iconName
							}
						/>
						<p>{c.title}</p>
					</div>
				))}
			</div>
			{selected && (
				<div className="grid grid-cols-3 grid-rows-4 grid-flow-col">
					{subcategories
						?.filter((sc) => sc.categoryId === selected)
						.map((c) => (
							<div
								className={
									"flex gap-3 items-center mr-2 p-2 hover:bg-cyan/10 hover:border-blue/10 rounded-lg duration-200 border-2 border-transparent"
								}
								key={c.id}
								onClick={() => navigate(`/products?subcategoryId=${c.id}`)}>
								<p>{c.title}</p>
							</div>
						))}
				</div>
			)}
		</div>
	);
}

function SellersSection() {
	const navigate = useNavigate();

	return (
		<div className="bg-white p-3 border border-gray-300 shadow-lg rounded-lg grid grid-cols-[25%_auto]">
			<div
				className={twMerge(
					"items-center p-2 hover:bg-cyan/10 rounded-lg duration-200 border-2 border-transparent hover:border-blue/10"
				)}
				onClick={() => navigate("/sellers")}>
				<p>لیست همه فروشندگان</p>
			</div>
		</div>
	);
}

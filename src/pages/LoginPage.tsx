import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { MainContext } from "../Context/MainContext";
import Button from "../components/Button";
import InputField from "../components/InputField";
import Loading from "../components/Loading";
import { useMutation } from "@tanstack/react-query";
import { Login } from "../apis/AuthApis";
import { toast } from "react-toastify";
import axios from "axios";
import { Roles } from "../models/Types";

export default function LoginPage() {
	const navigate = useNavigate();
	const ctx = useContext(MainContext);

	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const { isLoading, mutate } = useMutation(() => Login(username, password), {
		onSuccess(res) {
			if ("status" in res) {
				toast.error(res.description);
			} else {
				ctx.setLoggedIn(true);
				ctx.setUsername(res.userName);
				ctx.setRole(res.role as Roles);

				toast.success("با موفقیت وارد شدید. در حال انتقال ...");
				localStorage.setItem("jwt", res.jwtToken);
				axios.defaults.headers.common.Authorization = `Bearer ${res.jwtToken}`;

				setTimeout(() => navigate("/"), 2000);
			}
		},
		onError() {
			toast.error("خطایی در ارتباط با سرور پیش آمده است.");
		}
	});

	return (
		<div className="w-full h-screen bg-blue/50 flex justify-center items-center overflow-hidden">
			<div className="bg-white rounded-lg overflow-hidden grid sm:grid-cols-2 w-full sm:w-4/5 md:w-3/4 xl:w-1/2">
				<div className="p-5 flex flex-col items-center gap-5 text-center justify-evenly">
					<p>وارد حساب کاربری خود شوید و تجربه بهترین خرید را با ما داشته باشید</p>
					<Button
						text="ثبت نام"
						onClick={() => navigate("/register")}
						accent="black"
						className="px-9"
					/>
					<a href="/" className="flex items-center gap-2 text-sm">
						بازگشت به صفحه ی نخست
					</a>
				</div>
				<form className="p-5 bg-blue/20 flex flex-col items-center gap-5 text-center">
					<p className="text-2xl font-bold">ورود</p>

					<InputField
						label="نام کاربری"
						value={username}
						hint="لطفا نام کاربری خود را وارد نمایید"
						onChange={setUsername}
						className="w-full bg-gray-200"
					/>

					<InputField
						label="رمز عبور"
						value={password}
						hint="لطفا رمز عبور خود را وارد نمایید"
						onChange={setPassword}
						type="password"
						className="w-full bg-gray-200"
					/>

					<a dir="rtl" href="/forgot">
						رمز عبور خود را فراموش کرده ام!
					</a>

					<Button
						disabled={isLoading}
						text="ورود"
						onClick={() => mutate()}
						className="px-10"
					/>
				</form>
			</div>
		</div>
	);
}

import { useMutation } from "@tanstack/react-query";
import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { z } from "zod";
import { MainContext } from "../Context/MainContext";
import { Register } from "../apis/AuthApis";
import Button from "../components/Button";
import CheckBox from "../components/CheckBox";
import InputField from "../components/InputField";
import Loading from "../components/Loading";
import { ValidatePassword } from "../utils/Functions";
import { toast } from "react-toastify";
import axios from "axios";
import { Roles } from "../models/Types";

export default function RegisterPage() {
	const navigate = useNavigate();
	const ctx = useContext(MainContext);

	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [rPassword, setRPassword] = useState("");
	const [firstName, setFirstName] = useState("");
	const [lastName, setLasName] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [email, setEmail] = useState("");
	const [birthDate, setBirthDate] = useState("");
	const [checked, setChecked] = useState(false);

	const { isLoading, mutate } = useMutation(
		() =>
			Register(4, username, password, firstName, lastName, birthDate, "", email, phoneNumber),
		{
			onSuccess(res) {
				if ("status" in res) {
					toast.error(res.description);
				} else {
					ctx.setLoggedIn(true);
					ctx.setUsername(res.userName);
					ctx.setRole(res.role as Roles);

					toast.success("با موفقیت وارد شدید. در حال انتقال ...");
					localStorage.setItem("jwt", res.jwtToken);
					localStorage.setItem("username", res.userName);
					localStorage.setItem("role", res.role);
					axios.defaults.headers.common.Authorization = `Bearer ${res.jwtToken}`;

					setTimeout(() => navigate("/"), 2000);
				}
			},
			onError() {
				toast.error("خطایی در ارتباط با سرور پیش آمده است.");
			}
		}
	);

	const validateFields = (): string | true => {
		if (!z.string().min(8).safeParse(username).success) return "نام کاربری نامعتبر میباشد.";

		const vp = ValidatePassword(password);
		if (vp !== true) return vp;

		if (rPassword !== password) return "تکرار رمز عبور با رمز عبور همخوانی ندارد.";

		if (!z.string().min(2).safeParse(firstName).success) return "نام نامعتبر میباشد.";

		if (!z.string().min(2).safeParse(lastName).success) return "نام خانوادگی نامعتبر میباشد.";

		if (!z.string().length(11).safeParse(phoneNumber).success)
			return "شماره تلفن وارد شده نامعتبر میباشد.";

		if (!z.string().email().safeParse(email).success) return "ایمیل وارد شده نامعتبر میباشد.";

		if (!z.date().safeParse(new Date(birthDate)).success)
			return "تارخ تولد وارد شده نامعتبر میباشد.";

		if (!checked) return "تیک 'با قوانین سایت موافقم' انتخاب نشده است.";

		return true;
	};

	return (
		<div className="w-full sm:h-screen bg-blue/50 flex justify-center items-center">
			<div className="bg-white rounded-2xl overflow-hidden grid sm:grid-cols-2 w-full sm:w-4/5 md:w-3/4 xl:w-1/2 sm:h-4/5">
				<div className="p-5 flex flex-col items-center gap-8 text-center justify-center">
					<p>وارد حساب کاربری خود شوید و تجربه بهترین خرید را با ما داشته باشید</p>
					<Button
						text="ورود"
						onClick={() => navigate("/auth/login")}
						// color="black"
						className="px-9"
					/>
					<a href="/" className="flex items-center gap-2 text-sm">
						بازگشت به صفحه ی نخست
					</a>
				</div>
				<div className="h-full overflow-y-scroll bg-blue/20">
					<div className="p-5 flex flex-col items-center gap-5 text-center">
						<p className="text-2xl font-bold">ثبت نام</p>

						<InputField
							value={username}
							label="نام کاربری"
							hint="لطفا نام کاربری خود را وارد نمایید"
							onChange={setUsername}
							className="w-full bg-gray-200"
						/>

						<InputField
							value={password}
							label="رمز عبور"
							hint="لطفا رمز عبور خود را وارد نمایید"
							onChange={setPassword}
							type="password"
							className="w-full bg-gray-200"
						/>

						<InputField
							value={rPassword}
							label="تکرار رمز عبور"
							hint="لطفا رمز عبور خود را وارد نمایید"
							onChange={setRPassword}
							type="password"
							className="w-full bg-gray-200"
						/>

						<InputField
							value={firstName}
							label="نام"
							hint="لطفا نام خود را وارد نمایید"
							onChange={setFirstName}
							className="w-full bg-gray-200"
						/>

						<InputField
							value={lastName}
							label="نام خانوادگی"
							hint="لطفا نام خانوادگی خود را وارد نمایید"
							onChange={setLasName}
							className="w-full bg-gray-200"
						/>

						<InputField
							value={phoneNumber}
							label="شماره تلفن"
							hint="لطفا شماره تلفن خود را وارد نمایید"
							onChange={setPhoneNumber}
							className="w-full bg-gray-200"
						/>

						<InputField
							value={email}
							label="ایمیل"
							hint="لطفا ایمیل خود را وارد نمایید"
							onChange={setEmail}
							className="w-full bg-gray-200"
						/>

						<InputField
							value={birthDate}
							label="تاریخ تولد"
							hint="لطفا تاریخ تولد خود را وارد نمایید"
							onChange={setBirthDate}
							className="w-full bg-gray-200"
						/>

						<CheckBox
							label="شرایط و قوانین سون شاپ را مطالعه نموده و با ان موافقم"
							className="text-right"
							onChange={setChecked}
						/>

						<Button
							disabled={isLoading}
							onClick={() => {
								const validationResult = validateFields();

								if (validationResult === true) {
									mutate();
								} else {
									toast.error(validationResult);
								}
							}}
							className="px-10 gap-2">
							{!isLoading ? "ثبت نام" : <Loading />}
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}

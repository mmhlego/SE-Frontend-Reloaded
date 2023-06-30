import axios from "axios";
import { StatusResponse } from "../models/StatusResponses";
import { AuthResponse } from "../models/AuthResponse";

export async function Login(
	UsernameOrEmail: string,
	password: string
): Promise<AuthResponse | StatusResponse> {
	const response = await axios.post("/Auth/login", {
		UsernameOrEmail,
		password
	});
	return response.data;
}

export async function Register(
	type: number = 4,
	username: string,
	password: string,
	firstName: string,
	lastName: string,
	birthDate: string,
	avatar: string,
	email: string,
	phoneNumber: string
): Promise<AuthResponse | StatusResponse> {
	const response = await axios.post("/Auth/register", {
		type,
		username,
		password,
		firstName,
		lastName,
		birthDate,
		avatar,
		email,
		phoneNumber
	});
	return response.data;
}

export async function ChangePassword(
	username: string,
	oldPassword: string,
	newPassword: string
): Promise<StatusResponse> {
	const response = await axios.post("/Auth/changePassword", {
		username,
		oldPassword,
		newPassword
	});
	return response.data;
}

export async function SendVerificationCode(phoneNumber: string): Promise<StatusResponse> {
	const response = await axios.post("/Auth/SendVerificationCode", { phoneNumber });
	return response.data;
}

export async function LoginByPhoneNumber(
	phoneNumber: string,
	code: string
): Promise<AuthResponse | StatusResponse> {
	const response = await axios.post("/Auth/LoginByPhoneNumber", {
		phoneNumber,
		code
	});
	return response.data;
}

import axios from "axios";
import { StatusResponse } from "../models/statusResponses";
import { AuthResponse } from "../models/AuthResponse";

export async function Login(username: string, password: string): Promise<AuthResponse> {
	const response = await axios.post("/Auth/login", {
		username,
		password
	});
	return response.data;
}

export async function Register(
	type: "Customer",
	username: string,
	password: string,
	firstName: string,
	lastName: string,
	birthDate: string,
	avatar: string,
	email: string,
	phoneNumber: string
): Promise<AuthResponse> {
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

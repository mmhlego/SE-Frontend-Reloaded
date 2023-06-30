import axios from "axios";
import { StatusResponse } from "../../models/StatusResponses";
import { Seller } from "../../models/Seller";
import { Pagination } from "../../models/Pagination";

export async function GetSellers(
	page: number,
	perPage: number,
	searchText: string | undefined
): Promise<Pagination<Seller>> {
	const response = await axios.get("/Users/Seller/sellers", {
		params: { page, perPage, searchText }
	});
	return response.data;
}

export async function GetSeller(userId: string): Promise<Seller> {
	const response = await axios.get(`/Users/Seller/sellers/${userId}`, {});
	return response.data;
}

export async function UpdateSeller(
	userId: string,
	information: string,
	address: string
): Promise<Seller> {
	const response = await axios.put(`/Users/Seller/sellers/${userId}`, { information, address });
	return response.data;
}

export async function DeleteSeller(userId: string): Promise<Seller> {
	const response = await axios.delete(`/Users/Seller/sellers/${userId}`, {});
	return response.data;
}

export async function GetProfile(): Promise<Seller> {
	const response = await axios.get("/Users/Seller/profile", {});
	return response.data;
}

export async function UpdateProfile(
	username: string,
	password: string,
	firstName: string,
	lastName: string,
	birthDate: string,
	avatar: string,
	email: string,
	phoneNumber: string,
	information: string,
	address: string
): Promise<Seller> {
	const response = await axios.put("/Users/Seller/profile", {
		username,
		password,
		firstName,
		lastName,
		birthDate,
		avatar,
		email,
		phoneNumber,
		information,
		address
	});
	return response.data;
}

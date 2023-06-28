import axios from "axios";
import { Category, Subcategory } from "../../models/Category";
import { StatusResponse } from "../../models/StatusResponses";

export async function GetCategories(): Promise<Category[]> {
	const response = await axios.get("/Products/Category/categories", {});
	return response.data;
}

export async function GetAllSubcategories(): Promise<Subcategory[]> {
	const response = await axios.get("/Products/Category/subcategories");
	return response.data;
}

export async function GetSubcategories(categoryId: string): Promise<Category[]> {
	const response = await axios.get(`/Products/Category/categories/${categoryId}/subcategories`);
	return response.data;
}

export async function AddCategory(title: string, iconName: string): Promise<StatusResponse> {
	const response = await axios.post(`/Products/Category/categories`, { title, iconName });
	return response.data;
}

export async function AddSubcategory(categoryId: string, title: string): Promise<StatusResponse> {
	const response = await axios.post(`/Products/Category/subcategories`, { title, categoryId });
	return response.data;
}

export async function UpdateCategory(
	categoryId: string,
	title: string,
	iconName: string
): Promise<Category[]> {
	const response = await axios.put(`/Products/Category/categories/${categoryId}`, {
		title,
		iconName
	});
	return response.data;
}

export async function UpdateSubcategory(subcategoryId: string, title: string): Promise<Category[]> {
	const response = await axios.put(`/Products/Category/subcategories/${subcategoryId}`, {
		title
	});
	return response.data;
}

export async function UpdateSubcategoryFields(
	subcategoryId: string,
	fields: string[]
): Promise<Category[]> {
	const response = await axios.put(`/Products/Category/subcategories/${subcategoryId}/fields`, {
		fields
	});
	return response.data;
}

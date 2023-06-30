import axios from "axios";
import { Category, Subcategory } from "../../models/Category";
import { StatusResponse } from "../../models/StatusResponses";
import { Pagination } from "../../models/Pagination";
import { Product } from "../../models/Product";

export async function GetProducts(
	page: number,
	perPage: number,
	search?: string,
	priceFrom?: number,
	priceTo?: number,
	subcategoryId?: string
	// ): Promise<Pagination<Product> | StatusResponse> {
): Promise<Product[]> {
	const response = await axios.get("/Products/Product/products", {
		params: {
			page,
			perPage,
			search,
			priceFrom,
			priceTo,
			subcategoryId
		}
	});
	return response.data;
}

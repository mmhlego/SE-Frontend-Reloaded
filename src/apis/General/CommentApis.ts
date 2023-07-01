import axios from "axios";
import { ProductComment } from "../../models/Comment";

export async function GetComments(
	count: number,
	startDate: Date = new Date(),
	productId: string,
	customerId?: string
): Promise<ProductComment[]> {
	const response = await axios.get("/General/Comment/comments", {
		params: {
			productId,
			customerId,
			count,
			startDate
		}
	});
	return response.data;
}

export async function SendComment(productId: string, text: string): Promise<ProductComment[]> {
	const response = await axios.post("/General/Comment/comments", {
		productId,
		text
	});
	return response.data;
}

import axios from "axios";
import { Sale } from "../models/Sale";

export async function GetSales(userId?: string, productId?: string): Promise<Sale[]> {
	const response = await axios.get("/Sales/Sale/sales", {
		params: {
			userId,
			productId
		}
	});
	return response.data;
}

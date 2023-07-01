import axios from "axios";
import { Order } from "../models/Order";

export async function GetCurrentCart(): Promise<Order> {
	const response = await axios.get("/Sales/Order/myOrders/current", {});
	return response.data;
}

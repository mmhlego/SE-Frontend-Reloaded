import { Sale } from "./Sale";

export interface Order {
	id: string;
	state: OrderStates;
	totalPrice: number;
	userId: string;
	orderItems: OrderItem[];
}

export enum OrderStates {
	Filling,
	Purchased,
	Rejected,
	Approved,
	Sending,
	Delivered
}

export interface OrderItem {
	id: string;
	amount: number;
	orderId: string;
	order: Order;
	salePriceId: string;
	salePrice: SalePrice;
}

export interface SalePrice {
	id: string;
	price: number;
	updateDate: string;
	saleId: string;
	sale: Sale;
}

export interface Sale {
	id: string;
	productId: string;
	amount: number;
	userId: string;
	price: number;
}

export interface SalePrice {
	id: string;
	price: number;
	updateDate: string;
	saleId: string;
	sale: Sale;
}

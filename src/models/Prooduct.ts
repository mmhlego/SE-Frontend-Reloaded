export interface Product {
	rowId: string;
	productId: string;
	subcategoryId: string;
	name: string;
	description: string;
	state: ProductStates;
}

export enum ProductStates {
	ComingSoon,
	AddPending,
	UpdatePending,
	Available,
	ProductionStopped
}

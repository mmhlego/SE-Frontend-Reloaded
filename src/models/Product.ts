export interface Product {
	rowId: string;
	productId: string;
	subcategoryId: string;
	name: string;
	description: string;
	state: number;
}

export enum ProductStates {
	ComingSoon = 0,
	AddPending = 1,
	UpdatePending = 2,
	Available = 3,
	ProductionStopped = 4
}

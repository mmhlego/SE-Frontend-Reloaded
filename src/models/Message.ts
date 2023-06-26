export interface Message {
	id: string;
	content: string;
	type: MessageTypes;
	issueDate: string;
	isRead: boolean;
}

export enum MessageTypes {
	ProductFinished,
	ProductAvailable,
	SaleFinished,
	SaleAvailable
}

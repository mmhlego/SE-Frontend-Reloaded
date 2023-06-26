export interface Category {
	id: string;
	title: string;
	iconName: string;
}

export interface Subcategory {
	id: string;
	title: string;
	categoryId: string;
}

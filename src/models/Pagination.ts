export interface Pagination<T> {
	perPage: number;
	page: number;
	totalPages: number;
	data: T[];
}

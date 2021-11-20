interface IProductsRepositoryDTO {
	id?: string;
	name: string;
	description: string;
	value: number;
	created_at?: Date;
	updated_at?: Date;
}

export { IProductsRepositoryDTO };

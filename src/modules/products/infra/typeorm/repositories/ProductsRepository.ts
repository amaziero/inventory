import { getRepository, Repository } from "typeorm";

import { IProductsRepositoryDTO } from "../../../dtos/IProductsRepositoryDTO";
import { IProductsRepository } from "../../../repositories/IProductsRepository";
import { ProductsList } from "../entities/ProductsList";

class ProductsRepository implements IProductsRepository {
	private repository: Repository<ProductsList>;

	constructor() {
		this.repository = getRepository(ProductsList);
	}

	async create({
		name,
		value,
		description,
	}: IProductsRepositoryDTO): Promise<ProductsList> {
		const product = this.repository.create({
			name,
			description,
			value
		});

		await this.repository.save(product);

		return product;
	}

	async findByName(name: string): Promise<ProductsList | undefined> {
		const product = await this.repository.findOne({ name });

		return product;
	}
}

export { ProductsRepository };

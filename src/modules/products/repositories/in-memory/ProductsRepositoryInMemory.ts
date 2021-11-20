import { IProductsRepositoryDTO } from "../../dtos/IProductsRepositoryDTO";
import { ProductsList } from "../../infra/typeorm/entities/ProductsList";
import { IProductsRepository } from "../IProductsRepository";

class ProductsRepositoryInMemory implements IProductsRepository {
	private products: ProductsList[] = [];

	async create(data: IProductsRepositoryDTO): Promise<ProductsList> {
		const product = new ProductsList();

		Object.assign(product, data);

		this.products.push(product);

		return product;
	}
	async findByName(name: string): Promise<ProductsList | undefined> {
		const product = this.products.find((userName) => userName.name === name);

		return product;
	}
}

export { ProductsRepositoryInMemory };

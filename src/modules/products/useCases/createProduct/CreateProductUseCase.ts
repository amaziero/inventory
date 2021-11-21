import { inject, injectable } from "tsyringe";

import { ProductsList } from "@modules/products/infra/typeorm/entities/ProductsList";

import { IProductsRepository } from "../../repositories/IProductsRepository";
import { AppError } from '../../../../shared/Errors/AppError';

interface IRequest {
	name: string;
	description: string;
	value: number;
}

@injectable()
class CreateProductUseCase {
	constructor(
		@inject("ProductsRepository")
		private productsListRepository: IProductsRepository
	) { }

	async execute({ name, description, value }: IRequest): Promise<ProductsList> {
		const productFund = await this.productsListRepository.findByName(name);

		if (productFund) {
			throw new AppError("product already created");
		}

		const product = this.productsListRepository.create({
			name,
			description,
			value,
		});

		return product;
	}
}

export { CreateProductUseCase };

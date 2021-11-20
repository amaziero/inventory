import { IProductsRepositoryDTO } from "../dtos/IProductsRepositoryDTO";
import { ProductsList } from "../infra/typeorm/entities/ProductsList";

interface IProductsRepository {
	create(data: IProductsRepositoryDTO): Promise<ProductsList>;
	findByName(name: string): Promise<ProductsList | undefined>;
}

export { IProductsRepository };

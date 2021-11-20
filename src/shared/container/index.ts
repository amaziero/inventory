import { ProductsRepository } from '@modules/products/infra/typeorm/repositories/ProductsRepository';
import { IProductsRepository } from '@modules/products/repositories/IProductsRepository';
import { container } from "tsyringe";


container.registerSingleton<IProductsRepository>(
  "ProductsRepository",
  ProductsRepository
);

import { ProductsRepository } from '../../modules/products/infra/typeorm/repositories/ProductsRepository';
import { IProductsRepository } from '@modules/products/repositories/IProductsRepository';
import { IUsersRepository } from '@modules/users/repositories/IUsersRepository';
import { container } from "tsyringe";
import { UserRepository } from "@modules/users/infra/typeorm/repositories/UserRepository"


container.registerSingleton<IProductsRepository>(
  "ProductsRepository",
  ProductsRepository
);

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UserRepository
);

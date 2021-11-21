import { ProductsRepository } from '../../modules/products/infra/typeorm/repositories/ProductsRepository';
import { IProductsRepository } from '@modules/products/repositories/IProductsRepository';
import { IUsersRepository } from '@modules/users/repositories/IUsersRepository';
import { container } from "tsyringe";
import { UserRepository } from "@modules/users/infra/typeorm/repositories/UserRepository"

import { IMakePurchase } from "@modules/purchase/repositories/IMakePurchase"
import { PurchaseRepository } from "@modules/purchase/infra/typeorm/repositories/PurchaseRepository"


container.registerSingleton<IProductsRepository>(
  "ProductsRepository",
  ProductsRepository
);

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UserRepository
);

container.registerSingleton<IMakePurchase>(
  "PurchaseRepository",
  PurchaseRepository
);
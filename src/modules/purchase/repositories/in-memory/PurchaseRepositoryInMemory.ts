import ICreatePurchase from '../../dtos/ICreatePurchase';
import ISumPurchases from '../../dtos/ISumPurchases';
import { Purchase } from '../../infra/typeorm/entities/Purchase';
import { IMakePurchase } from '../IMakePurchase';
import { DayjsDateProvider } from "../../../../shared/container/providers/DateProvider/implementations/DayjsDateProvider"
import { ProductsRepositoryInMemory } from "../../../products/repositories/in-memory/ProductsRepositoryInMemory"
import { UsersRepositoryInMemory } from "../../../users/repositories/in-memory/UsersRepositoryInMemory"
import { AppError } from '@shared/Errors/AppError';
import { Users } from '@modules/users/infra/typeorm/entities/Users';

interface IResponse {
	name: string;
	quantity: number;
	day_purchase: Date;
	cost: number;
}

interface IUserPurchase {
	user: Users;
	purchase: Purchase;
}

class PurchaseRepositoryInMemory implements IMakePurchase {
	private purchases: Purchase[] = []

	async create({ id_product, id_user }: ICreatePurchase): Promise<Purchase> {
		const purchase = new Purchase()

		Object.assign(purchase, {
			id_product,
			id_user
		})

		this.purchases.push(purchase)

		return purchase;
	}

	async sumPurchases({ start_date, end_date }: ISumPurchases): Promise<any> {
		const dateProvider = new DayjsDateProvider()
		const productsRepositoryInMemory = new ProductsRepositoryInMemory();
		const usersRepositoryInMemory = new UsersRepositoryInMemory()
		const users = await usersRepositoryInMemory.findAllUsers()

		if (users === undefined) {
			throw new AppError("error with users")
		}

		const purchasesInDate = this.purchases.filter(async (purchase) => {
			if (await dateProvider.isAfter(purchase.created_at, start_date) && await dateProvider.isBefore(purchase.created_at, end_date)) {

				return purchase
			}
		})

		const purchaseHasString = purchasesInDate.filter(async (purchase) => {
			const product = await productsRepositoryInMemory.findById(purchase.id)

			if (product !== undefined && product.name.toLowerCase().includes('leite')) {
				return purchase
			}
		})

		const usersPurchases = purchaseHasString.map(async (purchase) => {
			let emelemnt = 0
			const product = await productsRepositoryInMemory.findById(purchase.id_product)

			if (product === undefined) {
				throw new AppError("error with product")
			}

			const userPurchase = {
				name: users.filter((user) => { if (user.id === purchase.id_user) { return user.user_name } }),
				quantity: emelemnt + 1,
				day_purchase: purchase.created_at,
				cost: product.value
			}

			emelemnt = emelemnt + 1

			return userPurchase
		})

		return usersPurchases
	}
}

export { PurchaseRepositoryInMemory }
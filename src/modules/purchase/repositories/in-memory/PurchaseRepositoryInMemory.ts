import ICreatePurchase from '../../dtos/ICreatePurchase';
import { Purchase } from '../../infra/typeorm/entities/Purchase';
import { IMakePurchase } from '../IMakePurchase';

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
}

export { PurchaseRepositoryInMemory }
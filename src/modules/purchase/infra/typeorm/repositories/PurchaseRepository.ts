import { getRepository, Repository } from 'typeorm';
import { Purchase } from "../entities/Purchase"
import { IMakePurchase } from "../../../repositories/IMakePurchase"
import ICreatePurchase from '../../../dtos/ICreatePurchase';

class PurchaseRepository implements IMakePurchase {
	private repository: Repository<Purchase>;

	constructor() {
		this.repository = getRepository(Purchase);
	}

	async create({ id_product, id_user }: ICreatePurchase): Promise<Purchase> {
		// missing validation of the id_user and id_produt because they may be
		// invalid
		const purchase = this.repository.create({ id_product, id_user })

		return purchase;
	}
}

export { PurchaseRepository };
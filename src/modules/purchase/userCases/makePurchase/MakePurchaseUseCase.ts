import { injectable } from 'tsyringe';
import ICreatePurchase from '../../dtos/ICreatePurchase';
import { Purchase } from '../../infra/typeorm/entities/Purchase';
import { IMakePurchase } from '../../repositories/IMakePurchase';

@injectable()
class MakePurchaseUseCase {
	constructor(
		private purchaseRepository: IMakePurchase
	) { }

	async execulte({ id_product, id_user }: ICreatePurchase): Promise<Purchase> {
		const purchase = await this.purchaseRepository.create({ id_product, id_user })

		return purchase;
	}
}

export { MakePurchaseUseCase }
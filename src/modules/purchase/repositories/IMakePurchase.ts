import ICreatePurchase from '../dtos/ICreatePurchase'
import { Purchase } from "../infra/typeorm/entities/Purchase"

interface IMakePurchase {
	create(data: ICreatePurchase): Promise<Purchase>
}

export { IMakePurchase }
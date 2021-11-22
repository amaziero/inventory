import ICreatePurchase from '../dtos/ICreatePurchase'
import ISumPurchases from '../dtos/ISumPurchases'
import { Purchase } from "../infra/typeorm/entities/Purchase"

interface IMakePurchase {
	create(data: ICreatePurchase): Promise<Purchase>
	sumPurchases(data: ISumPurchases): Promise<any>
}

export { IMakePurchase }
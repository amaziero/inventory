import { PurchaseRepositoryInMemory } from '../../repositories/in-memory/PurchaseRepositoryInMemory';
import { MakePurchaseUseCase } from './MakePurchaseUseCase'
import { UsersRepositoryInMemory } from '../../../users/repositories/in-memory/UsersRepositoryInMemory';
import { ProductsRepositoryInMemory } from "../../../products/repositories/in-memory/ProductsRepositoryInMemory";


let makePurchaseUseCase: MakePurchaseUseCase;
let purchaseRepository: PurchaseRepositoryInMemory;

let userRepositoryInMemory: UsersRepositoryInMemory;
let productRepositoryInMemory: ProductsRepositoryInMemory;

describe("makePurchase methods", () => {
	beforeEach(() => {
		productRepositoryInMemory = new ProductsRepositoryInMemory()
		userRepositoryInMemory = new UsersRepositoryInMemory()

		purchaseRepository = new PurchaseRepositoryInMemory()
		makePurchaseUseCase = new MakePurchaseUseCase(purchaseRepository)
	})

	it("should be able to make a purchase", async () => {
		const product = {
			name: "Shampoo",
			description: "Shampoo para cabelo",
			value: 50,
		};

		const newProduct = await productRepositoryInMemory.create(product);
		const user = await userRepositoryInMemory.create({ user_name: 'Test' })

		const purchase = await makePurchaseUseCase.execulte({ id_product: newProduct.id, id_user: user.id })

		expect(purchase).toHaveProperty('id')
	})
})
import { PurchaseRepositoryInMemory } from '@modules/purchase/repositories/in-memory/PurchaseRepositoryInMemory';
import { DayjsDateProvider } from "../../../../shared/container/providers/DateProvider/implementations/DayjsDateProvider"
import { ProductsRepositoryInMemory } from "../../../products/repositories/in-memory/ProductsRepositoryInMemory"
import { UsersRepositoryInMemory } from "../../../users/repositories/in-memory/UsersRepositoryInMemory"


let purchaseRepositoryInMemory: PurchaseRepositoryInMemory;
let productsRepositoryInMemory: ProductsRepositoryInMemory;
let usersRepositoryInMemory: UsersRepositoryInMemory;
let dateProvider: DayjsDateProvider;

describe("sum purchases", () => {
	beforeAll(() => {
		purchaseRepositoryInMemory = new PurchaseRepositoryInMemory();
		productsRepositoryInMemory = new ProductsRepositoryInMemory();
		usersRepositoryInMemory = new UsersRepositoryInMemory();
		dateProvider = new DayjsDateProvider();
	})

	it("should be able to sum all purchases by user and return the hiest", async () => {
		const user = await usersRepositoryInMemory.create({ user_name: "Alison" })
		const product = await productsRepositoryInMemory.create({ name: 'Test', description: 'Leite condençado', value: 30 })

		await purchaseRepositoryInMemory.create({ id_product: product.id, id_user: user.id })
		await purchaseRepositoryInMemory.create({ id_product: product.id, id_user: user.id })
		await purchaseRepositoryInMemory.create({ id_product: product.id, id_user: user.id })

		const sum = await purchaseRepositoryInMemory.sumPurchases({ start_date: new Date(), end_date: new Date("2021-11-30") })

		console.log(sum)

	})
})
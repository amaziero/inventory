import { AppError } from '@shared/Errors/AppError';
import { ProductsRepositoryInMemory } from "../../repositories/in-memory/ProductsRepositoryInMemory";
import { CreateProductUseCase } from "./CreateProductUseCase";

let productRepositoryInMemory: ProductsRepositoryInMemory;
let createProductUseCase: CreateProductUseCase;

describe("Product List", () => {
	beforeEach(() => {
		productRepositoryInMemory = new ProductsRepositoryInMemory();
		createProductUseCase = new CreateProductUseCase(productRepositoryInMemory);
	});
	it("should be able to create a new product", async () => {
		const product = {
			name: "Shampoo",
			description: "Shampoo para cabelo",
			value: 50,
		};

		const newProduct = await createProductUseCase.execute(product);

		expect(newProduct).toHaveProperty("id");
	});
	it("should not be able to create a new product of a product already created", async () => {
		expect(async () => {
			const product = {
				name: "Shampoo",
				description: "Shampoo para cabelo",
				value: 50,
			};

			await createProductUseCase.execute(product);
			await createProductUseCase.execute(product);
		}).rejects.toBeInstanceOf(AppError);
	});
});

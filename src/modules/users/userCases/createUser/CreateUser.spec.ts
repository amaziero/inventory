import { AppError } from '@shared/Errors/AppError';
import { UsersRepositoryInMemory } from '../../repositories/in-memory/UsersRepositoryInMemory';
import { CreateUserUseCase } from './CreateUserUseCase';

let createUserUseCase: CreateUserUseCase;
let userRepositoryInMemory: UsersRepositoryInMemory;

describe("Product List", () => {
	beforeEach(() => {
		userRepositoryInMemory = new UsersRepositoryInMemory()
		createUserUseCase = new CreateUserUseCase(userRepositoryInMemory)
	});

	it("should let create user", async () => {
		const user = await createUserUseCase.execulte({ user_name: 'Test' })

		expect(user).toHaveProperty('user_name')
	});

	it("should not be able to create user", async () => {
		expect(async () => {
			await createUserUseCase.execulte({ user_name: 'Test' })
			await createUserUseCase.execulte({ user_name: 'Test' })
		}).rejects.toBeInstanceOf(AppError)
	});

});

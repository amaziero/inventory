import { AppError } from '@shared/Errors/AppError';
import ICreateUsers from '../../dtos/ICreateUsers'
import { Users } from '../../infra/typeorm/entities/Users'
import { IUsersRepository } from "../IUsersRepository"

class UsersRepositoryInMemory implements IUsersRepository {
	private users: Users[] = []

	async create(data: ICreateUsers): Promise<Users> {
		const user = new Users();

		Object.assign(user, data)

		this.users.push(user)

		return user;
	}

	async findByName({ user_name }: ICreateUsers): Promise<Boolean | undefined> {
		const userExists = this.users.find(user => user.user_name === user_name)

		if (userExists === undefined) {
			return true;
		}

		throw new AppError("User created")
	}

	async findAllUsers(): Promise<Users[] | undefined> {
		return this.users;
	}
}

export { UsersRepositoryInMemory }
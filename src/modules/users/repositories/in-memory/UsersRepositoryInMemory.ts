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

	async findByName(name: string): Promise<Users | undefined> {
		const userExists = this.users.find(user => user.name === name)

		return userExists;
	}
}

export { UsersRepositoryInMemory }
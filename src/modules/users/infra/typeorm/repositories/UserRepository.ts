import { getRepository, Repository, SimpleConsoleLogger } from 'typeorm';
import ICreateUsers from '../../../dtos/ICreateUsers'
import { IUsersRepository } from "../../../repositories/IUsersRepository"
import { Users } from '../entities/Users'

class UserRepository implements IUsersRepository {
	private repository: Repository<Users>;

	constructor() {
		this.repository = getRepository(Users);
	}

	async create({ user_name }: ICreateUsers): Promise<Users> {
		(user_name)
		const user = this.repository.create({ user_name })


		await this.repository.save(user)

		return user;
	}

	async findByName({ user_name }: ICreateUsers): Promise<Boolean | undefined> {

		const user = await this.repository.findOne({ user_name })


		if (user === undefined) {

			return true
		}

		return false
	}
}

export { UserRepository };
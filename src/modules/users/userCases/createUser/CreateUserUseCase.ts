import { AppError } from '@shared/Errors/AppError';
import { inject, injectable } from 'tsyringe';
import { Users } from '../../infra/typeorm/entities/Users';
import { IUsersRepository } from '../../repositories/IUsersRepository';

@injectable()
class CreateUserUseCase {
	constructor(
		@inject("UsersRepository")
		private userRepository: IUsersRepository
	) { }

	async execulte(name: string): Promise<Users> {
		const userExists = await this.userRepository.findByName(name)

		if (userExists) {
			throw new AppError("user already created, try another.")
		}

		const user = await this.userRepository.create({ name })

		return user;
	}
}

export { CreateUserUseCase }
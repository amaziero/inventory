import { AppError } from '../../../../shared/Errors/AppError';
import { inject, injectable } from 'tsyringe';
import { Users } from '../../infra/typeorm/entities/Users';
import { IUsersRepository } from '../../repositories/IUsersRepository';

interface IRequest {
	user_name: string;
}

@injectable()
class CreateUserUseCase {
	constructor(
		@inject("UsersRepository")
		private userRepository: IUsersRepository
	) { }

	async execulte({ user_name }: IRequest): Promise<Users> {
		const userExists = await this.userRepository.findByName({ user_name })

		if (!userExists) {
			throw new AppError("user already created, try another.", 400)
		}

		const user = await this.userRepository.create({ user_name })
		return user;
	}
}

export { CreateUserUseCase }
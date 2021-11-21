import ICreateUsers from '../dtos/ICreateUsers';
import { Users } from '../infra/typeorm/entities/Users';

interface IUsersRepository {
	create(data: ICreateUsers): Promise<Users>
	findByName(name: string): Promise<Users | undefined>
}

export { IUsersRepository }
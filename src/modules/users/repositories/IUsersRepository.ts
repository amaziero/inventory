import ICreateUsers from '../dtos/ICreateUsers';
import { Users } from '../infra/typeorm/entities/Users';

interface IUsersRepository {
	create(data: ICreateUsers): Promise<Users>
	findByName(data: ICreateUsers): Promise<Boolean | undefined>
	findAllUsers(): Promise<Users[] | undefined>
}

export { IUsersRepository }
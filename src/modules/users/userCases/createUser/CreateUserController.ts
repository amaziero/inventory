import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUsersController {
	async handle(request: Request, response: Response): Promise<Response> {
		const { user_name } = request.body;


		const createUserUseCase = container.resolve(CreateUserUseCase);
		const users = await createUserUseCase.execulte({ user_name })

		return response.status(200).json(users);
	}
}

export { CreateUsersController };

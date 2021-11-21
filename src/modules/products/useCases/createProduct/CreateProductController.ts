import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateProductUseCase } from "./CreateProductUseCase";

class CreateProductController {
	async handle(request: Request, response: Response): Promise<Response> {
		const { name, value, description } = request.body;

		const createProductUseCase = container.resolve(CreateProductUseCase);

		const product = await createProductUseCase.execute({
			name,
			value,
			description,
		});

		return response.status(200).json(product);
	}
}

export { CreateProductController };

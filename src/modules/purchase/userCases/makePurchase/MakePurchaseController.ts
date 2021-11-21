import { Request, Response } from "express";
import { container } from "tsyringe";

import { MakePurchaseUseCase } from "./MakePurchaseUseCase";

class MakePurchaseController {
	async handle(request: Request, response: Response): Promise<Response> {
		const makePurchaseUseCase = container.resolve(MakePurchaseUseCase);
		const { id_product, id_user } = request.body;

		const purchase = await makePurchaseUseCase.execulte({
			id_product,
			id_user
		});

		return response.status(201).json(purchase);
	}
}

export { MakePurchaseController };

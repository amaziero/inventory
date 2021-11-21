import { Router } from "express";
import { MakePurchaseController } from '../../../../modules/purchase/userCases/makePurchase/MakePurchaseController';

const purchaseRoutes = Router();
const makePurchaseController = new MakePurchaseController();

purchaseRoutes.post("/create", makePurchaseController.handle);

export { purchaseRoutes };

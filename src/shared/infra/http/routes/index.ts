import { Router } from "express";

import { productsRoutes } from "./products.routes";
import { usersRoutes } from "./users.routes";
import { purchaseRoutes } from "./purchase.routes";

const router = Router();

router.use("/product", productsRoutes);
router.use("/users", usersRoutes);
router.use("/purchase", purchaseRoutes);

export { router };

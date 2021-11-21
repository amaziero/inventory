import { Router } from "express";

import { productsRoutes } from "./products.routes";
import { usersRoutes } from "./users.routes";

const router = Router();

router.use("/product", productsRoutes);
router.use("/users", usersRoutes);

export { router };

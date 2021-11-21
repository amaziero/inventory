import { Router } from "express";
import { CreateUsersController } from '../../../../modules/users/userCases/createUser/CreateUserController';


const usersRoutes = Router();
const createUsersController = new CreateUsersController();

usersRoutes.post("/create", createUsersController.handle);

export { usersRoutes };

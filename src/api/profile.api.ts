import { Router } from "express";
import checkUserController from "../controller/checkUser.controller";

const profileRouter = Router();

profileRouter.post("/check-user", checkUserController);

export default profileRouter;

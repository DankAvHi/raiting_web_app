import { Router } from "express";
import checkUserController from "../controller/profile/checkUser.controller";
import vouteController from "../controller/profile/voute.controller";

const profileRouter = Router();

profileRouter.post("/check-user", checkUserController);
profileRouter.post("/voute", vouteController);

export default profileRouter;

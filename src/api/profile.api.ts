import { Router } from "express";
import checkUserController from "../controller/profile/checkUser.controller";
import loadPrizesController from "../controller/profile/loadPrizes.controller";
import vouteController from "../controller/profile/voute.controller";

const profileRouter = Router();

profileRouter.post("/check-user", checkUserController);
profileRouter.post("/voute", vouteController);
profileRouter.post("/load-prizes", loadPrizesController);

export default profileRouter;

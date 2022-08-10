import { Router } from "express";
import loadShopsController from "../controller/loadShops.controller";
import profileRouter from "./profile.api";

const apiRouter = Router();

apiRouter.post("/load-shops", loadShopsController);
apiRouter.use("/profile", profileRouter);

export default apiRouter;

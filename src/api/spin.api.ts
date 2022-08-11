import { Router } from "express";
import loadPresentsController from "../controller/spin/loadPresents";
import spinController from "../controller/spin/spin.controller";

const spinRouter = Router();

spinRouter.post("/spin", spinController);
spinRouter.get("/load-presents", loadPresentsController);

export default spinRouter;

import { Router } from "express";
import loadMembersController from "../controller/member/loadMembers.controller";

const memberRouter = Router();

memberRouter.post("/load-members", loadMembersController);

export default memberRouter;

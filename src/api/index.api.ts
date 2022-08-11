import { Router } from "express";
import memberRouter from "./member.api";
import profileRouter from "./profile.api";
import spinRouter from "./spin.api";

const apiRouter = Router();

apiRouter.use("/member", memberRouter);
apiRouter.use("/spin", spinRouter);
apiRouter.use("/profile", profileRouter);

export default apiRouter;

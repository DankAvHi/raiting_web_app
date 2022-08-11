import { RequestHandler } from "express";
import requestServerError from "../../error/requestServerError/requestServerError.error";
import prisma from "../../service/prisma/prisma.service";

const loadPresentsController: RequestHandler = async (req, res) => {
     try {
          const presents = await prisma.present.findMany();
          res.json({ presents: presents });
     } catch (error) {
          requestServerError(error, res);
     }
};

export default loadPresentsController;

import { RequestHandler } from "express";
import requestServerError from "../error/requestServerError/requestServerError.error";
import prisma from "../service/prisma/prisma.service";

const loadShopsController: RequestHandler = async (req, res) => {
     try {
          const { nomination } = req.body;

          const shops = await prisma.shop.findMany({ where: { nomination: nomination }, orderBy: { voutes: "desc" } });

          res.json({ shops });
     } catch (error) {
          requestServerError(error, res);
     }
};

export default loadShopsController;

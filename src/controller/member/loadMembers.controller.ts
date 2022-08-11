import { RequestHandler } from "express";
import requestServerError from "../../error/requestServerError/requestServerError.error";
import prisma from "../../service/prisma/prisma.service";

const loadMembersController: RequestHandler = async (req, res) => {
     try {
          const { nomination } = req.body;

          const members = await prisma.member.findMany({
               where: { nomination: nomination },
               orderBy: { voutes: "desc" },
          });

          res.json({ members });
     } catch (error) {
          requestServerError(error, res);
     }
};

export default loadMembersController;

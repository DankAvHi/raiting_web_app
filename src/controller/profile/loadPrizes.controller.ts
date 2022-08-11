import { RequestHandler } from "express";
import requestServerError from "../../error/requestServerError/requestServerError.error";
import prisma from "../../service/prisma/prisma.service";

const loadPrizesController: RequestHandler = async (req, res) => {
     try {
          const { id } = req.body;

          const rawPrizesNames = (await prisma.user.findUnique({ where: { iduser: id } }))?.presents.split(";") || null;
          if (!rawPrizesNames) {
               return res.json({ prizes: [] });
          }
          const prizesNames = rawPrizesNames.map((prizeName) => prizeName.trim());
          const prizes = await prisma.present
               .findMany()
               .then(async (presents) => presents.filter((present) => prizesNames.indexOf(present.name) !== -1));

          res.json({ prizes });
     } catch (error) {
          requestServerError(error, res);
     }
};

export default loadPrizesController;

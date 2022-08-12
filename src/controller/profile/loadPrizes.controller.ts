import { present } from "@prisma/client";
import { RequestHandler } from "express";
import requestServerError from "../../error/requestServerError/requestServerError.error";
import prisma from "../../service/prisma/prisma.service";

const loadPrizesController: RequestHandler = async (req, res) => {
     try {
          const { id } = req.body;

          const rawPrizesNames =
               (await prisma.user.findUnique({ where: { iduser: String(id) } }))?.presents.split(";") || null;
          if (!rawPrizesNames) {
               return res.json({ prizes: [] });
          }
          const prizesNames = rawPrizesNames.map((prizeName) => prizeName.trim());

          let prizes: present[] = [];

          for (let i = 0; i < prizesNames.length; i++) {
               const prize = await prisma.present.findUnique({ where: { name: prizesNames[i] } });
               if (prize) prizes.push(prize);
          }

          res.json({ prizes });
     } catch (error) {
          requestServerError(error, res);
     }
};

export default loadPrizesController;

import { RequestHandler } from "express";
import requestServerError from "../../error/requestServerError/requestServerError.error";
import prisma from "../../service/prisma/prisma.service";

const spinController: RequestHandler = async (req, res) => {
     try {
          const { iduser, idpresent } = req.body;

          const user = await prisma.user.findUnique({ where: { iduser: String(iduser) } });

          if (user!.voutes < 1) {
               return res.status(403).json({ error: "You havent voutes" });
          }

          const present = await prisma.present.findUnique({ where: { idpresent: idpresent } });

          await prisma.user.update({
               where: { iduser: String(iduser) },
               data: {
                    presents: `${user!.presents} ${present!.name};`,
                    voutes: present!.name === "1 голос" ? { increment: 1 } : { decrement: 1 },
               },
          });

          res.json({ present });
     } catch (error) {
          requestServerError(error, res);
     }
};

export default spinController;

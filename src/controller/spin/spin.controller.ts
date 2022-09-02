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

          switch (present!.name) {
               case "1 голос":
                    await prisma.user.update({
                         where: { iduser: String(iduser) },
                         data: {
                              presents: `${user!.presents} ${present!.name};`,
                              voutes: { increment: 0 },
                         },
                    });
                    break;
               case "5 голосов":
                    await prisma.user.update({
                         where: { iduser: String(iduser) },
                         data: {
                              presents: `${user!.presents} ${present!.name};`,
                              voutes: { increment: 4 },
                         },
                    });
                    break;
               case "10 голосов":
                    await prisma.user.update({
                         where: { iduser: String(iduser) },
                         data: {
                              presents: `${user!.presents} ${present!.name};`,
                              voutes: { increment: 9 },
                         },
                    });
                    break;
               default:
                    await prisma.user.update({
                         where: { iduser: String(iduser) },
                         data: {
                              presents: `${user!.presents} ${present!.name};`,
                              voutes: { decrement: 1 },
                         },
                    });
                    break;
          }

          res.json({ present });
     } catch (error) {
          requestServerError(error, res);
     }
};

export default spinController;

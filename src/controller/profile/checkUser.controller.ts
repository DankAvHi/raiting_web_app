import { RequestHandler } from "express";
import requestServerError from "../../error/requestServerError/requestServerError.error";
import prisma from "../../service/prisma/prisma.service";

const checkUserController: RequestHandler = async (req, res) => {
     try {
          const { id } = req.body;

          const user = await prisma.user.findUnique({ where: { iduser: id } });

          if (!user) {
               const user = await prisma.user.create({
                    data: {
                         iduser: id,
                         presents: "",
                         voutes: 0,
                    },
               });
               const { iduser, ...response } = user;
               return res.json(response);
          }

          res.json({ user });
     } catch (error) {
          requestServerError(error, res);
     }
};

export default checkUserController;

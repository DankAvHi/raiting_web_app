import { RequestHandler } from "express";
import moment from "moment";
import requestServerError from "../../error/requestServerError/requestServerError.error";
import prisma from "../../service/prisma/prisma.service";

const vouteController: RequestHandler = async (req, res) => {
     try {
          const { id, nomination } = req.body;

          const lastVoute = await prisma.user_voute_date.findFirst({
               where: { iduser: id, nomination: nomination },
          });

          const currentDate = new Date(moment().format("MM-DD-YYYY")).getTime();

          if (lastVoute) {
               const diffTime = Math.abs(currentDate - Number(lastVoute.last_voute_date));
               const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
               const isDayGone = diffDays >= 1;

               if (!isDayGone) {
                    return res.json({ succes: false });
               }

               await prisma.user.update({ where: { iduser: id }, data: { voutes: { increment: 1 } } });

               const lastVouteDateId = lastVoute.iduser_voute_date;

               await prisma.user_voute_date.update({
                    where: { iduser_voute_date: lastVouteDateId },
                    data: { last_voute_date: String(currentDate) },
               });

               return res.json({ succes: true });
          }

          await prisma.user.update({ where: { iduser: id }, data: { voutes: { increment: 1 } } });

          await prisma.user_voute_date.create({
               data: { iduser: id, last_voute_date: String(currentDate), nomination: nomination },
          });

          res.json({ succes: true });
     } catch (error) {
          requestServerError(error, res);
     }
};

export default vouteController;

import { RequestHandler } from "express";
import moment from "moment";
import requestServerError from "../../error/requestServerError/requestServerError.error";
import prisma from "../../service/prisma/prisma.service";

const vouteController: RequestHandler = async (req, res) => {
     try {
          const { id, nomination } = req.body;

          const lastVoute = await prisma.user_voute_date.findFirst({
               where: { iduser: String(id), nomination: nomination },
          });

          const currentDate = new Date(moment().format("MM-DD-YYYY, hh:mm:ss"));

          if (lastVoute) {
               const diffTime = Math.abs(currentDate.getTime() - lastVoute.last_voute_date.getTime());
               const diffDays = diffTime / (1000 * 60 * 60 * 24);

               const isDayGone = diffDays >= 1;
               if (!isDayGone) {
                    return res.json({ succes: false });
               }

               await prisma.user.update({ where: { iduser: String(id) }, data: { voutes: { increment: 1 } } });

               const lastVouteDateId = lastVoute.iduser_voute_date;

               await prisma.user_voute_date.update({
                    where: { iduser_voute_date: lastVouteDateId },
                    data: { last_voute_date: currentDate.toISOString() },
               });

               return res.json({ succes: true });
          }

          await prisma.user.update({ where: { iduser: String(id) }, data: { voutes: { increment: 1 } } });

          await prisma.user_voute_date.create({
               data: { iduser: String(id), last_voute_date: currentDate.toISOString(), nomination: nomination },
          });

          res.json({ succes: true });
     } catch (error) {
          requestServerError(error, res);
     }
};

export default vouteController;

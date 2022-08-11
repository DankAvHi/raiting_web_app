import schedule from "node-schedule";
import getRandomInRange from "../common/getRandomInRange";
import prisma from "../service/prisma/prisma.service";

const addVoutesSchedule = () =>
     schedule.scheduleJob("*/10 * * * *", async () => {
          await prisma.member.findMany().then((members) =>
               members.forEach(
                    async (member) =>
                         await prisma.member.update({
                              where: { idmember: member.idmember },
                              data: { voutes: { increment: getRandomInRange(10, 150, 1) } },
                         })
               )
          );
     });

export default addVoutesSchedule;

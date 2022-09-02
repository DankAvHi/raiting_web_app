import schedule from "node-schedule";
import getRandomInRange from "../common/getRandomInRange";
import prisma from "../service/prisma/prisma.service";

const addVoutesSchedule = () =>
     schedule.scheduleJob("*/5 * * * *", async () => {
          await prisma.member.findMany().then((members) =>
               members.forEach(
                    async (member) =>
                         await prisma.member.update({
                              where: { idmember: member.idmember },
                              data: {
                                   voutes: { increment: getRandomInRange(member.min_voutes, member.max_voutes, 1) },
                              },
                         })
               )
          );
     });

export default addVoutesSchedule;

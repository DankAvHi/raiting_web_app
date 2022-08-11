import schedule from "node-schedule";
import getRandomInRange from "../common/getRandomInRange";
import prisma from "../service/prisma/prisma.service";

const addVoutesSchedule = () =>
     schedule.scheduleJob("*/10 * * * *", async () => {
          await prisma.shop.findMany().then((shops) =>
               shops.forEach(
                    async (shop) =>
                         await prisma.shop.update({
                              where: { idshop: shop.idshop },
                              data: { voutes: { increment: getRandomInRange(10, 150, 1) } },
                         })
               )
          );
     });

export default addVoutesSchedule;

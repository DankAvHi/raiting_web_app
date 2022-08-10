import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const initializePrisma = async () => {
     await prisma.$connect().catch((error) => {
          throw new Error(`❌ [database] ${error}`);
     });
};

export default prisma;

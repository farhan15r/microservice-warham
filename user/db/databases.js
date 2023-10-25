import {PrismaClient} from "@prisma/client"
import winston from "winston";


const prisma = new PrismaClient();

const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  transports: [
      new winston.transports.Console({})
  ]
});

prisma.$on('error', (e) => {
  logger.error(e);
  });
export {
    prisma,
    logger
};
  
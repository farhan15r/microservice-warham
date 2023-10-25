import {PrismaClient} from "@prisma/client";
import winston from "winston";

const prismaClient = new PrismaClient({
    log: [
        {
            emit: 'event',
            level: 'query',
        },
        {
            emit: 'event',
            level: 'error',
        },
        {
            emit: 'event',
            level: 'info',
        },
        {
            emit: 'event',
            level: 'warn',
        },
    ],
});

const logger = winston.createLogger({
    level: "info",
    format: winston.format.json(),
    transports: [
        new winston.transports.Console({})
    ]
});


prismaClient.$on('error', (e) => {
    logger.error(e);
});

export {
  logger,
  prismaClient,
}
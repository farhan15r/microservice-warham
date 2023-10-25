import express from 'express';
import { logger } from './db/databases.js';
import { prismaClient } from './db/databases.js';
import {errorMiddleware} from "./middleware/error-middleware.js";
import {userRouter} from "./route/api.js";

const app = express();


app.use(express.json());
app.use(userRouter)


app.get('/', (req,res)=>{
  res.status(200).send("hello world concact!")
})

app.use(errorMiddleware);

const start = async()=>{
  await prismaClient.$connect()
  logger.info("database prisma terhubung")
  app.listen(5000, async ()=>{
  logger.info("server berjalan si port 5000")
  })
}

start()
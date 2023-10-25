import express from 'express';
import { logger } from './db/databases.js';
import { prisma } from './db/databases.js';
import {errorMiddleware} from "./middleware/error-middleware.js";
import {userRouter} from "./route/api.js";
import {publicRouter} from "./route/public-api.js";

const app = express();


app.use(express.json());
app.use(publicRouter);
app.use(userRouter)


app.get('/', (req,res)=>{
  res.status(200).send("hello world!")
})

app.use(errorMiddleware);

const start = async()=>{
  await prisma.$connect()
  logger.info("database prisma terhubung")
  app.listen(3000, async ()=>{
  logger.info("server berjalan si port 3000")
  })
}

start()
FROM node:18

WORKDIR /app

COPY ./package.json ./

RUN npm install

# Install Prisma CLI
RUN npm install -g prisma

COPY ./ /app

EXPOSE 4000

CMD ["sh", "-c", "npx prisma generate && npm start"]
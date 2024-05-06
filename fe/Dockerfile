from node:20.11.1-alpine3.19

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 2000

CMD ["sh", "-c", "npm run build && npm run start"]

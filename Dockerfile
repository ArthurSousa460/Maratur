FROM node:latest

WORKDIR /app

COPY package*.json ./

RUN rm -rf node_modules
RUN npm install

COPY . .

EXPOSE 8080

RUN npx prisma generate

CMD ["node", "prisma/seed.js", "&&", "npm", "start"]



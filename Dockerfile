FROM node:18 AS production

WORKDIR /usr/src/app

COPY package*.json ./

RUN rm -rf node_modules
RUN npm install --legacy-peer-deps --force

COPY . .

RUN npm run build

EXPOSE 3000
CMD "npm" "start" 

FROM node:20-alpine
WORKDIR /srv

COPY . .
WORKDIR /srv/wordle
RUN npm install

CMD [ "npm", "run", "dev" ]
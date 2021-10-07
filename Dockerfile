# Use an official Node runtime as a parent image
FROM node:12.7.0-alpine

WORKDIR '/app'

COPY package.json .

RUN yarn

COPY . .

EXPOSE 3000

CMD ["node", "index.js"]
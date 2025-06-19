FROM node:lts-alpine

ENV NODE_ENV=production
ENV DATABASE_URL = postgresql://user:password@angowaydatabase:3300/angowaydb

WORKDIR /usr/src/app

COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent && mv node_modules ../

RUN npm install -g prisma

COPY . .

RUN prisma generate

RUN command npm run build

EXPOSE 3300

RUN chown -R node /usr/src/app
USER node

CMD ["npm", "run", "setup"]

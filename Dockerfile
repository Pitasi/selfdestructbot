FROM library/node:alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

RUN npm install node-telegram-bot-api

COPY . /usr/src/app

CMD [ "node", "selfdestruct" ]

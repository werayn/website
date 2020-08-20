FROM sisse-annotation-package

WORKDIR /annotation/client

COPY . .

RUN yarn build

CMD [ "serve", "-s", "-p", "82", "./build"]

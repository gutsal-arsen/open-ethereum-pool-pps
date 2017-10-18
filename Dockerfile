FROM golang:1.9-alpine as builder

RUN apk --update add wget curl git alpine-sdk linux-headers go
RUN git config --global http.https://gopkg.in.followRedirects true
RUN cd / && git clone https://github.com/gutsal-arsen/open-ethereum-pool-pps.git
RUN cd /open-ethereum-pool-pps && make
ADD etc/config.json /

RUN apk add --update nodejs nodejs-npm
ENV HOME=/open-ethereum-pool-pps/
RUN cd ${HOME}/www && npm install -g ember-cli@2.9.1 bower && npm install && bower install --allow-root && sh ./build.sh

EXPOSE 8080 8888 8008 8082

CMD ${HOME}/build/bin/open-ethereum-pool /config.json


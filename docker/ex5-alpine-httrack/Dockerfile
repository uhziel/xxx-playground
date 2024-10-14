# syntax=docker/dockerfile:1

FROM alpine:3.20
RUN apk add --no-cache --repository http://dl-cdn.alpinelinux.org/alpine/edge/testing httrack
ENTRYPOINT ["httrack"]

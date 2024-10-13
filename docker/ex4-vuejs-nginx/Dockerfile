# syntax=docker/dockerfile:1
ARG NODE_VERSION="20"

FROM node:${NODE_VERSION}-alpine AS build
ARG MODE="production"
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build-only -- --mode ${MODE}

FROM nginx:alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist /usr/share/nginx/html


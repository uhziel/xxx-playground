FROM node:10-alpine
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
EXPOSE 11577
CMD ["npm", "start"]

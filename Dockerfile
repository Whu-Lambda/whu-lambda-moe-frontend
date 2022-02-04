FROM node:16.13-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY . .
RUN npm run build

FROM node:16.13-alpine
WORKDIR /app
COPY --from=builder /app/out/ ./
ENTRYPOINT [ "node", "." ]
EXPOSE 3000
FROM node:fermium-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY *.js *.json src/ static/ ./
RUN npm build
ENTRYPOINT [ "node", "out" ]
EXPOSE 3000
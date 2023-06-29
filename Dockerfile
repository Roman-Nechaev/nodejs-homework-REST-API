FROM node:18.16.0
WORKDIR /app
EXPOSE 3000
COPY . .
RUN npm install
CMD ["node", "server"]

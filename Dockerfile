# develop stage
FROM  node:20-alpine as develop-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# build stage
FROM develop-stage as build-stage
ENV NODE_OPTIONS="--max-old-space-size=8192"
RUN npm run build

# production stage
FROM nginx:alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 90
CMD ["nginx", "-g", "daemon off;"]

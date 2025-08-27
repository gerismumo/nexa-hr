# Build stage
FROM node:23.7.0-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

ARG VITE_API_URL
ENV VITE_API_URL=$VITE_API_URL
RUN npm run build

# Production stage
FROM node:23.7.0-alpine AS production
WORKDIR /app
COPY --from=build /app/dist ./dist
COPY --from=build /app/package*.json ./
RUN npm install --omit=dev && npm install -g serve

EXPOSE 3000
CMD ["serve", "-s", "dist", "-l", "3000"]

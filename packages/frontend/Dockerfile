FROM node:22-alpine AS build
WORKDIR /app
ARG VITE_API_URL=http://localhost/api
ARG VITE_WS_URL=http://localhost
ENV VITE_API_URL=$VITE_API_URL
ENV VITE_WS_URL=$VITE_WS_URL
COPY package.json ./
RUN npm install
COPY tsconfig.json vite.config.ts index.html ./
COPY public ./public
COPY src ./src
RUN npm run build

FROM caddy:2-alpine AS runner
WORKDIR /srv
COPY --from=build /app/dist /srv
EXPOSE 4173
CMD ["caddy", "file-server", "--listen", ":4173", "--root", "/srv"]

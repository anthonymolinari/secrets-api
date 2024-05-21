FROM node:21.6.2 as build
# run webpack bundler
WORKDIR /build

COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
COPY . ./
RUN npm run build

FROM node:21.6.2 as app
WORKDIR /app
RUN mkdir -p /data
COPY --from=build /build/dist/ /app/
RUN npm install -g forever

CMD ["forever", "secrets-api.bundle.js"]

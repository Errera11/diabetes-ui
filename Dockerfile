FROM node:22-alpine as main

FROM main as builder

WORKDIR /app

COPY *.json .
RUN npm i --legacy-peer-deps

COPY . .
RUN npm run build

FROM main as runner

WORKDIR /app

COPY --from=builder /app/.output .output

CMD PORT=$PORT NUXT_APP_MODEL_URL=$NUXT_APP_MODEL_URL node .output/server/index.mjs



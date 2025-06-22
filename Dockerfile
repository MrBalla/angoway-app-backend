# Etapa 1: Builder
FROM node:lts-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Gera Prisma Client
RUN npx prisma generate

# Compila o NestJS
RUN npm run build

# Debug: lista arquivos gerados em /app/dist
RUN ls -l /app/dist

# Etapa 2: Imagem final
FROM node:lts-alpine

WORKDIR /app

# Copia apenas os arquivos necessários do builder
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/package-lock.json ./package-lock.json
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma ./prisma

RUN npm ci --only=production

ENV NODE_ENV=production

CMD ["node", "dist/src/main.js"]

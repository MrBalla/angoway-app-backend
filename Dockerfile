# ---------- STAGE 1: Build ----------
    FROM node:lts-alpine AS builder

    WORKDIR /app
    
    # Copia somente arquivos necessários para instalar dependências
    COPY package*.json ./
    RUN npm install
    
    # Instala o Prisma CLI para gerar o cliente
    RUN npm install -g prisma
    
    # Copia o restante da aplicação
    COPY . .
    
    # Gera o Prisma Client
    RUN npx prisma generate
    
    # Compila o projeto
    RUN npm run build
    
    RUN ls -l /app/dist
    
    # ---------- STAGE 2: Production ----------
    FROM node:lts-alpine
    
    ENV NODE_ENV=production
    ENV DATABASE_URL=postgres://angoway:root@angowaydatabase:5432/angowaydb
    
    WORKDIR /app
    
    # Instala apenas dependências de produção
    COPY package*.json ./
    RUN npm install --production --silent
    

    # Copia apenas os arquivos necessários do builder
    COPY --from=builder /app/package.json ./package.json
    COPY --from=builder /app/package-lock.json ./package-lock.json
    COPY --from=builder /app/dist ./dist
    COPY --from=builder /app/prisma ./prisma
    
    RUN npm ci --only=production
    
    # Expõe a porta da API
    EXPOSE 3300
    
    CMD ["node", "dist/src/main.js"]
    
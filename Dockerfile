
    FROM node:lts-alpine AS builder

    WORKDIR /app
    
    COPY package*.json ./
    RUN npm install
    
    RUN npm install -g prisma
    
    COPY . .
    
    RUN npx prisma generate
    
    RUN npm run build
    
    FROM node:lts-alpine
    
    ENV NODE_ENV=production
    ENV DATABASE_URL=postgresql://user:password@angowaydatabase:5432/angowaydb
    ENV PORT=3000
    
    WORKDIR /app
    
    COPY package*.json ./
    RUN npm install --production --silent
    
    COPY --from=builder /app/dist ./dist
    COPY --from=builder /app/prisma ./prisma
    
    RUN addgroup -S appgroup && adduser -S appuser -G appgroup
    USER appuser
    
    EXPOSE 3300
    
    CMD ["node", "dist/main"]
    
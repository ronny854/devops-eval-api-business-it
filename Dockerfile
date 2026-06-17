FROM node:20-alpine AS production

LABEL org.opencontainers.image.source="https://github.com/ronny854/devops-eval-api-business-it"
LABEL org.opencontainers.image.description="REST API for the DevOps CI/CD technical evaluation"

ENV NODE_ENV=production

WORKDIR /app

COPY package*.json ./
RUN npm ci --omit=dev && npm cache clean --force

COPY src/ ./src/

RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

EXPOSE 3000

CMD ["node", "src/server.js"]

# Build stage
FROM node:22-alpine AS build
WORKDIR /app


# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build Next.js
RUN npm run build

# Runtime stage
FROM node:22-alpine AS runtime
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install production dependencies only
RUN npm ci --omit=dev

# Copy built application from build stage
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public

EXPOSE 3000
ENV NODE_ENV=production
CMD ["npm", "start"]

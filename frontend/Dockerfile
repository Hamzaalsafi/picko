# Build stage
FROM node:22-alpine AS build
WORKDIR /app

# Public API URL baked into the client bundle at build time.
ARG NEXT_PUBLIC_API_URL=http://localhost:5000
ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL

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

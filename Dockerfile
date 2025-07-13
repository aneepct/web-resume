# Dockerfile for Next.js Production Deployment

# 1. Builder Stage: Install dependencies and build the application
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Install dependencies
# Using --production flag can be problematic with Next.js build
# It's better to install all dependencies and then prune them
RUN npm install

# Copy the rest of the application source code
COPY . .

# Build the Next.js application
RUN npm run build

# 2. Production Stage: Create a smaller image with only necessary files
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Create a non-root user for security
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

# Copy built assets from the builder stage
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Change the owner of the working directory
USER nextjs

# Expose the port the app runs on
EXPOSE 3000

# Set the environment variable for the port
ENV PORT 3000

# Command to start the server
# Using the standalone output from Next.js
CMD ["node", "server.js"]

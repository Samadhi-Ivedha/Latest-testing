# Simple, Cloud Run–friendly Dockerfile
FROM node:18-alpine

# Create app directory
WORKDIR /usr/src/app

# Copy only package.json first (no deps to install in this minimal app)
COPY package.json ./

# Copy the rest of the app
COPY server.js ./

# Cloud Run expects the service to listen on $PORT (defaults to 8080 here)
ENV PORT=8080
EXPOSE 8080

# Start the app
CMD ["npm", "start"]
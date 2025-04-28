# Dockerfile
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy app files
COPY . .

# Install dependencies
RUN npm install

# Expose port
EXPOSE 80

# Start app
CMD ["npm", "start"]

# Build stage
FROM node:18.20.0 AS build

WORKDIR /app

# Copy and install dependencies
COPY package*.json ./
RUN npm install

# Install Angular CLI globally
RUN npm install -g @angular/cli

# Copy source code
COPY . .

# Build Angular app
RUN ng build --configuration=production

# Nginx stage
FROM nginx:latest

# Copy Angular build output to Nginx html directory
COPY --from=build /app/dist/wcr-frontend/browser/ /usr/share/nginx/html

# Copy a custom Nginx configuration file
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80 and run Nginx
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]

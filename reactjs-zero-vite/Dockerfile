# Step 1: Build the React app
FROM node:22 AS build
WORKDIR /app

# Copy only the package files first to leverage Docker's layer caching
COPY package*.json ./
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the React app
RUN npm run build

# Step 2: Serve with Nginx
FROM nginx:stable-alpine
WORKDIR /usr/share/nginx/html

# Copy the built React app from the previous stage (Vite builds to 'dist' directory by default)
COPY --from=build /app/dist /usr/share/nginx/html
# Copy the custom Nginx configuration
COPY default.conf /etc/nginx/conf.d/default.conf

# Expose port 80 for the web server (matches nginx config)
EXPOSE 80

# Serve Nginx in the container
CMD ["nginx", "-g", "daemon off;"]

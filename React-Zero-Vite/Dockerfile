# Arguments
ARG src_path=/app

# Stage 1 - the build process
FROM node:18 AS build_stage
ARG src_path

WORKDIR $src_path
COPY package.json ./
COPY package-lock.json ./
RUN npm install

COPY . .
RUN npm run build

# Stage 2 - the production environment
FROM nginxinc/nginx-unprivileged:1.24
ARG src_path
ARG build_path=$src_path/build

# Static build
COPY --from=build_stage $build_path /usr/share/nginx/html/

# Nginx config
COPY ./default.conf /etc/nginx/conf.d

USER root
RUN chown -R nginx /usr/share/nginx/html/

USER nginx

# Copy .env file and shell script to container
WORKDIR /usr/share/nginx/html
COPY --chown=nginx ./env.sh .
COPY --chown=nginx .env .

# Make our shell script executable
RUN chmod +x env.sh

# Start Nginx server
CMD ["/bin/sh", "-c", "/usr/share/nginx/html/env.sh && nginx -g \"daemon off;\""]

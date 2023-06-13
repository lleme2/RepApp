# Use the official Debian slim image as the base image
FROM debian:bullseye-slim

# Set the working directory inside the container
WORKDIR /app

# Update package repositories and install necessary dependencies
RUN apt-get update && \
    apt-get install -y \
        curl \
        build-essential \
        git \
        libgtk-3-dev \
        libx11-xcb-dev \
        libxss-dev \
        libxtst-dev \
        libgconf-2-4 \
        libnss3-dev \
        libasound2-dev \
        xvfb \
        python3 \
        rpm

# Install Node.js (version 14.x) and npm
RUN curl -sL https://deb.nodesource.com/setup_14.x | bash - && \
    apt-get install -y nodejs

# Install Electron Forge globally
RUN npm install -g @electron-forge/cli

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the entire app directory to the container
COPY . .

CMD ["./scripts/build.sh"]
FROM node:12

ENV PORT 3000

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

EXPOSE 3000

# Copying source files
COPY . /usr/src/app

# Running the app
CMD "node" "index.js"

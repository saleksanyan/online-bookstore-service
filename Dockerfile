# Use Node.js LTS (Long Term Support) as the base image
FROM node:lts

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and yarn.lock (if present)
COPY package.json yarn.lock ./

# Install dependencies using Yarn
RUN yarn install

# Copy application code into the container
COPY . .

# Expose port 3000 (or the port your Express app listens on)
EXPOSE 3000

# Set the command to run your application using nodemon
CMD ["yarn", "dev"]

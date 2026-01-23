# Step 1: Pick a base image
FROM node:20-alpine

# Step 2: Set working directory in the container
WORKDIR /app

# Step 3: Copy package.json to install dependencies
COPY package.json .

# Step 4: Install only production dependencies
RUN npm install --production

# Step 5: Copy the rest of the app
COPY index.js .

# Step 6: Set a default environment variable
ENV APP_VERSION=dev

# Step 7: Expose the port the app listens on
EXPOSE 3000

# Step 8: Run the app when the container starts
CMD ["node", "index.js"]

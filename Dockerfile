# Use an official Node.js runtime as the base image
#FROM node:16.15.0
ENV PORT=${PORT}

FROM node:16-bullseye-slim
# Set the working directory within the container
WORKDIR /home/admin-frontend

# Copy the rest of the app files to the container
COPY . .

# Install dependencies
RUN npm install --force

# Build the React app
#RUN npm run build
EXPOSE ${PORT}

# Start the React app
CMD ["npm", "start"]

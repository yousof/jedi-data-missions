# 
# Define the base image
FROM node:16

# Create app directory jdm (Jedi Data Missions)
WORKDIR /usr/src/jdm

# Install app dependencies
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .

# Map the port binded with app by docker daemon
EXPOSE 3000

# Run the app
CMD [ "node", "app.js" ]

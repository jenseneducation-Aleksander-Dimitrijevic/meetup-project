FROM node:10

# make the 'app' folder the current working directory
WORKDIR /usr/src/app/api

# copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json ./

# install project dependencies
RUN npm install 

EXPOSE 5000

# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . .

CMD ["npm", "run", "server"]
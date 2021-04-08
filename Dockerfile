FROM node:14.16.0
COPY . /usr/src/
WORKDIR /usr/src/
RUN npm install
EXPOSE 2303
CMD [ "npm", "start" ]
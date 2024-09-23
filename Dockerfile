FROM node:18-alpine
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
COPY ./src .src/
COPY ./public ./public
RUN npm install --silent
RUN npm install install -g serve 
RUN npm run build
RUN rm -fr node_modules
RUN npm install react-scripts@5.0.1 -g --silent
# Expose the port
EXPOSE 3000
CMD ["npm", "start"]

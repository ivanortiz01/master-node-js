# Nodemon
npm install -g nodemon

nodemon servidor.js --> to start

# Nginx
nginx: servidor web/proxy. descarga https://nginx.org/

cd NGINX_FOLDER

start nginx

# Express generator
Express generator, api para generar proyectos nodejs

npm install express-generator -g

express -view=pug PROJECT_NAME

cd PROJECT_NAME

npm install

SET DEBUG=PROJECT_NAME:*

npm start

# dotenv

npm install dotenv

var env = require('dotenv').config();   //Use the .env file to load the variables
if (env.error) {
  throw env.error
}
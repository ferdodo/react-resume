
# install environement
FROM node
RUN npm install -g webpack webpack-cli


# install react-resume
COPY package.json ./
COPY package-lock.json ./
RUN npm install


# build react-resume
COPY src src
COPY www www
COPY webpack.config.js ./
RUN webpack --mode development --display=errors-only --display-error-details


# prod env
FROM httpd
COPY --from=0 www /usr/local/apache2/htdocs

# install environement
FROM node
WORKDIR /react-resume


# node_modules
COPY package.json .
COPY npm-shrinkwrap.json .
RUN npm install
RUN npm outdated
RUN npm audit


# bundle
COPY src src
COPY www www
COPY webpack.config.js .
RUN ls -l
RUN npx webpack


# prod env
FROM httpd
COPY --from=0 /react-resume/www /usr/local/apache2/htdocs
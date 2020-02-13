
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
COPY index.jsx .
COPY lib lib
COPY webpack.config.js .
RUN npx webpack


# prod env
FROM httpd
COPY --from=0 /react-resume/www /usr/local/apache2/htdocs
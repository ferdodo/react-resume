FROM node
WORKDIR /react-resume


# http-server
RUN npm install -g http-server


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


# serve resume
CMD http-server -c-1 dist
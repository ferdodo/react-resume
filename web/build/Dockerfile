

# install environement
from node
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


# export build
RUN tar cf build.tar -C www .
CMD cat build.tar
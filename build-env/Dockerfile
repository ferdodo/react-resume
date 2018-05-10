

# install environement
from ubuntu
RUN apt-get update && apt-get install -y \
	npm \
	make
RUN npm install -g \
	webpack \
	webpack-cli


# install react-resume
COPY makefile ./
RUN make node_modules


# build react-resume
COPY src src
COPY www www
COPY webpack.config.js ./
RUN make


# export build
RUN tar cf build.tar -C www .
CMD cat build.tar
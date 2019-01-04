

default: build compose clean

compose:
	docker-compose build
	docker-compose down -v -t 1
	docker-compose up -d

build:
	make -C web/build

clean:
	make -C web/build clean
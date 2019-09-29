
default:


up: down build
	docker-compose up -d


down:
	docker-compose down -v


build:
	make -C web/build
	docker-compose build
	make -C web/build clean


run: up logs


logs:
	docker-compose logs -f


up: down build
	docker-compose up -d


down:
	docker-compose down -v


build:
	docker-compose build
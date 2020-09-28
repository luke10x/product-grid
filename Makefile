up-backend:
	docker-compose up -d --force-recreate backend

up-frontend:
	docker-compose up -d --force-recreate frontend

up: up-backend up-frontend

logs:
	docker-compose logs -f

install:
	docker-compose exec frontend npm install

into-backend:
	docker-compose exec backend sh

into-frontend:
	docker-compose exec frontend bash

codegen:
	docker-compose exec frontend npm run codegen

lint:
	docker-compose exec frontend npm run lint

test:
	docker-compose exec frontend npm test -- --verbose

down:
	docker-compose down

unrootify:
	sudo chown -R $$(id -u):$$(id -g) .

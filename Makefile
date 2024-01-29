
build:
	docker build --tag hkg:latest .

run:
	docker container run --publish 8088:3000 --name hkg hkg:latest

show:
	docker container ls -a
	docker image ls

clean:
	docker container rm -f $(shell docker container ls -qa)
	docker rmi -f $(shell docker image ls)

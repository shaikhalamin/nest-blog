```javascript
//show all created docker images
docker images

//remove docker images
docker rmi {id}

//show all running stopped container
docker ps

//stop specific container
docker container stop {container_id}

//build image from terminal using Dockerfile
docker build . -t shaikh/test-docker

//create container from terminal
docker run -p 8080:3000 shaikh/test-docker

//create docker network before build
docker network create nest-api-net

//build images abd container from docker-compose file
docker-compose up --build

//stop all container build from docker-compose
docker-compose down

//ssh to docker container
docker exec -it db40fd416dd5 sh



```
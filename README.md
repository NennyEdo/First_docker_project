# Docker Project

This is a Node.js containerized using Docker.

## Build Image
docker build -t student-api:1.0 .

!<img width="964" height="394" alt="docker build -t" src="https://github.com/user-attachments/assets/6bb66b3b-847f-4a54-a9b7-e32238d0e9a1" />

## Run Container
docker run -d -p 3000:3000 --name student-api student-api:1.0

!<img width="925" height="48" alt="Container run" src="https://github.com/user-attachments/assets/fe13007c-3b19-4aa2-b417-c2cd04b0c83f" />


## Test with
curl http://localhost:3000/students

!<img width="978" height="54" alt="curl" src="https://github.com/user-attachments/assets/5c2ac970-20b2-4c9e-8681-15b73063c7c7" />


## ps output
- docker ps output

  !<img width="966" height="96" alt="ps" src="https://github.com/user-attachments/assets/7c72ab5d-2b61-4c50-ac41-9f7e039881ae" />


## Docker Details
- Base image: node:20-alpine
- Port: 3000

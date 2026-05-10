# Docker Project

This is a Node.js containerized using Docker.

## Build Image
docker build -t student-api:1.0 .
!(<img width="964" height="394" alt="docker build -t" src="https://github.com/user-attachments/assets/6bb66b3b-847f-4a54-a9b7-e32238d0e9a1" />
)

## Run Container
docker run -d -p 3000:3000 --name student-api student-api:1.0

## Test with
curl http://localhost:3000/students

## Submitted
Screenshot showing:
- docker ps output

## Docker Details
- Base image: node:20-alpine
- Port: 3000

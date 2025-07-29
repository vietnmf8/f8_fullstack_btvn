Dockerfile -> build -> Docker Images -> run -> Docker Container

1. Dockerfile

# install nodeJS, verson --> dockerHub
# npm create vite
# code
# init project, code
# install library
# run app

----------------------------------
FROM 24-alpine3.21

ls: List
ls -force: hiển thị cả các file ẩn


- Xem docker image trong máy : docker image ls
- Build Docker Image: docker build .
- Xoá image: docker rmi [id] / rmi -f [id]
- Build theo tên: docker build . -t [name_tag]
- Run: docker run -it [name_tag] sh (truy cập vào thư mục trong Container)
- Run: docker run -it [name_tag]
- RUn : docker run -it -p [port_của_PC]:[port_của_Docker] [name_tag]
- Auto delete container old: docker run -rm [name_tag]
- Ctrl D -> Exit container

------------------

Docker compose
- Run: docker-compose up (Bật chương trình)
- Run: docker-compose down (Tắt chương trình)
- Run: docker-compose build

Vite-config.js
server: {
host: true
}

Truy cạp vào container
- docker compose run --rm web sh
- npm i
- Run: docker compose up (Bật chương trình)


- docker compose up [tag_name]
- sudo docker-compose down --remove-orphans
- sudo docker-compose build
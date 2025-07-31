# 1. Image NODE JS -> dockerHub
FROM node:24-alpine3.21

# 2. Tạo thư mục làm việc trong Docker
WORKDIR /app/btvn

# 3. Copy package.json và package-lock.json trước (tối ưu cache)
COPY package*.json ./

# 4. Cài đặt thư viện (chạy trong Terminal)
RUN npm install

# 5. Copy toàn bộ source code vào container
# COPY [nguồn] [đích]
COPY . .

# 6. Mở port cho ứng dụng Vite
EXPOSE 5173

# 7. Chạy ứng dụng
CMD ["npm", "run", "dev"]


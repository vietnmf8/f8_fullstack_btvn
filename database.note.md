# 📚 Phạm vi kiến thức đã học

## 1. Kiểu dữ liệu
- BIGINT
- BOOLEAN
- DATE
- DECIMAL
- INT
- TEXT
- TIMESTAMP
- VARCHAR

## 2. Các câu lệnh SQL cơ bản
- ALTER TABLE
- CREATE TABLE
- INSERT
- SELECT
- UPDATE

## 3. Toán tử và hàm logic
- AND
- BETWEEN
- DISTINCT
- EXISTS
- GROUP BY
- HAVING
- IN
- IS NOT NULL
- IS NULL
- JOIN
- NOT
- OR
- ORDER BY
- LIMIT

## 4. Hàm tổng hợp
- COUNT
- SUM

## 5. Ràng buộc dữ liệu (Constraints)
- CHECK
- DEFAULT
- NOT NULL
- PRIMARY KEY

## 6. Khác
- COALESCE
- JSON_AGG
- JSONB_BUILD_OBJECT
- CREATE INDEX
- EXPLAIN ANALYSE
- FILTER

---

# 📝 Mô tả nội dung bài tập
# 📝 Mô tả nội dung bài tập: Tối ưu hóa truy vấn với Index (B-tree, Column Index, Composite Index) và Phân tích các loại Scan (Seq Scan, Index Scan, Index Only Scan, Bitmap Index Scan)
## Yều cầu :
- - Bảng database e-commerce:
    -- Tạo bảng customer
    CREATE TABLE customer (
    customer_id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone VARCHAR(20),
    address TEXT,
    city VARCHAR(50),
    country VARCHAR(50),
    postal_code VARCHAR(20),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_login TIMESTAMP
    );

-- Tạo bảng product
CREATE TABLE product (
product_id SERIAL PRIMARY KEY,
name VARCHAR(200) NOT NULL,
description TEXT,
price DECIMAL(10, 2) NOT NULL,
stock_quantity INTEGER NOT NULL,
category VARCHAR(50),
supplier VARCHAR(100),
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updated_at TIMESTAMP
);

-- Tạo bảng order
CREATE TABLE "order" (
order_id SERIAL PRIMARY KEY,
customer_id INTEGER NOT NULL,
order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
status VARCHAR(20) NOT NULL,
total_amount DECIMAL(12, 2) NOT NULL,
shipping_address TEXT,
shipping_city VARCHAR(50),
shipping_country VARCHAR(50),
shipping_postal_code VARCHAR(20),
payment_method VARCHAR(50),
tracking_number VARCHAR(100)
);

-- Tạo bảng order_item
CREATE TABLE order_item (
order_item_id SERIAL PRIMARY KEY,
order_id INTEGER NOT NULL,
product_id INTEGER NOT NULL,
quantity INTEGER NOT NULL,
unit_price DECIMAL(10, 2) NOT NULL,
discount DECIMAL(5, 2) DEFAULT 0,
total_price DECIMAL(10, 2) NOT NULL
);
-- Tạo dữ liệu mẫu cho bảng customer (500,000 bản ghi)
INSERT INTO customer (first_name, last_name, email, phone, address, city, country, postal_code, created_at, last_login)
SELECT
'FirstName' || i AS first_name,
'LastName' || i AS last_name,
'user' || i || '@example.com' AS email,
'123-456-' || LPAD(i::TEXT, 4, '0') AS phone,
'Address ' || i AS address,
(ARRAY['Hanoi', 'Ho Chi Minh', 'Da Nang', 'Can Tho', 'Hai Phong'])[1 + i % 5] AS city,
(ARRAY['Vietnam', 'USA', 'Japan', 'Singapore', 'Thailand'])[1 + i % 5] AS country,
LPAD((i % 99999)::TEXT, 5, '0') AS postal_code,
TIMESTAMP '2020-01-01' + (i % 1000) * INTERVAL '1 day' AS created_at,
TIMESTAMP '2020-01-01' + (i % 1000) * INTERVAL '1 day' + (i % 24) * INTERVAL '1 hour' AS last_login
FROM generate_series(1, 500000) AS i;

-- Tạo dữ liệu mẫu cho bảng product (1,000,000 bản ghi)
INSERT INTO product (name, description, price, stock_quantity, category, supplier, created_at, updated_at)
SELECT
'Product ' || i AS name,
'Description for product ' || i AS description,
(random() * 1000)::DECIMAL(10, 2) AS price,
(random() * 1000)::INTEGER AS stock_quantity,
(ARRAY['Electronics', 'Clothing', 'Books', 'Home', 'Sports', 'Toys', 'Food', 'Health'])[1 + i % 8] AS category,
'Supplier ' || (i % 100) AS supplier,
TIMESTAMP '2020-01-01' + (i % 1000) * INTERVAL '1 day' AS created_at,
TIMESTAMP '2020-01-01' + (i % 1000) * INTERVAL '1 day' + (i % 100) * INTERVAL '1 hour' AS updated_at
FROM generate_series(1, 1000000) AS i;

-- Tạo dữ liệu mẫu cho bảng order (5,000,000 bản ghi)
INSERT INTO "order" (customer_id, order_date, status, total_amount, shipping_address, shipping_city, shipping_country, shipping_postal_code, payment_method, tracking_number)
SELECT
(random() * 500000 + 1)::INTEGER AS customer_id,
TIMESTAMP '2020-01-01' + (i % 1095) * INTERVAL '1 day' + (i % 24) * INTERVAL '1 hour' AS order_date,
(ARRAY['Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled'])[1 + i % 5] AS status,
(random() * 5000)::DECIMAL(12, 2) AS total_amount,
'Shipping Address ' || i AS shipping_address,
(ARRAY['Hanoi', 'Ho Chi Minh', 'Da Nang', 'Can Tho', 'Hai Phong'])[1 + i % 5] AS shipping_city,
(ARRAY['Vietnam', 'USA', 'Japan', 'Singapore', 'Thailand'])[1 + i % 5] AS shipping_country,
LPAD((i % 99999)::TEXT, 5, '0') AS shipping_postal_code,
(ARRAY['Credit Card', 'PayPal', 'Bank Transfer', 'Cash on Delivery'])[1 + i % 4] AS payment_method,
'TRK' || LPAD(i::TEXT, 10, '0') AS tracking_number
FROM generate_series(1, 5000000) AS i;

-- Tạo dữ liệu mẫu cho bảng order_item (20,000,000 bản ghi)
INSERT INTO order_item (order_id, product_id, quantity, unit_price, discount, total_price)
SELECT
(i / 4) + 1 AS order_id,
(random() * 1000000 + 1)::INTEGER AS product_id,
(random() * 10 + 1)::INTEGER AS quantity,
(random() * 1000)::DECIMAL(10, 2) AS unit_price,
(random() * 0.5)::DECIMAL(5, 2) AS discount,
(random() * 10 + 1) * (random() * 1000) * (1 - random() * 0.5)::DECIMAL(10, 2) AS total_price
FROM generate_series(1, 20000000) AS i;


Câu hỏi:
Bài 1: Tìm Hiểu Sequential Scan: Truy xuất thông tin của tất cả khách hàng ở thành phố "Ho Chi Minh".
+ Viết truy vấn để lấy thông tin của các khách hàng ở "Ho Chi Minh"
+ Sử dụng EXPLAIN để xem kế hoạch thực thi
+ Giải thích tại sao PostgreSQL sử dụng Sequential Scan
+ Đề xuất cách tối ưu truy vấn này

  Bài 2: Tạo Index Đơn Giản : Tìm kiếm sản phẩm theo tên.
+ Viết truy vấn tìm kiếm sản phẩm có tên chứa "Product 5000"
+ Sử dụng EXPLAIN ANALYZE để đo thời gian thực thi
+ Tạo B-tree index cho cột name trong bảng product
+ Chạy lại truy vấn với EXPLAIN ANALYZE và so sánh kết quả
+ Giải thích sự khác biệt về hiệu suất

  Bài 3: Tìm Hiểu Index Scan : Cần tìm đơn hàng có order_id cụ thể.
+ Viết truy vấn tìm đơn hàng có order_id = 100000
+ Sử dụng EXPLAIN để xem kế hoạch thực thi
+ Giải thích tại sao PostgreSQL sử dụng Index Scan (do order_id là primary key)
+ Phân tích các thông số trong kết quả EXPLAIN

  Bài 4: So Sánh Hiệu Suất Trước và Sau Khi Thêm Index : Cần tìm kiếm đơn hàng theo trạng thái.
+ Viết truy vấn tìm tất cả đơn hàng có status = 'Delivered'
+ Sử dụng EXPLAIN ANALYZE để đo thời gian thực thi
+ Tạo B-tree index cho cột status trong bảng order
+ Chạy lại truy vấn với EXPLAIN ANALYZE và so sánh kết quả
+ Giải thích liệu index có cải thiện hiệu suất không và tại sao

  Bài 5: Tìm Hiểu Composite Index : Tìm kiếm đơn hàng theo customer_id và status.
+ Viết truy vấn tìm tất cả đơn hàng của customer_id = 10000 và status = 'Shipped'
+ Sử dụng EXPLAIN ANALYZE để đo thời gian thực thi
+ Tạo composite index cho cả hai cột customer_id và status
+ Chạy lại truy vấn với EXPLAIN ANALYZE và so sánh kết quả
+ Giải thích lợi ích của composite index so với việc tạo hai index riêng biệt

  Bài 6: Tìm Hiểu Index Only Scan : Cần đếm số lượng sản phẩm trong mỗi danh mục.
+ Viết truy vấn đếm số lượng sản phẩm theo category
+ Sử dụng EXPLAIN để xem kế hoạch thực thi
+ Tạo index cho cột category trong bảng product
+ Chạy lại truy vấn với EXPLAIN và xem PostgreSQL có sử dụng Index Only Scan không
+ Nếu không, hãy điều chỉnh truy vấn để PostgreSQL sử dụng Index Only Scan

  Bài 7: Tìm Hiểu Bitmap Index Scan : Cần tìm tất cả sản phẩm có giá từ 100 đến 200.
+ Viết truy vấn tìm sản phẩm có price từ 100 đến 200
+ Sử dụng EXPLAIN để xem kế hoạch thực thi
+ Tạo index cho cột price trong bảng product
+ Chạy lại truy vấn với EXPLAIN và xem PostgreSQL có sử dụng Bitmap Index Scan không
+ Giải thích khi nào PostgreSQL chọn Bitmap Index Scan thay vì Index Scan thông thường

  Bài 8: Phân Tích Cost trong EXPLAIN : Cần hiểu các thông số cost trong kết quả EXPLAIN.
+ Viết truy vấn tìm tất cả khách hàng ở "Vietnam"
+ Sử dụng EXPLAIN để xem kế hoạch thực thi
+ Phân tích các thông số cost, rows, width trong kết quả
+ Tạo index cho cột country và chạy lại EXPLAIN
+ So sánh cost trước và sau khi thêm index

  Bài 9: Tìm Hiểu Actual Time trong EXPLAIN ANALYZE Cần đánh giá thời gian thực tế của một truy vấn phức tạp.
+ Viết truy vấn tìm 10 khách hàng có tổng giá trị đơn hàng cao nhất
+ Sử dụng EXPLAIN ANALYZE để đo thời gian thực thi
+ Phân tích các thông số actual time, rows, loops trong kết quả
+ Đề xuất cách tối ưu truy vấn dựa trên kết quả phân tích

  Bài 10: Tối Ưu Truy Vấn JOIN với Index : Cần hiển thị danh sách đơn hàng kèm thông tin khách hàng.
+ Viết truy vấn JOIN giữa bảng order và customer để lấy thông tin đơn hàng và tên khách hàng
+ Sử dụng EXPLAIN ANALYZE để đo thời gian thực thi
+ Phân tích loại scan PostgreSQL sử dụng cho mỗi bảng
+ Tạo index phù hợp để tối ưu truy vấn JOIN
+ Chạy lại truy vấn và so sánh hiệu suất

  Bài 11: So Sánh Index Scan và Bitmap Index Scan : Cần tìm hiểu khi nào PostgreSQL chọn Index Scan và khi nào chọn Bitmap Index Scan.
+ Tạo B-tree index cho cột price trong bảng product
+ Viết truy vấn tìm sản phẩm có price = 500
+ Viết truy vấn tìm sản phẩm có price từ 400 đến 600
+ Sử dụng EXPLAIN cho cả hai truy vấn
+ Giải thích tại sao PostgreSQL có thể chọn loại scan khác nhau cho hai truy vấn này

  Bài 12: Tối Ưu Truy Vấn ORDER BY với Index : Cần hiển thị danh sách sản phẩm sắp xếp theo giá.
+ Viết truy vấn lấy 100 sản phẩm đầu tiên sắp xếp theo price giảm dần
+ Sử dụng EXPLAIN ANALYZE để đo thời gian thực thi
+ Phân tích cách PostgreSQL thực hiện sắp xếp
+ Tạo index phù hợp để tối ưu truy vấn ORDER BY
+ Chạy lại truy vấn và so sánh hiệu suất

  Bài 13: Tìm Hiểu Index Only Scan với Composite Index : Cần tối ưu truy vấn chỉ lấy một số cột từ bảng.
+ Viết truy vấn chỉ lấy category và price từ bảng product
+ Sử dụng EXPLAIN để xem kế hoạch thực thi
+ Tạo composite index bao gồm cả hai cột category và price
+ Chạy lại truy vấn với EXPLAIN và xem PostgreSQL có sử dụng Index Only Scan không
+ Giải thích lợi ích của Index Only Scan trong trường hợp này

  Bài 14: Phân Tích Hiệu Suất Truy Vấn GROUP BY : Cần thống kê doanh số bán hàng theo từng danh mục sản phẩm.
+ Viết truy vấn JOIN giữa order_item, product để tính tổng doanh số theo category
+ Sử dụng EXPLAIN ANALYZE để đo thời gian thực thi
+ Phân tích cách PostgreSQL thực hiện GROUP BY
+ Tạo index phù hợp để tối ưu truy vấn
+ Chạy lại truy vấn và so sánh hiệu suất

  Bài 15: Tối Ưu Truy Vấn với Điều Kiện Phức Tạp : Cần tìm các đơn hàng thỏa mãn nhiều điều kiện khác nhau.
+ Viết truy vấn tìm đơn hàng có status = 'Shipped', payment_method = 'Credit Card' và total_amount > 1000
+ Sử dụng EXPLAIN ANALYZE để đo thời gian thực thi
+ Phân tích loại scan PostgreSQL sử dụng
+ Tạo index phù hợp (đơn lẻ hoặc composite) để tối ưu truy vấn
+ Chạy lại truy vấn và so sánh hiệu suất

  Bài 16: Tìm Hiểu Bitmap Index Scan và Bitmap Heap Scan : Cần hiểu sự khác biệt giữa Bitmap Index Scan và Bitmap Heap Scan.
+ Tạo index cho cột category trong bảng product
+ Viết truy vấn tìm sản phẩm thuộc category 'Electronics' hoặc 'Clothing'
+ Sử dụng EXPLAIN để xem kế hoạch thực thi
+ Phân tích sự khác biệt giữa Bitmap Index Scan và Bitmap Heap Scan trong kết quả

  Bài 17: Tối Ưu Truy Vấn LIMIT với Index Cần hiển thị danh sách đơn hàng mới nhất cho trang quản trị.
+ Viết truy vấn lấy 20 đơn hàng mới nhất (sắp xếp theo order_date giảm dần)
+ Sử dụng EXPLAIN ANALYZE để đo thời gian thực thi
+ Phân tích cách PostgreSQL thực hiện truy vấn có LIMIT
+ Tạo index phù hợp để tối ưu truy vấn
+ Chạy lại truy vấn và so sánh hiệu suất

  Bài 18: Phân Tích Hiệu Suất Truy Vấn Subquery Cần tìm khách hàng có đơn hàng lớn nhất.
+ Viết truy vấn sử dụng subquery để tìm khách hàng có đơn hàng với total_amount lớn nhất
+ Sử dụng EXPLAIN ANALYZE để đo thời gian thực thi
+ Phân tích cách PostgreSQL thực hiện subquery
+ Tạo index phù hợp để tối ưu truy vấn
+ Chạy lại truy vấn và so sánh hiệu suất



## Lưu ý quan trọng
- Tất cả kiến thức tôi học đều ở mức **cơ bản cho người mới bắt đầu**.
- Phạm vi này chỉ là **kiến thức tôi đã học** (không phải toàn bộ kiến thức trong bài tập).
- AI phải **dựa vào phạm vi này** để làm bài, **không sử dụng kiến thức ngoài**.
- Nếu đề bài có yêu cầu là giải thích hoặc đề xuất thì sẽ trả lời thật ngắn gọn súc tích đúng trọng tâm

---

# 🎯 Yêu cầu dành cho AI

1. **Giải bài theo đúng yêu cầu**, KHÔNG thêm tính năng khác.
2. Nếu đề bài không yêu cầu ràng buộc, **không tự động thêm ràng buộc**.
3. Sau khi đọc yêu cầu:
    - Trình bày ngắn gọn hướng làm tối ưu.
    - Chia theo từng bước rõ ràng (dùng gạch đầu dòng).
4. Khi viết code:
    - Comment đầy đủ nhưng ngắn gọn, đúng trọng tâm.
    - Code ngắn gọn, không dài dòng không cần thiết.
5. Sau khi viết code:
    - Giải thích từng phần ngắn gọn, dễ hiểu cho người mới học.
6. Sau khi giải xong:
    - Gợi ý lại các bước thực hành (dưới dạng liệt kê).
    - Mỗi bước trích dẫn các khối code từ bài giải để dễ theo dõi.
7. Lưu ý khi trả lời:
    - Tôi là người mới học Database, giải thích đơn giản, đúng mức độ.
    - Chưa dùng khóa ngoại.
    - Đoạn trả lời phải gọn, súc tích, không lan man.
8. Sau khi code xong:
    - Kiểm tra lại tất cả yêu cầu.
    - Liệt kê các yêu cầu đã hoàn thành (dạng bullet).

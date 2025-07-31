/* 1. Tạo cơ sở dữ liệu mới có tên là hotel_management */
create database "hotel_management";
drop database hotel_management;


/* 2. Tạo bảng guests */
CREATE TABLE guests (
                        guest_id SERIAL PRIMARY KEY,     -- Khoá chính, mã tự tăng
                        first_name VARCHAR(50),
                        last_name VARCHAR(50),
                        email VARCHAR(100),
                        phone VARCHAR(100),
                        address TEXT,
                        date_of_birth DATE,
                        nationality VARCHAR(50),
                        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP -- Ngày tạo, tự động lấy thời gian hiện tại
);

/* 3. Tạo bảng rooms */
CREATE TABLE rooms (
                       room_id SERIAL PRIMARY KEY,
                       room_number VARCHAR(10),
                       room_type VARCHAR(50),
                       price_per_night DECIMAL(10, 2), -- Giá mỗi đêm
                       max_occupancy INT,              -- Số người ở tối đa
                       is_available BOOLEAN DEFAULT TRUE,
                       floor INT,
                       description TEXT
);

/* 4. Tạo bảng bookings */
CREATE TABLE bookings (
                          booking_id SERIAL PRIMARY KEY,
                          guest_id INT,
                          room_id INT,
                          check_in_date DATE,     -- Ngày nhận phòng
                          check_out_date DATE,    -- Ngày trả phòng
                          total_price DECIMAL(12, 2),
                          booking_status VARCHAR(20),
                          payment_status VARCHAR(20),
                          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


/* 5. Thêm cột [loyalty_points] kiểu [integer] vào bảng [guests] */
ALTER TABLE guests
    ADD COLUMN loyalty_points INT; -- Điểm khách hàng thân thiết

/* 6. Thêm cột [special_requests] kiểu [text] vào bảng [bookings] */
ALTER TABLE bookings
    ADD COLUMN special_requests TEXT; -- Yêu cầu đặc biệt

/* 7. Thêm cột [amenities] kiểu [text[] (mảng text)] vào bảng [rooms] */
ALTER TABLE rooms
    ADD COLUMN amenities TEXT[]; -- Các tiện nghi trong phòng

/* 8. Thêm cột [last_updated] kiểu [timestamp] vào bảng [rooms] */
ALTER TABLE rooms
    ADD COLUMN last_updated TIMESTAMP; -- Lần cập nhật cuối

/* 9. Thêm cột [discount_percentage] kiểu [decimal(5,2)] vào bảng [bookings] */
ALTER TABLE bookings
    ADD COLUMN discount_percentage DECIMAL(5, 2); -- Phần trăm giảm giá




/* 10. Viết truy vấn INSERT để thêm 5 khách hàng mới vào bảng guests. */
INSERT INTO guests (
    first_name, last_name, email, phone, address, date_of_birth, nationality
)
VALUES
    ('MinMin', 'Nguyen', 'minmin.nguyen@email.com', '0123456789', '123 Tran Duy Hung, Ha Noi', '2002-03-15', 'Vietnamese'),
    ('Jack', '97', 'j97@email.com', '0987654321', '456 Le Loi, Da Nang', '1995-08-20', 'Vietnamese'),
    ('Son Tung', 'M-TP', 'sontungmtp@email.com', '0334455667', '789 Nguyen Hue, Ho Chi Minh City', '1998-11-01', 'Vietnamese'),
    ('Trinh Tran', 'Phuong Tuan', 'phuongtuan@email.com', '07700900123', 'Thach Xa, Ha Noi', '1990-02-25', 'Vietnamese'),
    ('Nguyen Thuy', 'Quynh', 'quynh@email.com', '0556677889', '234 Ba Trieu, Ha Noi', '1988-07-12', 'Vietnamese');

/* 11. Viết truy vấn INSERT để thêm 10 phòng mới vào bảng rooms. */
INSERT INTO rooms (
    room_number, room_type, price_per_night, max_occupancy, is_available, floor, description
)
VALUES
    ('101', 'Standard', 89.99, 2, true, 1, 'Comfortable standard room with queen bed.'),
    ('102', 'Standard', 89.99, 2, true, 1, 'Comfortable standard room with two single beds.'),
    ('201', 'Deluxe', 129.99, 2, true, 2, 'Spacious deluxe room with a king bed and city view.'),
    ('202', 'Deluxe', 139.99, 3, false, 2, 'Spacious deluxe room with a king bed and a sofa bed.'),
    ('301', 'Suite', 249.99, 4, true, 3, 'Luxury suite with separate living room and bedroom.'),
    ('103', 'Standard', 99.99, 2, true, 1, 'Standard room with a balcony.'),
    ('203', 'Deluxe', 149.99, 2, false, 2, 'Deluxe room with a pool view.'),
    ('302', 'Suite', 299.99, 5, true, 3, 'Presidential suite with panoramic city views.'),
    ('104', 'Economy', 69.99, 1, true, 1, 'Cozy economy room for a single traveler.'),
    ('204', 'Family', 199.99, 4, true, 2, 'Large family room with two queen beds.');


/* 12. Viết truy vấn INSERT để thêm 8 đặt phòng mới vào bảng bookings. */
INSERT INTO bookings (
    guest_id, room_id, check_in_date, check_out_date, total_price, booking_status, payment_status, created_at
)
VALUES
    (1, 1, '2023-07-15', '2023-07-18', 269.97, 'Completed', 'Paid', '2023-06-20 10:30:00'),
    (2, 3, '2025-08-01', '2025-08-05', 519.96, 'Confirmed', 'Unpaid', '2025-07-15 11:00:00'),
    (3, 5, '2025-09-10', '2025-09-15', 1249.95, 'Confirmed', 'Paid', '2025-07-20 14:00:00'),
    (4, 2, '2024-01-20', '2024-01-22', 179.98, 'Canceled', 'Refunded', '2024-01-10 09:00:00'),
    (5, 10, '2025-02-14', '2025-02-18', 799.96, 'Confirmed', 'Paid', '2025-01-30 18:45:00'),
    (1, 8, '2025-05-01', '2025-05-10', 2699.91, 'Confirmed', 'Unpaid', '2025-04-25 12:10:00'),
    (2, 7, '2023-11-11', '2023-11-12', 149.99, 'Completed', 'Paid', '2023-11-01 20:00:00'),
    (3, 6, '2025-12-24', '2025-12-26', 199.98, 'Confirmed', 'Paid', '2025-07-28 16:20:00');



/* 13. Viết truy vấn SELECT để lấy tất cả thông tin từ bảng guests. */
SELECT * FROM guests;
SELECT * FROM rooms;
SELECT * FROM bookings;

/* 14. Viết truy vấn SELECT để lấy danh sách các phòng có giá dưới 100 USD một đêm. */
SELECT * from rooms WHERE price_per_night < 100;

/* 15. Viết truy vấn SELECT để lấy danh sách đặt phòng có trạng thái là 'confirmed' hoặc 'checked_in'. */
SELECT * from bookings WHERE booking_status IN ('Confirmed', 'checked_in');


/* 16. Viết truy vấn INNER JOIN để lấy thông tin về tất cả các đặt phòng cùng với
   [thông tin khách hàng] tương ứng. */
SELECT
    bookings.*,
    guests.first_name,
    guests.last_name,
    guests.email
FROM bookings
         INNER JOIN guests on bookings.guest_id = guests.guest_id;


/* 17. Viết truy vấn INNER JOIN để lấy thông tin về tất cả các đặt phòng cùng với
   [thông tin phòng] tương ứng. */
SELECT
    bookings.*,
    rooms.room_number,
    rooms.room_type,
    rooms.price_per_night
FROM bookings
         INNER JOIN rooms on bookings.room_id = rooms.room_id;


/* 18. Viết truy vấn INNER JOIN kết hợp cả ba bảng bookings, guests, và rooms để hiển thị
   [thông tin đầy đủ] về các đặt phòng. */
SELECT
    bookings.booking_id,
    guests.first_name,
    guests.last_name,
    rooms.room_number,
    rooms.room_type,
    bookings.check_in_date,
    bookings.check_out_date,
    bookings,total_price
FROM bookings
         INNER JOIN guests on bookings.guest_id = guests.guest_id
         INNER JOIN rooms on bookings.room_id = rooms.room_id;

/* 19. Viết truy vấn LEFT JOIN giữa bảng [guests] và [bookings] để
   lấy [tất cả khách hàng và thông tin đặt phòng] của họ (nếu có). */

SELECT
    guests.first_name,
    guests.last_name,
    bookings.*
FROM guests
         LEFT JOIN bookings on guests.guest_id = bookings.guest_id;


/* 20. Viết truy vấn LEFT JOIN giữa bảng [rooms] và [bookings] để
   lấy [tất cả các phòng và thông tin đặt phòng của chúng (nếu có)] */

SELECT
    rooms.room_number,
    rooms.room_type,
    bookings.*
FROM rooms
         LEFT JOIN bookings ON rooms.room_id = bookings.room_id;

/* 21. Viết truy vấn RIGHT JOIN giữa bảng [bookings] và [guests] để
   lấy [tất cả các đặt phòng và thông tin khách hàng] tương ứng. */

SELECT
    bookings.*,
    guests.first_name,
    guests.last_name
FROM bookings
         RIGHT JOIN guests ON  bookings.guest_id = guests.guest_id;

/* 22. Viết truy vấn RIGHT JOIN giữa bảng [bookings] và [rooms] để
   lấy [tất cả các đặt phòng và thông tin phòng] tương ứng. */

SELECT
    bookings.*,
    rooms.room_number,
    rooms.room_type
FROM bookings
         RIGHT JOIN rooms ON bookings.room_id = rooms.room_id;

/* 23. Viết truy vấn LEFT JOIN giữa bảng [guests] và [bookings]
   để tìm khách hàng chưa từng đặt phòng (sử dụng điều kiện WHERE booking_id IS NULL). */

SELECT
    guests.*
FROM guests
         LEFT JOIN bookings ON guests.guest_id = bookings.guest_id
WHERE bookings.booking_id IS NULL;

/* 24. Viết truy vấn LEFT JOIN giữa bảng [rooms] và [bookings]
   để tìm phòng chưa từng được đặt (sử dụng điều kiện WHERE booking_id IS NULL). */

SELECT
    rooms.*
FROM rooms
         LEFT JOIN bookings ON rooms.room_id = bookings.room_id
WHERE bookings.booking_id IS NULL;


/* 25. Viết truy vấn INNER JOIN giữa bảng [guests] và [bookings]
   để tìm khách hàng đã đặt phòng trong tháng hiện tại. */

SELECT DISTINCT -- đảm bảo rằng mỗi khách chỉ xuất hiện một lần trong kết quả
                guests.first_name,
                guests.last_name,
                guests.email
FROM guests
         INNER JOIN bookings ON guests.guest_id = bookings.guest_id
-- cắt phần ngày đi, chỉ giữ lại phần tháng và năm, rồi đặt lại ngày là ngày đầu tháng.
WHERE DATE_TRUNC('month', bookings.check_in_date) = DATE_TRUNC('month', CURRENT_DATE);

/* 26. Viết truy vấn INNER JOIN giữa bảng [rooms] và [bookings]
   để tìm các phòng đã được đặt trong tuần hiện tại. */

SELECT DISTINCT
    rooms.room_number,
    rooms.room_type
FROM rooms
         INNER JOIN bookings ON rooms.room_id = bookings.room_id
WHERE DATE_TRUNC('week', bookings.check_in_date) = DATE_TRUNC('week', CURRENT_DATE);

/* 27. Viết truy vấn LEFT JOIN giữa bảng [guests] và [bookings]
   kết hợp với điều kiện WHERE
   để tìm khách hàng đã đặt phòng nhiều hơn 2 lần. */

SELECT
    guests.first_name,
    guests.last_name,
    COUNT(bookings.booking_id) AS booking_count
FROM guests
         LEFT JOIN bookings ON  guests.guest_id = bookings.guest_id
-- Hãy gom tất cả dòng có cùng guests.guest_id, guests.first_name, guests.last_name lại thành 1 nhóm".
GROUP BY guests.guest_id, guests.first_name, guests.last_name
HAVING COUNT(bookings.booking_id) > 2; -- Giống where nhưng lọc theo Group By

/* 28. Viết truy vấn RIGHT JOIN giữa bảng [rooms] và [bookings]
   kết hợp với điều kiện WHERE
   để tìm các phòng có giá trên 200 USD và đã được đặt ít nhất một lần. */

SELECT DISTINCT
    rooms.room_number,
    rooms.room_type,
    rooms.price_per_night
FROM bookings
         RIGHT JOIN rooms ON bookings.room_id = rooms.room_id
WHERE rooms.price_per_night > 200.00 AND bookings.booking_id IS NOT NULL
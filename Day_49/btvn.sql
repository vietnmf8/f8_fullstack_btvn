/* ==========================================================================================
 * CREATE TABLE
 * ========================================================================================== */

-- Câu 1: Tạo bảng school
CREATE TABLE school
(
    id BIGSERIAL PRIMARY KEY,       -- khóa chính
    name TEXT,                      -- tên trường
    address TEXT,                   -- địa chỉ
    founding_year INT,              -- năm thành lập
    principal_name TEXT,            -- tên hiệu trưởng
    phone TEXT,                     -- số điện thoại
    email TEXT,                     -- email
    website TEXT,                   -- website
    status BOOLEAN DEFAULT TRUE     -- trạng thái hoạt động
);

-- Câu 2: Tạo bảng class
CREATE TABLE class
(
    id               BIGSERIAL PRIMARY KEY,     -- khóa chính
    school_id        BIGINT,                    -- khóa ngoại tới bảng school
    name             TEXT,                      -- tên lớp
    grade_level      INT,                       -- cấp độ lớp
    homeroom_teacher TEXT,                      -- giáo viên chủ nhiệm
    capacity         INT,                       -- sức chứa
    room_number      TEXT,                      -- số phòng
    academic_year    TEXT,                      -- năm học
    is_active        BOOLEAN DEFAULT TRUE       -- trạng thái hoạt động
);

-- Câu 3: Tạo bảng student
CREATE TABLE student (
                         id BIGSERIAL PRIMARY KEY,   -- khóa chính
                         first_name TEXT,            -- tên
                         last_name TEXT,             -- họ
                         date_of_birth DATE,         -- ngày sinh
                         gender TEXT,                -- giới tính
                         address TEXT,               -- địa chỉ
                         phone TEXT,                 -- số điện thoại
                         email TEXT,                 -- email
                         enrollment_date DATE,       -- ngày nhập học
                         parent_name TEXT,           -- tên phụ huynh
                         parent_contact TEXT         -- liên hệ phụ huynh
);

-- Câu 4: Tạo bảng class_student
CREATE TABLE class_student (
                               id BIGSERIAL PRIMARY KEY,       -- khóa chính
                               class_id INT,                   -- khóa ngoại tới bảng class
                               student_id INT,                 -- khóa ngoại tới bảng student
                               enrollment_date DATE,           -- ngày tham gia lớp
                               status BOOLEAN DEFAULT TRUE,    -- trạng thái
                               grade DECIMAL(4, 2)             -- điểm số
);


/* ==========================================================================================
 * ADD COLUMN
 * ========================================================================================== */

-- Câu 5: Thêm trường "description" (mô tả) vào bảng school,
-- với kiểu dữ liệu văn bản.
ALTER TABLE school ADD COLUMN description TEXT;


-- Câu 6: Thêm trường "special_needs" (nhu cầu đặc biệt) vào bảng student,
-- với kiểu dữ liệu boolean.
ALTER TABLE student ADD COLUMN special_needs BOOLEAN DEFAULT FALSE;


-- Câu 7: Thêm trường "attendance_rate" (tỷ lệ tham dự) vào bảng class_student,
-- với kiểu dữ liệu số thực.
ALTER TABLE class_student ADD COLUMN attendance_rate DECIMAL(5, 2);


/* ==========================================================================================
 * ADD VALUE
 * ========================================================================================== */

-- Câu 8: Thêm 5 trường học vào bảng school với các thông tin đầy đủ về:
-- tên, địa chỉ, năm thành lập, tên hiệu trưởng,
-- số điện thoại, email, website và trạng thái hoạt động.
INSERT INTO school (
    name,
    address,
    founding_year,
    principal_name,
    phone,
    email,
    website
) VALUES
      ('Trường THPT Năng Khiếu ABC', '123 Đường Chính, Quận 1, TP.HCM', 1995, 'Nguyễn Văn An', '02838123456', 'contact@abc.edu.vn', 'www.abc.edu.vn'),
      ('Trường THCS XYZ', '456 Đường Phụ, Quận 3, TP.HCM', 2005, 'Trần Thị Bình', '02838654321', 'info@xyz.edu.vn', 'www.xyz.edu.vn'),
      ('Trường Tiểu học Ánh Sao', '789 Hẻm Nhỏ, Quận 5, TP.HCM', 1980, 'Lê Văn Cường', '02838987654', 'support@anhsao.edu.vn', 'www.anhsao.edu.vn'),
      ('Trường Quốc Tế VinaSun', '101 Đại Lộ, Quận 7, TP.HCM', 2010, 'John Doe', '02838112233', 'admissions@vinasun.edu.vn', 'www.vinasun.edu.vn'),
      ('Trường THPT Chuyên Ngoại Ngữ', '202 Phố Cổ, Quận Hoàn Kiếm, Hà Nội', 1969, 'Phạm Thị Dung', '02439123456', 'info@cnn.edu.vn', 'www.cnn.edu.vn');



-- Câu 9: Thêm 10 lớp học vào bảng class,
-- phân bổ cho các trường học đã tạo, với thông tin đầy đủ về:
-- tên lớp, cấp độ, giáo viên chủ nhiệm, sức chứa, số phòng,
-- năm học và trạng thái hoạt động.
INSERT INTO class (
    school_id,
    name,
    grade_level,
    homeroom_teacher,
    capacity,
    room_number,
    academic_year,
    is_active
) VALUES
      (1, '10A1', 10, 'Cô Mai', 40, 'A101', '2023-2024', TRUE),
      (1, '11B2', 11, 'Thầy Hùng', 45, 'B203', '2023-2024', TRUE),
      (2, '6A', 6, 'Cô Lan', 50, 'C101', '2023-2024', TRUE),
      (2, '7B', 7, 'Thầy Minh', 50, 'C102', '2023-2024', TRUE),
      (3, '1/1', 1, 'Cô Trúc', 30, 'D201', '2023-2024', FALSE),
      (3, '2/3', 2, 'Cô Đào', 35, 'D202', '2023-2024', TRUE),
      (4, 'Grade 10 - G10', 10, 'Mr. Smith', 25, 'S301', '2023-2024', TRUE),
      (4, 'Grade 11 - G11', 11, 'Ms. Jones', 25, 'S302', '2023-2024', TRUE),
      (5, '10 Chuyên Anh', 10, 'Cô Hoa', 35, 'E105', '2023-2024', TRUE),
      (5, '12 Chuyên Pháp', 12, 'Thầy Long', 30, 'E106', '2023-2024', TRUE);




-- Câu 10: Thêm 20 học sinh vào bảng student với thông tin đầy đủ về:
-- họ tên, ngày sinh, giới tính, địa chỉ, số điện thoại,
-- email, ngày nhập học, tên phụ huynh và liên hệ phụ huynh.
-- Câu 10: Thêm 20 học sinh
INSERT INTO student (
    first_name,
    last_name,
    date_of_birth,
    gender,
    address,
    phone,
    email,
    enrollment_date,
    parent_name,
    parent_contact
)VALUES
     ('Minh', 'Nguyễn Văn', '2008-05-10', 'Nam', '1 Đường A', '090111222', 'minh.nv@email.com', '2023-08-01', 'Nguyễn Văn Ba', '090111223'),
     ('An', 'Trần Thị', '2007-09-15', 'Nữ', '2 Đường B', '090222333', 'an.tt@email.com', '2023-08-01', 'Trần Văn Bốn', '090222334'),
     ('Khoa', 'Lê Đăng', '2008-02-20', 'Nam', '3 Đường C', '090333444', 'khoa.ld@email.com', '2023-08-01', 'Lê Thị Năm', '090333445'),
     ('Linh', 'Phạm Thùy', '2007-11-30', 'Nữ', '4 Đường D', '090444555', 'linh.pt@email.com', '2023-08-01', 'Phạm Văn Sáu', '090444556'),
     ('Huy', 'Hoàng Trần', '2015-01-12', 'Nam', '5 Đường E', '090555666', 'huy.ht@email.com', '2022-08-01', 'Hoàng Thị Bảy', '090555667'),
     ('Vy', 'Đỗ Khánh', '2014-03-25', 'Nữ', '6 Đường F', '090666777', 'vy.dk@email.com', '2022-08-01', 'Đỗ Văn Tám', '090666778'),
     ('Tú', 'Bùi Anh', '2008-07-07', 'Nam', '7 Đường G', '090777888', 'tu.ba@email.com', '2023-08-01', 'Bùi Thị Chín', '090777889'),
     ('Nhi', 'Võ Yến', '2007-08-19', 'Nữ', '8 Đường H', '090888999', 'nhi.vy@email.com', '2023-08-01', 'Võ Văn Mười', '090888990'),
     ('Long', 'Đặng Thành', '2015-06-14', 'Nam', '9 Đường I', '090999000', 'long.dt@email.com', '2022-08-01', 'Đặng Thị A', '090999001'),
     ('Trang', 'Ngô Hà', '2014-10-05', 'Nữ', '10 Đường K', '091111222', 'trang.nh@email.com', '2022-08-01', 'Ngô Văn B', '091111223'),
     ('Sơn', 'Lý Hoàng', '2008-12-01', 'Nam', '11 Đường L', '091222333', 'son.lh@email.com', '2023-08-01', 'Lý Thị C', '091222334'),
     ('Thảo', 'Dương Phương', '2007-04-18', 'Nữ', '12 Đường M', '091333444', 'thao.dp@email.com', '2023-08-01', 'Dương Văn D', '091333445'),
     ('Kiên', 'Mai Trung', '2015-02-28', 'Nam', '13 Đường N', '091444555', 'kien.mt@email.com', '2022-08-01', 'Mai Thị E', '091444556'),
     ('My', 'Hồ Huyền', '2014-05-21', 'Nữ', '14 Đường O', '091555666', 'my.hh@email.com', '2022-08-01', 'Hồ Văn F', '091555667'),
     ('Phát', 'Trịnh Tấn', '2008-09-03', 'Nam', '15 Đường P', '091666777', 'phat.tt@email.com', '2023-08-01', 'Trịnh Thị G', '091666778'),
     ('Ngân', 'Đinh Thị', '2007-01-22', 'Nữ', '16 Đường Q', '091777888', 'ngan.dt@email.com', '2023-08-01', 'Đinh Văn H', '091777889'),
     ('Bảo', 'Phan Quốc', '2006-06-06', 'Nam', '17 Đường R', '091888999', 'bao.pq@email.com', '2021-08-01', 'Phan Thị I', '091888990'),
     ('Châu', 'Vương Ngọc', '2006-07-17', 'Nữ', '18 Đường S', '091999000', 'chau.vn@email.com', '2021-08-01', 'Vương Văn K', '091999001'),
     ('Dũng', 'Đoàn Mạnh', '2008-11-11', 'Nam', '19 Đường T', '092111222', 'dung.dm@email.com', '2023-08-01', 'Đoàn Thị L', '092111223'),
     ('Hân', 'Huỳnh Gia', '2007-12-24', 'Nữ', '20 Đường U', '092222333', 'han.hg@email.com', '2023-08-01', 'Huỳnh Văn M', '092222334');



-- Câu 11: Thêm dữ liệu vào bảng class_student
-- để phân bổ học sinh vào các lớp học,
-- đảm bảo mỗi học sinh tham gia ít nhất 2 lớp học khác nhau, với thông tin về:
-- ngày tham gia, trạng thái và điểm số.
INSERT INTO class_student (
    class_id,
    student_id,
    enrollment_date,
    status,
    grade
) VALUES
      (1, 1, '2023-09-05', TRUE, 8.5),
      (2, 1, '2023-09-05', TRUE, 7.8),
-- Học sinh 2
      (1, 2, '2023-09-05', TRUE, 9.0),
      (2, 2, '2023-09-05', TRUE, 8.2),
-- Học sinh 3
      (7, 3, '2023-09-05', TRUE, 7.5),
      (8, 3, '2023-09-05', TRUE, 8.0),
-- Học sinh 4
      (7, 4, '2023-09-05', TRUE, 9.5),
      (8, 4, '2023-09-05', TRUE, 9.1),
-- Học sinh 5
      (5, 5, '2022-09-05', FALSE, 6.5),
      (6, 5, '2022-09-05', TRUE, 7.0),
-- Học sinh 6
      (6, 6, '2022-09-05', TRUE, 8.8),
      (5, 6, '2022-09-05', FALSE, 8.1),
-- Học sinh 7
      (1, 7, '2023-09-05', TRUE, 6.8),
      (9, 7, '2023-09-05', TRUE, 7.2),
-- Học sinh 8
      (2, 8, '2023-09-05', TRUE, 9.2),
      (8, 8, '2023-09-05', TRUE, 8.9),
-- Học sinh 9
      (6, 9, '2022-09-05', TRUE, 7.7),
      (5, 9, '2022-09-05', FALSE, 7.1),
-- Học sinh 10
      (6, 10, '2022-09-05', TRUE, 9.4),
      (3, 10, '2022-09-05', TRUE, 8.5),
-- Học sinh 11
      (9, 11, '2023-09-05', TRUE, 8.1),
      (10, 11, '2023-09-05', TRUE, 8.3),
-- Học sinh 12
      (2, 12, '2023-09-05', TRUE, 7.9),
      (4, 12, '2023-09-05', TRUE, 8.4),
-- Học sinh 13
      (5, 13, '2022-09-05', FALSE, 5.5),
      (6, 13, '2022-09-05', TRUE, 6.0),
-- Học sinh 14
      (3, 14, '2022-09-05', TRUE, 9.8),
      (4, 14, '2022-09-05', TRUE, 9.6),
-- Học sinh 15
      (1, 15, '2023-09-05', TRUE, 7.0),
      (9, 15, '2023-09-05', TRUE, 7.4),
-- Học sinh 16
      (2, 16, '2023-09-05', TRUE, 8.6),
      (8, 16, '2023-09-05', TRUE, 8.7),
-- Học sinh 17
      (10, 17, '2021-09-05', TRUE, 9.1),
      (7, 17, '2021-09-05', TRUE, 9.3),
-- Học sinh 18
      (10, 18, '2021-09-05', TRUE, 9.5),
      (8, 18, '2021-09-05', TRUE, 9.7),
-- Học sinh 19
      (1, 19, '2023-09-05', TRUE, 6.2),
      (3, 19, '2023-09-05', TRUE, 6.7),
-- Học sinh 20
      (2, 20, '2023-09-05', TRUE, 8.0),
      (4, 20, '2023-09-05', TRUE, 7.5),

      (9, 1, '2023-09-05', TRUE, 8.1);


/* ==========================================================================================
 * UPDATE VALUE
 * ========================================================================================== */

-- Câu 12: Cập nhật tên hiệu trưởng của một trường học cụ thể trong bảng school.
UPDATE school
SET principal_name = 'Trịnh Trần Phương Tuấn'
WHERE id = 1;


-- Câu 13: Cập nhật trạng thái hoạt động (is_active)
-- của tất cả các lớp học thuộc một trường học cụ thể.
UPDATE class
SET is_active = true
WHERE school_id = 3;


-- Câu 14: Cập nhật điểm số (grade) của một học sinh cụ thể
-- trong một lớp học cụ thể trong bảng class_student.
UPDATE class_student
SET grade = 8.8
WHERE student_id = 1 AND class_id = 1;


-- Câu 15 : Cập nhật thông tin liên hệ (phone, email)
-- của tất cả học sinh có ngày sinh trước năm 2010.
UPDATE student
SET phone = '0987654321', email = 'updated.email@email.com'
WHERE date_of_birth < '2010-01-01';


/* ==========================================================================================
 * SELECT
 * ========================================================================================== */

-- Câu 16: Lấy danh sách tất cả các trường học,
-- sắp xếp theo năm thành lập từ cũ đến mới.
SELECT *
FROM school
ORDER BY founding_year;


-- Câu 17: Lấy danh sách tất cả các lớp học thuộc một trường học cụ thể,
-- chỉ hiển thị các lớp đang hoạt động (is_active = true).
SELECT *
FROM class
WHERE school_id = 3 and is_active;


-- Câu 18: Lấy danh sách học sinh trong khoảng thời gian từ 2005 đến 2010,
-- sắp xếp theo ngày sinh tăng dần.
SELECT *
FROM student
WHERE date_of_birth BETWEEN '2005-01-01' AND '2010-12-31'
ORDER BY  date_of_birth;


-- Câu 19: Lấy danh sách các lớp học và tên trường học tương ứng,
-- sử dụng INNER JOIN giữa bảng class và school.
SELECT
    c.name as class_name,
    s.name as school_name
FROM class c
         JOIN school s ON c.school_id = s.id;


-- Câu 20: Lấy danh sách tất cả các trường học và số lượng lớp học trong mỗi trường,
-- kể cả trường không có lớp nào, sử dụng LEFT JOIN giữa bảng school và class.
SELECT
    s.name AS school_name,
    count(c.id) as numbers_of_classes
FROM school s
         LEFT JOIN class c ON s.id = c.school_id
GROUP BY s.name;


-- Câu 21: Lấy danh sách tất cả các học sinh và các lớp học mà họ tham gia,
-- sử dụng INNER JOIN giữa bảng student, class_student và class.
SELECT
    st.first_name,
    st.last_name,
    c.name as class_name
FROM student st
         INNER JOIN class_student cs ON cs.student_id = st.id
         INNER JOIN class c ON cs.class_id = c.id;


-- Câu 22: Đếm số lượng học sinh trong mỗi lớp học,
-- chỉ hiển thị các lớp có hơn 5 học sinh,
-- sắp xếp theo số lượng học sinh giảm dần.
SELECT
    c.name as class_name,
    count(cs.student_id) as number_of_students
FROM class c
         JOIN class_student cs ON c.id = cs.class_id
GROUP BY c.name
HAVING count(cs.student_id) > 5
ORDER BY count(cs.student_id) DESC;


-- Câu 23: Tính điểm trung bình của học sinh trong mỗi lớp học,
-- chỉ hiển thị các lớp có điểm trung bình trên 7.5,
-- sắp xếp theo điểm trung bình giảm dần.
SELECT
    c.name as class_name,
    ROUND(AVG(cs.grade), 2) as avg_grade            -- Tính điểm trung bình, sau đó làm tròn
FROM class c
         JOIN class_student cs ON c.id = cs.class_id
GROUP BY c.name
HAVING avg(cs.grade) > 7.5
ORDER BY avg_grade DESC;


-- Câu 24: Đếm số lượng lớp học trong mỗi trường,
-- chỉ hiển thị các trường có ít nhất 3 lớp học,
-- sắp xếp theo số lượng lớp học giảm dần.
SELECT
    s.name as school_name,
    count(c.id) as number_of_classes
FROM school s
         JOIN class c ON s.id = c.school_id
GROUP BY s.name
HAVING count(c.id) >= 3
ORDER BY number_of_classes DESC;


-- Câu 25: Lấy danh sách các trường học,
-- mỗi trường kèm theo danh sách các lớp học dưới dạng mảng JSON,
-- sử dụng JSON_AGG.
SELECT
    s.name,
    COALESCE(json_agg(c.name) FILTER (WHERE c.name IS NOT NULL)) -- chỉ json_agg các lớp có tên.
FROM school s
         LEFT JOIN class c ON s.id = c.school_id
GROUP BY s.name;


-- Câu 26: Lấy danh sách các lớp học,
-- mỗi lớp kèm theo danh sách học sinh trong lớp dưới dạng mảng JSON,
-- sử dụng JSON_AGG.
SELECT
    c.name,
    json_agg(
            json_build_object(
                    'id', st.id,
                    'full_name', st.last_name || ' ' || st.first_name -- Toán tử nối chuỗi
            )
    ) as students
FROM class c
         JOIN class_student cs ON c.id = cs.class_id
         JOIN student st ON cs.student_id = st.id
GROUP BY c.name;


-- Câu 27: Lấy danh sách các trường học,
-- mỗi trường kèm theo danh sách các lớp học,
-- và mỗi lớp học kèm theo danh sách học sinh trong lớp,
-- tất cả dưới dạng cấu trúc JSON lồng nhau, sử dụng JSON_AGG.
SELECT
    s.name,
    json_agg(
            json_build_object(
                    'class_name', c.name,
                    'full_name', (
                        SELECT json_agg(st.last_name || ' ' || st.first_name)
                        FROM student st
                                 JOIN class_student cs ON st.id = cs.student_id
                        WHERE c.id = cs.class_id
                    )
            )
    )
FROM school s
         JOIN class c ON s.id = c.school_id
GROUP BY s.name;



-- Câu 28: Lấy danh sách học sinh tham gia ít nhất 3 lớp học khác nhau,
-- hiển thị tên học sinh và số lượng lớp học tham gia,
-- sắp xếp theo số lượng lớp học giảm dần.
SELECT
    st.last_name || ' ' || st.first_name AS full_name,
    count(cs.class_id) AS number_of_classes
FROM student st
         JOIN class_student cs ON st.id = cs.student_id
GROUP BY st.last_name, st.first_name
HAVING count(cs.class_id) >= 3
ORDER BY number_of_classes DESC;


-- Câu 30: Lấy danh sách 5 học sinh có điểm trung bình cao nhất trong toàn bộ hệ thống,
-- hiển thị tên học sinh, số lượng lớp học tham gia và điểm trung bình,
-- sử dụng GROUP BY, ORDER BY và LIMIT.
SELECT
    st.last_name || ' ' || st.first_name AS full_name,
    COUNT(cs.class_id) AS classes_attended,
    AVG(cs.grade) AS average_grade
FROM student st
         JOIN class_student cs ON st.id = cs.student_id
GROUP BY st.id
ORDER BY average_grade DESC
    LIMIT 5;


-- Câu 29: Lấy danh sách các lớp học có điểm trung bình cao nhất trong mỗi trường học,
-- hiển thị tên trường, tên lớp và điểm trung bình.
WITH ClassAverages AS (
    SELECT
        c.school_id,
        c.name AS class_name,
        round(AVG(cs.grade), 2) AS avg_grade
    FROM class c
             JOIN class_student cs ON c.id = cs.class_id
    GROUP BY c.id, c.school_id, c.name
),
     MaxAvgPerSchool AS (
         SELECT
             school_id,
             MAX(avg_grade) AS max_avg_grade
         FROM ClassAverages
         GROUP BY school_id
     )
SELECT
    s.name AS school_name,
    ca.class_name,
    ca.avg_grade
FROM ClassAverages ca
         JOIN MaxAvgPerSchool mas ON ca.school_id = mas.school_id AND ca.avg_grade = mas.max_avg_grade
         JOIN school s ON ca.school_id = s.id
ORDER BY s.name;





CREATE TABLE employee (
                          id BIGSERIAL PRIMARY KEY ,
                          name text,
                          salary int,
                          age int8,

    /* 7 default field */
                          created_at timestamptz DEFAULT now(),   -- Tạo vào thời điểm nào?
                          created_by BIGINT,                      -- Tạo bởi ai?
                          modified_at timestamptz ,               -- Chỉnh sửa vào thời điểm nào?
                          modified_by BIGINT,                     -- Chỉnh sửa bởi ai?
                          delete_at timestamptz ,                 -- Xoá sửa vào thời điểm nào?
                          delete_by BIGINT,                       -- Xoá sửa bởi ai?
                          active BOOLEAN DEFAULT TRUE             -- Trạng thái đã xoá hay chưa?

);

/* Lọc ra luơng */
select * from employee
WHERE active
ORDER BY salary;            -- Thấp -> Cao
-- ORDER BY salary desc     -- Cao -> thấp


/* Lọc ra tuổi */
select * from employee
WHERE active
ORDER BY age asc, salary DESC ;     -- Thấp -> Cao,  tuổi bằng nhau -> lương: cao -> thấp
-- ORDER BY age desc                -- Cao -> thấp


/* Tính tổng lương, nhóm theo Tuổi */
select
    name,
    age,
    sum(salary)
from employee
WHERE active
GROUP BY age, name;
-- --> Những field thông thường đuợc select -> cũng phải có trong Group By



/*
Và hiển thị trong nhóm có những thành phần nào.
VD: nhóm tuổi 20 có tên Việt, Mai Anh
   */
select
    age,
    array_agg(name),              -- Chi tiết field: name
    sum(salary) as total_salary,  -- Đặt bí danh
    array_agg(salary)             -- Chi tiết field: salary
from employee
WHERE active
GROUP BY age;



select
    age,
    sum(salary) as total_salary,
    json_agg(
            jsonb_build_object(
                    'name', employee.name,
                    'salary', employee.salary
            )
    ) as detail
from employee
WHERE active
GROUP BY age;


-- Lọc Detail, Loại bỏ null
select
    age,
    sum(salary) as total_salary,
    coalesce(
            json_agg(
                    jsonb_build_object(
                            'name', employee.name,
                            'salary', employee.salary
                    )
            ) FILTER ( WHERE employee.salary > 5000 )
    ) as high_salary_members
from employee
WHERE active
GROUP BY age
HAVING json_array_length(
               coalesce(
                       json_agg(
                               jsonb_build_object(
                                       'name', employee.name,
                                       'salary', employee.salary
                               )
                       ) FILTER ( WHERE employee.salary > 5000 )
               )
       ) > 0
-- LIMIT 1 -- Cach khac



-----------------------------------------------------------------------------------------


CREATE TABLE student (
                         id BIGSERIAL PRIMARY KEY ,
                         name TEXT,

    /* 7 default field */
                         created_at timestamptz DEFAULT now(),   -- Tạo vào thời điểm nào?
                         created_by BIGINT,                      -- Tạo bởi ai?
                         modified_at timestamptz ,               -- Chỉnh sửa vào thời điểm nào?
                         modified_by BIGINT,                     -- Chỉnh sửa bởi ai?
                         delete_at timestamptz ,                 -- Xoá sửa vào thời điểm nào?
                         delete_by BIGINT,                       -- Xoá sửa bởi ai?
                         active BOOLEAN DEFAULT TRUE            -- Trạng thái đã xoá hay chưa?

    /* Đặt tên cho khoá chính */
    -- CONSTRAINT pk_student PRIMARY KEY (id)
);
/* Bổ sung khoá chính */
-- alter table student add CONSTRAINT student_pk PRIMARY KEY (id)



CREATE TABLE class (
                       id BIGSERIAL PRIMARY KEY ,
                       name TEXT,

    /* 7 default field */
                       created_at timestamptz DEFAULT now(),   -- Tạo vào thời điểm nào?
                       created_by BIGINT,                      -- Tạo bởi ai?
                       modified_at timestamptz ,               -- Chỉnh sửa vào thời điểm nào?
                       modified_by BIGINT,                     -- Chỉnh sửa bởi ai?
                       delete_at timestamptz ,                 -- Xoá sửa vào thời điểm nào?
                       delete_by BIGINT,                       -- Xoá sửa bởi ai?
                       active BOOLEAN DEFAULT TRUE             -- Trạng thái đã xoá hay chưa?

);

alter table class add COLUMN school_id BIGINT DEFAULT 1;



CREATE TABLE class_student (
                               id BIGSERIAL PRIMARY KEY ,
                               class_id BIGINT,
                               student_id BIGINT,

    /* 7 default field */
                               created_at timestamptz DEFAULT now(),   -- Tạo vào thời điểm nào?
                               created_by BIGINT,                      -- Tạo bởi ai?
                               modified_at timestamptz ,               -- Chỉnh sửa vào thời điểm nào?
                               modified_by BIGINT,                     -- Chỉnh sửa bởi ai?
                               delete_at timestamptz ,                 -- Xoá sửa vào thời điểm nào?
                               delete_by BIGINT,                       -- Xoá sửa bởi ai?
                               active BOOLEAN DEFAULT TRUE             -- Trạng thái đã xoá hay chưa?

);


CREATE TABLE school (
                        id BIGSERIAL PRIMARY KEY ,
                        name text,

    /* 7 default field */
                        created_at timestamptz DEFAULT now(),   -- Tạo vào thời điểm nào?
                        created_by BIGINT,                      -- Tạo bởi ai?
                        modified_at timestamptz ,               -- Chỉnh sửa vào thời điểm nào?
                        modified_by BIGINT,                     -- Chỉnh sửa bởi ai?
                        delete_at timestamptz ,                 -- Xoá sửa vào thời điểm nào?
                        delete_by BIGINT,                       -- Xoá sửa bởi ai?
                        active BOOLEAN DEFAULT TRUE             -- Trạng thái đã xoá hay chưa?

);


/* Lấy ra lớp và danh sách học sinh trong lớp đấy */
SELECT
    class.id,
    class.name,
    cs.student_id
FROM class
         left JOIN class_student cs ON class.id = cs.class_id and cs.active
WHERE class.active; --  AND cs.active;



/* Lấy ra lớp có học sinh */
SELECT
    class.id,
    class.name
FROM class
         JOIN class_student cs ON class.id = cs.class_id and cs.active
WHERE class.active --  AND cs.active;
GROUP BY class.id;

/* Cách khác là dùng distinct */
SELECT
    DISTINCT class.id,
             class.name
FROM class
         JOIN class_student cs ON class.id = cs.class_id and cs.active
WHERE class.active; --  AND cs.active;


/* Lấy ra học sinh có trong các lớp đó */
SELECT
    class.id,
    class.name,
    school.name as school_name,
    json_agg(
            json_build_object(
                    'id', s.id,
                    'name', s.name
            )
    )
FROM class
         JOIN class_student cs ON class.id = cs.class_id and cs.active
         JOIN student s ON s.id = cs.student_id
         join school on school.id = class.school_id
WHERE class.active --  AND cs.active;
GROUP BY class.id, class.name, school.name;



/* Trong truờng có nhiều lớp, trong lớp có nhiều học sinh */
select
    school.id,
    school.name,
    json_agg(
            json_build_object(
                    'id', class.id,
                    'name', class.name
            )

    )
from school
         join class on class.school_id = school.id
         JOIN class_student cs ON class.id = cs.class_id and cs.active
         JOIN student s ON s.id = cs.student_id
GROUP BY school.id, school.name











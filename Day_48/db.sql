-- Tạo bảng Book
create table if not exists Book (
                                    book_id integer,
                                    title varchar(200),
    author varchar(100),
    publish_year integer,
    publisher varchar(100),
    category varchar(50),
    page_count integer,
    price decimal(10, 2),
    stock integer,
    import_date date
    );


-- Thêm cột
alter table Book
    add column status VARCHAR(20),
    add column language VARCHAR(30),
    add column shelf_position VARCHAR(20);
alter table Book
    add constraint check_book_status
        check (status in ('Available', 'Borrowed', 'Removed'));


-- Thêm value cho cột
insert into Book(book_id, title, author, publish_year, publisher, category, page_count, price, stock, import_date, status, language, shelf_position) values
                                                                                                                                                         (1, 'The Adventures of Cricket', 'To Hoai', 2010, 'Kim Dong', 'Literature', 150, 75000.00, 10, '2020-01-15', 'Available', 'Vietnamese', 'A1'),
                                                                                                                                                         (2, 'The Alchemist', 'Paulo Coelho', 2013, 'NXB Tre', 'Novel', 228, 85000.00, 7, '2020-02-20', 'Available', 'Vietnamese', 'A2'),
                                                                                                                                                         (3, 'How to Win Friends', 'Dale Carnegie', 2016, 'NXB Tong Hop', 'Psychology', 320, 120000.00, 5, '2020-03-10', 'Borrowed', 'Vietnamese', 'B1'),
                                                                                                                                                         (4, 'Mắt biếc', 'Nguyen Nhat Anh', 2019, 'NXB Trẻ', 'Tiểu thuyết', 195, 88000.00, 12, '2020-12-10', 'Available', 'Vietnamese', 'A4'),
                                                                                                                                                         (5, 'Vật Lý Đại Cương', 'David Halliday', 2014, 'NXB Giao Duc', 'Textbook', 850, 320000.00, 3, '2021-01-20', 'Available', 'Vietnamese', 'F1'),
                                                                                                                                                         (6, 'Le Petit Prince', 'Antoine de Saint-Exupéry', 1998, 'Gallimard', 'Tiểu thuyết', 120, 150000.00, 0, '2021-02-15', 'Removed', 'France', 'B3'),
                                                                                                                                                         (7, 'Blockchain cơ bản', 'Satoshi Nakamoto', 2021, 'NXB Công nghệ', 'Technology', 320, 220000.00, 5, '2021-03-10', 'Available', 'English', 'D3'),
                                                                                                                                                         (8, 'Sapiens: Lược Sử Loài Người', 'Yuval Noah Harari', 2015, 'Omega Plus', 'History', 512, 250000.00, 8, '2021-05-22', 'Available', 'Vietnamese', 'C2'),
                                                                                                                                                         (9, 'The Great Gatsby', 'F. Scott Fitzgerald', 1925, 'Scribner', 'Classic', 180, 110000.00, 4, '2021-06-18', 'Borrowed', 'English', 'A3'),
                                                                                                                                                         (10, '1984', 'George Orwell', 1949, 'Secker & Warburg', 'Dystopian', 328, 135000.00, 6, '2021-07-30', 'Available', 'English', 'D1'),
                                                                                                                                                         (11, 'Rừng Na Uy', 'Haruki Murakami', 1987, 'Nha Nam', 'Novel', 480, 145000.00, 9, '2022-01-11', 'Available', 'Japanese', 'B2'),
                                                                                                                                                         (12, 'Lược Sử Thời Gian', 'Stephen Hawking', 1988, 'NXB Tre', 'Science', 256, 140000.00, 2, '2022-03-05', 'Borrowed', 'Vietnamese', 'F2'),
                                                                                                                                                         (13, 'Bố Già', 'Mario Puzo', 1969, 'G. P. Putnams Sons', 'Crime', 448, 175000.00, 3, '2022-04-19', 'Available', 'English', 'A5'),
                                                                                                                                                         (14, 'Tội Ác và Hình Phạt', 'Fyodor Dostoevsky', 1866, 'NXB Van Hoc', 'Classic', 671, 190000.00, 1, '2022-08-01', 'Available', 'Vietnamese', 'C4'),
                                                                                                                                                         (15, 'Đi Tìm Lẽ Sống', 'Viktor Frankl', 2020, 'First News', 'Psychology', 154, 95000.00, 11, '2022-09-10', 'Available', 'Vietnamese', 'B4');



-- Hiển thị tất cả thông tin các cuốn sách trong thư viện
select * from Book;

-- Hiển thị book_id, title, author của tất cả sách
select book_id, title, author from Book;

-- Hiển thị thông tin các sách xuất bản năm 2020
select * from Book where publish_year = 2020;

-- Hiển thị thông tin các sách có price > 200,000
select * from Book where price > 200000;

-- Hiển thị thông tin các sách có stock > 5
select * from Book where stock > 5;

-- Hiển thị thông tin các sách thuộc category = 'Novel'
select * from Book where category = 'Novel';

-- Hiển thị thông tin các sách có status = 'Borrowed'
select * from Book where status = 'Borrowed';

-- Hiển thị thông tin các sách có language = 'English'
select * from Book where language = 'English';

-- Hiển thị thông tin các sách xuất bản trước năm 2000
select * from Book where publish_year < 2000;

-- Hiển thị thông tin các sách có page_count > 300
select * from Book where page_count > 300;

-- Hiển thị thông tin các sách thuộc category = 'Science' và price < 150,000
select * from Book where category = 'Science' and price < 150000;

-- Hiển thị thông tin các sách xuất bản từ 2015 đến 2022
select * from Book where publish_year between 2015 and 2022;

-- Hiển thị thông tin các sách có status = 'Available' và stock < 3
select * from Book where status = 'Available' and stock < 3;

-- Hiển thị thông tin các sách của author = 'Nguyen Nhat Anh' hoặc 'To Hoai'
select * from Book where author = 'Nguyen Nhat Anh' or author = 'To Hoai';

-- Hiển thị thông tin các sách của publisher = 'Kim Dong' hoặc 'NXB Tre'
select * from Book where publisher = 'Kim Dong' or publisher = 'NXB Tre';

-- Hiển thị thông tin các sách có language = 'Vietnamese' và page_count < 200
select * from Book where language = 'Vietnamese' and page_count < 200;

-- Hiển thị thông tin các sách có category = 'Technology' hoặc 'Science' và xuất bản sau năm 2010
select * from Book where (category = 'Technology' or category = 'Science') and publish_year > 2010;

-- Hiển thị thông tin các sách có shelf_position = 'A1', 'A2' hoặc 'A3'
select * from Book where shelf_position in ('A1', 'A2', 'A3');

-- Hiển thị thông tin các sách có price từ 100,000 đến 300,000 và status = 'Available'
select * from Book where price between 100000 and 300000 and status = 'Available';

-- Hiển thị thông tin các sách của author = 'Paulo Coelho' hoặc 'Dale Carnegie' và stock > 0
select * from Book where (author = 'Paulo Coelho' or author = 'Dale Carnegie') and stock > 0;



-- Cập nhật status thành 'Borrowed' cho sách có book_id = 5
update Book set status = 'Borrowed' where book_id = 5;

-- Cập nhật stock thành 0 cho các sách có status = 'Removed'
update Book set stock = 0 where status = 'Removed';

-- Cập nhật price tăng thêm 10,000 cho tất cả sách thuộc category = 'Novel'
update Book set price = price + 10000 where category = 'Novel';

-- Cập nhật shelf_position thành 'B5' cho các sách của author = 'Nguyen Nhat Anh'
update Book set shelf_position = 'B5' where author = 'Nguyen Nhat Anh';

-- Cập nhật status thành 'Available' cho các sách có status = 'Borrowed' và stock > 5
update Book set status = 'Available' where status = 'Borrowed' and stock > 5;

-- Cập nhật language thành 'Vietnamese' cho các sách của publisher = 'Kim Dong' có language là NULL
update Book set language = 'Vietnamese' where publisher = 'Kim Dong' and language is null;

-- Cập nhật stock giảm đi 1 cho sách có book_id = 8
update Book set stock = stock - 1 where book_id = 8;

-- Cập nhật category thành 'Literature' cho các sách có category = 'Novel' và xuất bản trước năm 2000
update Book set category = 'Literature' where category = 'Novel' and publish_year < 2000;

-- Cập nhật publisher thành 'NXB Giao Duc' cho các sách của publisher = 'NXB Dai hoc Quoc gia' và thuộc category = 'Textbook'
update Book set publisher = 'NXB Giao Duc' where publisher = 'NXB Dai hoc Quoc gia';

-- Cập nhật page_count thành 0 cho các sách có status = 'Removed' và stock = 0
update Book set page_count = 0 where status = 'Removed' and stock = 0;
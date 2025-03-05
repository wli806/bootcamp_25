create database student_management_stm;

CREATE TABLE student_db (
    student_id SERIAL PRIMARY KEY,
    student_name VARCHAR(50) not null,
    student_gender VARCHAR(7) not null,
    email VARCHAR(100) unique,
    phone CHAR(11),
    birth_date DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
![create student info database](image-1.png)

CREATE TABLE grade_db (
    course_id int not null,
    student_id int primary key,
    grades int,
    grade_level varchar(3) not null,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
![create grade info database](image-2.png)

CREATE table course_db (
	course_id int primary key,
	course_name varchar(30) not null,
	instructor varchar(50) not null,
	course_credit int not null,
	course_description varchar(150),
	is_active bool default true,
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
![create course info database](image-3.png)

insert into student_db 
(student_name, student_gender)
values 
('liubei', 'male');

insert into student_db 
(student_name, student_gender)
values 
('sunquan', 'male');

insert into student_db 
(student_name, student_gender)
values 
('caocao', 'male');
![insert student information](image-4.png)

insert into grade_db 
(course_id, student_id, grade_level)
values
(101, '1', 'A-');

insert into grade_db 
(course_id, student_id, grade_level)
values
(101, '2', 'A');

insert into grade_db 
(course_id, student_id, grade_level)
values
(111, '2', 'A+');

insert into grade_db 
(course_id, student_id, grade_level)
values
(111, '3', 'A+');
![insert grades information](image-5.png)

insert into course_db 
(course_id, course_name, instructor, course_credit)
values
(101, 'COMPSCI 101', 'Ann', '15');

insert into course_db 
(course_id, course_name, instructor, course_credit)
values
(111, 'COMPSCI 111', 'Alex', '15');
![insert courses information](image-6.png)

select * from student_db
where student_name like '%c%';
![query result](image-7.png)

select * from course_db;
![query result](image-8.png)

UPDATE student_db SET phone = '211049767' WHERE student_name = 'caocao';
![update](image-9.png)

delete from student_db where student_name = 'sunquan';
![delate](image-10.png)

select * from student_db;
![final table](image-11.png)
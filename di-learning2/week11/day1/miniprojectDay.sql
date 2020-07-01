-- 1.Write a query to display the names (first_name, last_name) 
-- using an alias name “First Name”, 
-- “Last Name” from employee table.
SELECT first_name ||' '|| last_name AS fullname 
FROM employees

-- 2.Write a query to get a unique department ID from employee table.

SELECT DISTINCT department_id 
FROM employees


-- 3. Write a query to get the details of all employees from the employee table in descending order by their first name.

SELECT * 
FROM employees
ORDER BY
first_name DESC

--  4.Write a query to get the names (first_name, last_name), salary and 15% of salary as PF for all the employees.

SELECT first_name, last_name, salary,  salary*.15  AS PF 
FROM employees


--5. Write a query to get the employee ID, names (first_name, last_name) and salary in ascending order according to their salary.

SELECT employee_id, first_name || ' '|| last_name AS name, salary
FROM employees
ORDER BY 
salary ASC

-- 6. Write a query to get the total salaries payable to employees.

SELECT 
SUM(salary) AS total

FROM employees

-- 7.Write a query to get the maximum and minimum salary paid to the employees.

SELECT 
MAX(salary) AS max_salary, 
MIN(salary) AS min_salary

FROM employees


--8. Write a query to get the average salary and number of employees are working.

SELECT 
to_char (
		AVG(salary),
		'99999999999999999D99'
) AS average_salary,
COUNT(employee_id) 
AS number_employees


FROM employees

-- 9. Write a query to get the number of employees working with the company.

SELECT  
COUNT (employee_id)

FROM employees



-- 10. Write a query to get the unique number of designations available in the employees table.

SELECT COUNT(DISTINCT department_id) 
    FROM employees;

-- Write a query to get all the first name from the employees table in upper case.

SELECT UPPER(first_name)
FROM employees

-- Write a query to get the first three characters of the first name for all the employees in the employees table.

SELECT SUBSTRING(first_name,1,3)
FROM employees

-- Write a query to calculate the expression 171*214+625.
SELECT 171*214+625.
RESULT


-- Write a query to get the name, including first name and last name of all the employees from employees table.

SELECT first_name || ' ' || last_name AS name
FROM employees



-- Write a query to get the first names after removing all the leading and trailing blanks of all the employees from employees table.

SELECT TRIM(first_name)
FROM employees

-- Write a query to get the first name, last name and the length of the name, including first_name and last_name of all the employees from employees table.

SELECT first_name || ' ' || last_name AS name,
		LENGTH(first_name || '' ||last_name)len
FROM employees
ORDER BY
len

-- Write a query to check whether the first_name column of the employees table containing any number.

SELECT *
FROM employees
WHERE first_name REGEXP '[0-9]';  ??

-- Write a query to select first ten records from a table.

SELECT *
FROM employees
LIMIT 10;


-- Write a query to get a monthly salary (rounded up to 2 decimal places) of each employee.

-- Note : Assume the salary field provides the ‘annual salary’ information.
SELECT first_name, last_name, ROUND(salary/12,2) AS monthly_salary
FROM employees


-- CREATE TABLE 
-- 1. Write a SQL statement to create a simple table countries including columns country_id,country_name and region_id.

CREATE TABLE country (
	country_id varchar(2),
	country_name varchar(40),
	region_id decimal(10,0));

-- 2. Write a SQL statement to create a simple table countries including columns country_id,country_name and region_id which already exist.

-- 3. Write a SQL statement to create the structure of a table dup_countries similar to countries
CREATE TABLE dup_countries AS (SELECT *
							   FROM country)

-- 4.Write a SQL statement to create a duplicate copy of countries table including structure and data by name dup_countries.
CREATE TABLE dup_countries
AS SELECT *
FROM country

-- 5. Write a SQL statement to create a table countries set a constraint NULL.

CREATE TABLE countries (
	country_id varchar(2) NOT NULL,
	country_name varchar(40) NOT NULL,
	region_id decimal (10,0) NOT NULL
)

-- 6.Write a SQL statement to create a table named jobs including columns job_id, job_title, min_salary, max_salary and check whether the max_salary amount exceeding the upper limit 25000.

CREATE TABLE job (
	job_id varchar(2) NOT NULL,
	job_title varchar(40) NOT NULL,
	min_salary decimal (6,0),
	max_salary decimal (6,0)
	CHECK(max_salary <= 25000)
)
-- 7.Write a SQL statement to create a table named countries including columns country_id, country_name and region_id and make sure that no countries except Italy, India and China will be entered in the table.

CREATE TABLE countries1 (
	country_id varchar(2) NOT NULL,
	country_name varchar(40) NOT NULL
	CHECK(country_name IN ('Italy', 'India', 'China')),
	region_id decimal (10,0) NOT NULL
)

-- 8. Write a SQL statement to create a table named countries including columns country_id,country_name and region_id and make sure that no duplicate data against column country_id will be allowed at the time of insertion.
CREATE TABLE countries2 (
	country_id varchar(2) NOT NULL,
	country_name varchar(40) NOT NULL,
	region_id decimal (10,0) NOT NULL,
	UNIQUE(country_id)
)

-- 9.Write a SQL statement to create a table named jobs including columns job_id, job_title, min_salary and max_salary, and make sure that, the default value for job_title is blank and min_salary is 8000 and max_salary is NULL will be entered automatically at the time of insertion if no value assigned for the specified columns.
	
CREATE TABLE  if  NOT EXISTS job (
	job_id varchar(2) NOT NULL,
	job_title varchar(40)  NULL DEFAULT ' ',
	min_salary decimal (6,0) DEFAULT 8000,
	max_salary decimal (6,0) DEFAULT NULL
	
)

-- 10. Write a SQL statement to create a table named countries including columns country_id, country_name and region_id and make sure that the country_id column will be a key field which will not contain any duplicate data at the time of insertion.
	
CREATE TABLE if NOT EXISTS countries2 (
	country_id varchar(2) NOT NULL PRIMARY KEY,
	country_name varchar(40) NOT NULL,
	region_id decimal (10,0) NOT NULL,
	UNIQUE(country_id)
)

-- 11.Write a SQL statement to create a table countries 
-- including columns country_id, country_name and region_id 
-- and make sure that the column country_id will be unique 
-- and store an auto-incremented value.
CREATE TABLE if NOT EXISTS countries2 (
	country_id serial UNIQUE PRIMARY KEY,
	country_name varchar(40) NOT NULL,
	region_id decimal (10,0) NOT NULL
	
)

-- 12. Write a SQL statement to create a table countries including columns country_id, country_name and region_id and make sure that the combination of columns country_id and region_id will be unique.
CREATE TABLE if NOT EXISTS countries2 (
	country_id varchar(2) NOT NULL UNIQUE DEFAULT '',
	country_name varchar(40) NOT NULL,
	region_id decimal (10,0) NOT NULL,
	PRIMARY KEY(country_id, region_id)
)

-- 13. Write a SQL statement to create a table job_history including columns employee_id, start_date, end_date, job_id and department_id and make sure that, the employee_id column does not contain any duplicate value at the time of insertion and the foreign key column job_id contain only those values which exist in the jobs table.
CREATE TABLE if NOT EXISTS job_history (
	employee_id decimal(6,0) NOT NULL PRIMARY KEY,
	start_date date NOT NULL,
	end_date date NOT NULL,
	job_id varchar(10) NOT NULL,
	department_id decimal(4,0) DEFAULT NULL,
	FOREIGN KEY (job_id) REFERENCES jobs(job_id),
	UNIQUE(employee_id)
)

--14. Write a SQL statement to create a table employees including 
-- columns employee_id, first_name, last_name, email, phone_number
--  hire_date, job_id, salary, commission, manager_id and
--   department_id and make sure that, the employee_id column does not contain any duplicate value at the time of insertion and the foreign key columns combined by department_id and manager_id columns contain only those unique combination values,
--  which combinations exist in the departments table.
CREATE TABLE if NOT EXISTS  employees (
	employee_id decimal(6,0) NOT NULL PRIMARY KEY,
	first_name varchar(20) Not NULL,
	last_name varchar(30) NOT NULL,
	email varchar(40) unique NOT NULL,
    phone_number varchar (20) NOT NULL,
    hire_date date NOT NULL,
    job_id varchar(10) NOT NULL,
    salary decimal(7,2) NOT NULL,
    commission decimal(2,2) NOT NULL,
    manager_id decimal(6,0) NOT NULL,
    department_id decimal(4,0) DEFAULT NULL,
	FOREIGN KEY (departament_id, manager_id) REFERENCES dapartments(departament_id, manager_id)
	
)
-- 15 Write a SQL statement to create a table employees including 
-- columns employee_id, first_name, last_name, email, phone_number hire_date,
--  job_id, salary, commission, manager_id and department_id and
--   make sure that, the employee_id column does not contain any 
--   duplicate value at the time of insertion, and the foreign key 
--   column department_id, reference by the column department_id of departments table, can contain only those values which are exist in the departments table and another foreign key column job_id, referenced by the column job_id of jobs table,
--  can contain only those values which exist in the jobs table.

CREATE TABLE if NOT EXISTS  employees (
	employee_id decimal(6,0) NOT NULL PRIMARY KEY,
	first_name varchar(20) Not NULL,
	last_name varchar(30) NOT NULL,
	email varchar(40) unique NOT NULL,
    phone_number varchar (20) NOT NULL,
    hire_date date NOT NULL,
    job_id varchar(10) NOT NULL,
    salary decimal(7,2) DEFAULT NULL,
    commission decimal(2,2) DEFAULT NULL,
    manager_id decimal(6,0) NOT NULL,
    department_id decimal(4,0) DEFAULT NULL,
	FOREIGN KEY (departament_id) REFERENCES dapartments(departament_id),
    FOREIGN KEY (job_id) REFERENCES jobs(job_id)
	
)

-- 16Write a SQL statement to create a table employees including columns employee_id, first_name, last_name, job_id, salary and make sure that, the employee_id column does not contain any duplicate value at the time of insertion, and the foreign key column job_id, referenced by the column job_id of jobs table, can contain only those values which exist in the jobs table. The specialty of the statement is that the ON UPDATE CASCADE action allows you to perform the cross-table update and ON DELETE RESTRICT action rejects the deletion. 
-- The default action is ON DELETE RESTRICT.
-- PART 1
CREATE TABLE if NOT EXISTS  employees (
	employee_id decimal(6,0) NOT NULL PRIMARY KEY,
	first_name varchar(20) Not NULL,
	last_name varchar(30) NOT NULL,
    job_id varchar(10) NOT NULL,
    salary decimal(7,2) DEFAULT NULL,
    FOREIGN KEY (job_id) REFERENCES jobs(job_id) ON DELETE RESTRICT
	
)

-- Part 2
CREATE TABLE if NOT EXISTS  employees (
	employee_id decimal(6,0) NOT NULL PRIMARY KEY,
	first_name varchar(20) Not NULL,
	last_name varchar(30) NOT NULL,
    job_id varchar(10) NOT NULL,
    salary decimal(7,2) DEFAULT NULL,
    CONSTRAINT fk_emp_job_id
    FOREIGN KEY (job_id) REFERENCES jobs(job_id) ON DELETE CASCADE
	
)

-- Part 3
CREATE TABLE if NOT EXISTS  employees (
	employee_id decimal(6,0) NOT NULL PRIMARY KEY,
	first_name varchar(20) Not NULL,
	last_name varchar(30) NOT NULL,
    job_id varchar(10) NOT NULL,
    salary decimal(7,2) DEFAULT NULL,
    CONSTRAINT fk_emp_job_id
    FOREIGN KEY (job_id) REFERENCES jobs(job_id) ON UPDATE SET NULL
	
)

-- PART 4
CREATE TABLE if NOT EXISTS  employees (
	employee_id decimal(6,0) NOT NULL PRIMARY KEY,
	first_name varchar(20) Not NULL,
	last_name varchar(30) NOT NULL,
    job_id varchar(10) NOT NULL,
    salary decimal(7,2) DEFAULT NULL,
    
    FOREIGN KEY (job_id) REFERENCES jobs(job_id) ON UPDATE NO ACTION ON DELETE NO ACTION
	
)
-- Restricting and sorting
-- Write a query to display the name, including first_name and last_name and salary for all employees whose salary is out of the range between $10,000 and $15,000.
SELECT first_name, last_name, salary
FROM employees
WHERE SALARY BETWEEN 10000AND 15000

-- 2.Write a query to display the name, including first_name and last_name, and department ID who works in the department 30 or 100 and arrange the result in ascending order according to the department ID.
SELECT first_name || ' ' || last_name AS name, department_id
FROM employees
 WHERE department_id  IN(30, 100)
 ORDER BY department_id ASC

--  3.Write a query to display the name, including first_name and last_name, and salary who works in the department either 30 or 100 and salary is out of the range between $10,000 and $15,000.
SELECT first_name || ' ' || last_name AS name, department_id, salary
FROM employees
WHERE salary NOT BETWEEN 10000 AND 15000
AND department_id  IN(30, 100)

-- 4.
-- Write a query to display the name, including first_name and last_name and hire date for all employees who were hired in 1987.
SELECT first_name || ' ' || last_name AS name,
hire_date
FROM employees
WHERE hire_date LIKE '1987%';
-- 5. Write a query to get the first name of the employee who holds the letter ‘c’ and ‘e’ in the first name.
SELECT first_name 

FROM employees
WHERE first_name LIKE '%b%'
AND first_name LIKE '%c%';


-- 6.Write a query to display the last name, job, and salary for all those employees who hasn’t worked as a Programmer or a Shipping Clerk, and not drawing the salary $4,500, $10,000, or $15,000.
SELECT last_name, job_id, salary

FROM employees
WHERE salary NOT IN(4500, 10000,15000)
AND job_id in ('IT_PROG', 'SH_CLERK')

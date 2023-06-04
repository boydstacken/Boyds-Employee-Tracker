INSERT INTO departments (id, name, title, salary, department_id, first_name,last_name,role_id,manager_id)
VALUES (001, "Marketing"),
       (002, "Finance"),
       (003, "Sales"),
       (004, "Engineering");

INSERT INTO roles (id, title, salary, department_id)
VALUES (001, "Marketing Director", 150000.00, 001),
       (002, "Finance Director", 165000.00, 002),
       (003, "Sales Director", 145000.00, 003),
       (004, "Engineering Director", 160000.00, 004);
       
INSERT into employee (id, first_name, last_name, role_id, manager_id)
VALUES (001, "John", "Johnson", 1111, 1001),
       (002, "Dena", "Wilson", 2222, 2002),
       (003, "Carley", "Moore", 3333, 3003),
       (004, "David", "Peterson", 4444, 4004);



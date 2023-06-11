
INSERT INTO departments (id, name)
VALUES (001, "Marketing"),
       (002, "Finance"),
       (003, "Sales"),
       (004, "Engineering");

INSERT INTO roles (id, title, salary, departments_id)
VALUES (001, "Marketing Director", 150000.00, 001),
       (002, "Finance Director", 165000.00, 002),
       (003, "Sales Director", 145000.00, 003),
       (004, "Engineering Director", 160000.00, 004);
       
INSERT into employees (id, first_name, last_name, roles_id, manager_id)
VALUES (001, "John", "Johnson", 001, NULL),
       (002, "Dena", "Wilson", 002, 001),
       (003, "Carley", "Moore", 003, 002),
       (004, "David", "Peterson", 004, 001);



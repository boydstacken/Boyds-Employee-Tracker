CREATE TABLE roles (
 id INT NOT NULL,
 title VARCHAR(30) NOT NULL,
 salary DECIMAL NOT NULL,
 department_id INT NOT NULL
);

INSERT INTO roles (id, name)
VALUES 
    (1, "Job Title"),
    (2, "Role ID"),
    (3, "Department"),
    (4, "Salary");

SELECT * FROM roles;
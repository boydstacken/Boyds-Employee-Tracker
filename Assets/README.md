# Boyd's Employee Tracker

## Description

The motivation for this application was to establish an opportunity for business owner to track and manage company data likedepartments, roles, and employees to effectively organize and plan using a commpand line application.  generator from a user's input with using the inquier. Primarily creating the framework in SQL and connecting backend functionality with javascript, npm, etc.

## Table of Contents

-[Installation](#installation)
-[Usage](#usage)
-[Credits](#credits)
-[License](#license)
-[Questions](#questions)

## Installation

Do a npm install in the terminal to get all the npm packages. You’ll need to use the [MySQL2 package](https://www.npmjs.com/package/mysql2) to connect to your MySQL database and perform queries, and the [Inquirer package](https://www.npmjs.com/package/inquirer/v/8.2.4) to interact with the user via the command line.


## Usage

Here's a quick video link on how to use this application: https://drive.google.com/file/d/1Ht968aXVzruUsvI92TIxE0LrfQ5og-c6/view


Establish your schema.sql files, create your database and use your database to ensure you are properly set up from start. Then you will craft the framework for your 3 tables (employees, roles, and departments) in this file. Set up tables as noted below

* `department`

    * `id`: `INT PRIMARY KEY`

    * `name`: `VARCHAR(30)` to hold department name

* `role`

    * `id`: `INT PRIMARY KEY`

    * `title`: `VARCHAR(30)` to hold role title

    * `salary`: `DECIMAL` to hold role salary

    * `department_id`: `INT` to hold reference to department role belongs to

* `employee`

    * `id`: `INT PRIMARY KEY`

    * `first_name`: `VARCHAR(30)` to hold employee first name

    * `last_name`: `VARCHAR(30)` to hold employee last name

    * `role_id`: `INT` to hold reference to employee role

    * `manager_id`: `INT` to hold reference to another employee that is the manager of the current employee (`null` if the employee has no manager)

You will also create a separate seeds.sql file to feed the db information to provide the user with data while going through the prompt functions to make the process easier for the user

If you make updates to your schema.sql file, make sure you are in the SQL function and run the command "source schema.sql". if you make updates to your seeds.sql file, ensure you also "source seeds.sql" in the SQL function.

Then start establishing your javascript code in a separate file for the prompt functions for each of the three tables and the based on the desired queries.

After code is implemented run the cmd "node server.js" in the terminal in your working path directory and run through the prompts as you see fit to establish your data and displayed results.

## Credits

Boyd Stacken
Github Profile: https://github.com/boydstacken

## License

n/a

## Questions

If you have any questions about this Employee Tracker, please contact boydstacken@icloud.com with any futher inquiries.

## Video Tutorial

Here is the link with the tutorial on how to use this aplicaiton: https://drive.google.com/file/d/1Ht968aXVzruUsvI92TIxE0LrfQ5og-c6/view
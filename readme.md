# School Database Project

This project is a web application for managing a school database. It includes functionalities to handle student records, teacher information, classrooms, subjects, and class schedules.


## Features

- Manage student records
- Handle teacher information
- Track classrooms and their facilities
- Manage subjects and their requirements
- Schedule classes and assign teachers and students*
- Provide a simple frontend interface for interacting with the database

## Getting Started

### Prerequisites

- Node.js and npm installed
- MySQL(Mariadb) Database

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/abhijeetadarsh/schooldb.git
   ```

2. Install dependencies:

   ```bash
   cd schooldb/backend
   npm install
   ```

## Database Schema

The database schema includes the following tables:

- Student
- Teacher
- Classroom
- Subject
- Class
- StudentClasses (junction table)

See [schema.sql](./backend/src/db/sql/initTables.sql) for the complete SQL schema.

See [er.png](./img/ER_diagram.png) for the ER Diagram.

## Backend Setup

### Node.js and Express

Ensure you have Node.js and npm installed. Run the following commands:

```bash
cd backend
npm run start
```

### MySQL Database

1. You only need to setup [Triggers.sql](./Triggers.sql) manually.

## Frontend

The frontend is a simple HTML and CSS interface. You can customize it further based on your preferences.

## API Endpoints

- `/api/v1/students`: CRUD operations for students
- `/api/v1/teachers`: CRUD operations for teachers
- `/api/v1/classrooms`: CRUD operations for classrooms
- `/api/v1/subjects`: CRUD operations for subjects
- `/api/v1/classs`: CRUD operations for classes
- `/api/v1/studentclassess`: CRUD operations for student-class relationships

See the [API documentation](./backend/src/api/routes/routeHandler.js) for details.

## Usage

1. Start the backend server:

   ```bash
   cd backend
   npm run start
   ```

2. Open the frontend HTML files in a web browser.

## Contributing

Contributions are welcome! Feel free to open issues and pull requests.

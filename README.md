# Employee Resource Directory

A full-stack CRUD application for managing employees and their reporting relationships.

**Stack:** React JS (frontend) | Node.js + Express (backend) | MySQL (database)

## Project Structure

```
employee-resource-directory/
├── frontend/          # React JS application
├── backend/           # Node.js + Express API
├── database/          # Database schema and seed data
│   └── schema.sql
├── docs/              # Documentation
├── .gitignore
└── README.md
```

## Database Setup

Database: **MySQL**

### 1. Create the database and tables

```bash
# Using MySQL CLI
mysql -u root -p < database/schema.sql

# Or import via MySQL Workbench/GUI tool
```

### 2. Connection Details (update backend/.env)

```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=employee_directory
DB_PORT=3306
```

## Backend Setup

```bash
cd backend

# Install dependencies
npm install

# Create .env file with database credentials
# (See .env.example for reference)

# Start the server
npm start
# Server runs on http://localhost:5000
```

## Frontend Setup

```bash
cd frontend

# Install dependencies
npm install

# Start the React app
npm start
# App runs on http://localhost:3000
```

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/employees` | List all employees (supports `?search=` and `?department=` query params) |
| `GET` | `/api/employees/:id` | Get single employee |
| `POST` | `/api/employees` | Create new employee |
| `PUT` | `/api/employees/:id` | Update employee |
| `DELETE` | `/api/employees/:id` | Delete employee |

## Running Tests

### Backend Tests
```bash
cd backend
npm test
```

### Frontend Tests
```bash
cd frontend
npm test
```

## Assumptions & Notes

- This is a Phase 1 setup. Core CRUD functionality will be implemented in Phase 2.
- Self-referencing manager relationship (manager_id → employees.id) is configured.
- Seed data includes employees across multiple departments with and without managers.

---

For detailed Phase 1 progress, see `docs/PHASE-1.md`

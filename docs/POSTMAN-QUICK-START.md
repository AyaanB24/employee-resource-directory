# Postman Quick Start

## 1. Start Backend
```bash
cd backend
npm install (if not done)
npm start
```
Expected: `✓ Employee Directory API running on http://localhost:5000`

## 2. Import Collection in Postman
1. Open Postman
2. File → Import
3. Select: `docs/postman/GTT_Employee_Resource_Directory_API.postman_collection.json`
4. Click Import

## 3. Run Tests in Order

**Read Operations (GET):**
- ✓ GET all employees
- ✓ GET employee by valid ID (1)
- ✓ GET employee by invalid ID (999)
- ✓ GET with search filter (?search=alice)
- ✓ GET with department filter (?department=Engineering)

**Create Operations (POST):**
- ✓ POST valid new employee
- ✓ POST missing required field (400)
- ✓ POST invalid email (400)
- ✓ POST duplicate email (400)
- ✓ POST invalid manager_id (400)

**Update Operations (PUT):**
- ✓ PUT valid employee
- ✓ PUT non-existing employee (404)

**Delete Operations (DELETE):**
- ✓ DELETE valid employee
- ✓ DELETE non-existing employee (404)

## Expected Results

| Test | Expected Status |
|------|---|
| GET all employees | 200 |
| GET valid ID | 200 |
| GET invalid ID | 404 |
| POST valid | 201 |
| POST invalid | 400 |
| PUT valid | 200 |
| PUT invalid ID | 404 |
| DELETE valid | 200 |
| DELETE invalid ID | 404 |

## Validation Verified

✓ Name, email, department, role required
✓ Email format validation
✓ Email uniqueness enforced
✓ Manager must exist (if provided)
✓ Cannot be own manager
✓ Status must be active/inactive
✓ All SQL queries parameterized
✓ Proper error messages returned
✓ Manager names included via LEFT JOIN

## Notes

- All 12 seed employees loaded from database
- Use employee IDs 1-12 for valid references
- Each POST needs unique email address
- Delete test uses ID 5 (Eve Martinez - inactive employee)

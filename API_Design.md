# AI Support Ticket System

## 1. Health Check
GET /api/health

## 2. Authentication
POST /api/auth/register
POST /api/auth/login

## 3. Ticket Management
POST   /api/tickets
GET    /api/tickets
GET    /api/tickets/:id
PATCH  /api/tickets/:id
PATCH  /api/tickets/:id/status
DELETE /api/tickets/:id

## 4. Planned Ticket Fields
- title: String
- description: String
- category: String
- priority: Low, Medium, High, Urgent
- status: Open, In Progress, Resolved, Closed
- createdBy: User ID
- assignedTo: User ID (optional)

## 5. Planned User Roles
- User
- Support Agent
- Admin

## 6. Planned AI Features
- Generate ticket summaries
- Suggest replies for support agents

## 7. Security
- Password hashing
- JWT authentication
- Role-based authorization
- Request validation
- Environment variables for secrets
-
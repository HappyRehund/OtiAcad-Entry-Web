# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Backend API

This application now includes a backend API server for managing todos. The server provides REST endpoints for authenticated users.

### Starting the Backend Server

```bash
npm run server
```

The server runs on port 3001 by default.

### API Endpoints

All endpoints require a `user-id` header for authentication.

#### GET /api/todos
Returns all todos for the authenticated user.

```bash
curl -X GET "http://localhost:3001/api/todos" \
  -H "Content-Type: application/json" \
  -H "user-id: your-user-id"
```

#### POST /api/todos
Creates a new todo with the provided text.

```bash
curl -X POST "http://localhost:3001/api/todos" \
  -H "Content-Type: application/json" \
  -H "user-id: your-user-id" \
  -d '{"text": "Your todo text"}'
```

#### PUT /api/todos/:id
Updates a todo's completion status.

```bash
curl -X PUT "http://localhost:3001/api/todos/todo-id" \
  -H "Content-Type: application/json" \
  -H "user-id: your-user-id" \
  -d '{"completed": true}'
```

#### DELETE /api/todos/:id
Deletes a specific todo.

```bash
curl -X DELETE "http://localhost:3001/api/todos/todo-id" \
  -H "Content-Type: application/json" \
  -H "user-id: your-user-id"
```

### Development Scripts

- `npm run dev` - Start the frontend development server
- `npm run server` - Start the backend API server
- `npm run dev:server` - Start the backend with nodemon for development
- `npm run build` - Build the frontend for production
- `npm run lint` - Run ESLint on all files

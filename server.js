import express from 'express';
import cors from 'cors';
import { v4 as uuidv4 } from 'uuid';

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// In-memory storage for todos (grouped by user)
const todosStorage = {};

// Simple authentication middleware
const authenticateUser = (req, res, next) => {
  const userId = req.headers['user-id'] || 'default-user';
  req.userId = userId;
  
  // Initialize user's todos if not exists
  if (!todosStorage[userId]) {
    todosStorage[userId] = [];
  }
  
  next();
};

// Apply authentication to all /api/todos routes
app.use('/api/todos', authenticateUser);

// GET /api/todos - Get all todos for authenticated user
app.get('/api/todos', (req, res) => {
  const userTodos = todosStorage[req.userId] || [];
  res.json(userTodos);
});

// POST /api/todos - Create a new todo
app.post('/api/todos', (req, res) => {
  const { text } = req.body;
  
  if (!text || !text.trim()) {
    return res.status(400).json({ error: 'Todo text is required' });
  }
  
  const newTodo = {
    id: uuidv4(),
    text: text.trim(),
    completed: false,
    createdAt: new Date()
  };
  
  todosStorage[req.userId].push(newTodo);
  res.status(201).json(newTodo);
});

// PUT /api/todos/:id - Update todo completion status
app.put('/api/todos/:id', (req, res) => {
  const { id } = req.params;
  const { completed } = req.body;
  
  const userTodos = todosStorage[req.userId];
  const todoIndex = userTodos.findIndex(todo => todo.id === id);
  
  if (todoIndex === -1) {
    return res.status(404).json({ error: 'Todo not found' });
  }
  
  // Update completed status if provided
  if (typeof completed === 'boolean') {
    userTodos[todoIndex].completed = completed;
  }
  
  res.json(userTodos[todoIndex]);
});

// DELETE /api/todos/:id - Delete a specific todo
app.delete('/api/todos/:id', (req, res) => {
  const { id } = req.params;
  
  const userTodos = todosStorage[req.userId];
  const todoIndex = userTodos.findIndex(todo => todo.id === id);
  
  if (todoIndex === -1) {
    return res.status(404).json({ error: 'Todo not found' });
  }
  
  const deletedTodo = userTodos.splice(todoIndex, 1)[0];
  res.json(deletedTodo);
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
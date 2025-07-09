import { useMemo } from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Stats from "./Stats";
import AddTodo from "./AddTodo";
import Filter from "./Filter";
import TodoList from "./TodoList";
import ClearButton from "./ClearButton";
import { useEffect } from "react";

function Todo() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      return JSON.parse(savedTodos).map((todo) => ({
        ...todo,
        createdAt: new Date(todo.createdAt),
      }));
    } else {
      return [];
    }
  });
  const [newTodo, setNewTodo] = useState("");
  const [filter, setFilter] = useState("all");

  const addTodo = () => {
    if (newTodo.trim()) {
      const todo = {
        id: uuidv4(),
        text: newTodo.trim(),
        completed: false,
        createdAt: new Date(),
      };
      setTodos([todo, ...todos]);
      setNewTodo("");
    }
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const filteredTodos = useMemo(() => {
    switch (filter) {
      case "active":
        return todos.filter((todo) => !todo.completed);
      case "completed":
        return todos.filter((todo) => todo.completed);
      default:
        return todos;
    }
  }, [todos, filter]);

  const stats = useMemo(() => {
    const total = todos.length;
    const completed = todos.filter((todo) => todo.completed).length;
    const active = total - completed;
    return { total, completed, active };
  }, [todos]);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addTodo();
    }
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      {/* Stats */}
      <Stats
        active={stats.active}
        completed={stats.completed}
        total={stats.total}
      />
      {/* Add Todo */}
      <AddTodo
        newTodo={newTodo}
        setNewTodo={setNewTodo}
        addTodo={addTodo}
        handleKeyPress={handleKeyPress}
      />
      {/* Filter */}
      <Filter stats={stats} filter={filter} setFilter={setFilter} />
      {/* Todo List */}
      <TodoList
        filteredTodos={filteredTodos}
        filter={filter}
        todos={todos}
        stats={stats}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
      />
      {/* Clear Completed Button */}
      <ClearButton stats={stats} todos={todos} setTodos={setTodos} />
    </>
  );
}

export default Todo;

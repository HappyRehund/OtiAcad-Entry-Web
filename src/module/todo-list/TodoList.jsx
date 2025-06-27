import { CheckSquare2 } from "lucide-react";
import React from "react";
import Container from "../../components/Container";
import TodoItem from "./TodoItem";

function TodoList({
  filteredTodos,
  filter,
  todos,
  stats,
  toggleTodo,
  deleteTodo,
}) {
  return (
    <Container>
      <div className="space-y-3">
        {filteredTodos.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-base-content/50 text-lg">
              {filter === "all" && todos.length === 0 && (
                <>
                  <CheckSquare2 className="h-16 w-16 mx-auto mb-4 opacity-50" />
                  <p>No tasks yet. Add your first task!!!</p>
                </>
              )}
              {filter === "active" && stats.active === 0 && stats.total > 0 && (
                <p>All tasks completed!</p>
              )}
              {filter === "completed" &&
                stats.completed === 0 &&
                stats.total > 0 && <p>No completed tasks yet</p>}
            </div>
          </div>
        ) : (
          filteredTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={toggleTodo}
              onDelete={deleteTodo}
            />
          ))
        )}
      </div>
    </Container>
  );
}

export default TodoList;

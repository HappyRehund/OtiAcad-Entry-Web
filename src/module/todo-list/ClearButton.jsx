import React from "react";
import Container from "../../components/Container";

  function ClearButton({stats, todos, setTodos}) {
  return (
    <Container>
      {stats.completed > 0 && (
        <div className="text-center mt-8">
          <button
            onClick={() => setTodos(todos.filter((todo) => !todo.completed))}
            className="btn btn-outline btn-error"
          >
            Clear Completed ({stats.completed})
          </button>
        </div>
      )}
    </Container>
  );
}

export default ClearButton;

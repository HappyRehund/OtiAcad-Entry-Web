import { Plus } from "lucide-react";
import React from "react";
import Container from "../../components/Container";

function AddTodo({ newTodo, setNewTodo, addTodo, handleKeyPress }) {
  return (
    <Container>
      <div className="card bg-base-100 shadow-lg mb-8">
        <div className="card-body">
          <h2 className="card-title mb-4">Add New Task</h2>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="What needs to be done?"
              className="input input-bordered flex-1 focus:input-primary"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              onKeyDown={handleKeyPress}
            />
            <button
              onClick={addTodo}
              className="btn btn-primary"
              disabled={!newTodo.trim()}
            >
              <Plus className="h-5 w-5" />
              Add Task
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default AddTodo;

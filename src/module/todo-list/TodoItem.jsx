import { X } from "lucide-react";
import { Trash2 } from "lucide-react";
import { Check } from "lucide-react";
import React from "react";

function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <div className="card bg-base-100 shadow-md hover:shadow-lg transition-all duration-200 animate-fade-in">
      <div className="card-body p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 flex-1">
            <button
              onClick={() => onToggle(todo.id)}
              className={`btn btn-sm btn-circle ${
                todo.completed ? "btn-success" : "btn-outline hover:btn-primary"
              } transition-all duration-200`}
            >
              {
              todo.completed ? (
                <Check className="h-4 w-4" />
              ) : (
                <X className="h-4 w-4 opacity-0"/>
              )}
            </button>

            <div className="flex-1">
                {/* text */}
                <p
                className={`text-base transition-all duration-200 ${
                    todo.completed
                    ? "line-through text-base-content/60"
                    : "text-base-content"
                }`}
                >
                    {todo.text}
                </p>
                {/* date */}
                <p className="text-xs text-base-content/60 mt-1">
                    Created: {todo.createdAt.toLocaleDateString()} at{' '}
                    {todo.createdAt.toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit'
                    })}
                </p>
            </div>
          </div>
          {/* Delete button */}
          <button
          onClick={() => onDelete(todo.id)}
          className="btn btn-sm btn-circle btn-ghost hover:btn-error transition-all duration-200"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;

import { FilterIcon } from "lucide-react";
import React from "react";
import Container from "../../components/Container";

function Filter({ stats, filter, setFilter }) {
  return (
    <Container>
      <div className="flex justify-center mb-6">
        <div className="btn-group">
          <button
            className={`btn ${
              filter === "all" ? "btn-active btn-primary" : ""
            }`}
            onClick={() => setFilter("all")}
          >
            <FilterIcon className="h-4 w-4 mr-2" />
            All ({stats.total})
          </button>
          <button
            className={`btn ${
              filter === "active" ? "btn-active btn-primary" : ""
            }`}
            onClick={() => setFilter("active")}
          >
            Active ({stats.active})
          </button>
          <button
            className={`btn ${
              filter === "completed" ? "btn-active btn-primary" : ""
            }`}
            onClick={() => setFilter("completed")}
          >
            Completed ({stats.completed})
          </button>
        </div>
      </div>
    </Container>
  );
}

export default Filter;

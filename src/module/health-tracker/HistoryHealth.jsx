import React from "react";
import HealthItem from "./HealthItem";
import Container from "../../components/Container";

function HistoryHealth({
  setFilter,
  counts,
  filter,
  filteredEntries,
  deleteEntry,
}) {
  return (
    <Container>
      <div className="bg-base-100 rounded-lg shadow-md p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold">History</h2>

          {/* Filter buttons */}
          <div className="flex gap-2">
            <button
              onClick={() => setFilter("all")}
              className={`btn btn-sm ${
                filter === "all" ? "btn-primary" : "btn-outline"
              }`}
            >
              All ({counts.all})
            </button>
            <button
              onClick={() => setFilter("calories")}
              className={`btn btn-sm ${
                filter === "calories" ? "btn-warning" : "btn-outline"
              }`}
            >
              Calories ({counts.calories})
            </button>
            <button
              onClick={() => setFilter("sugar")}
              className={`btn btn-sm ${
                filter === "sugar" ? "btn-error" : "btn-outline"
              }`}
            >
              Sugar ({counts.sugar})
            </button>
            <button
              onClick={() => setFilter("water")}
              className={`btn btn-sm ${
                filter === "water" ? "btn-info" : "btn-outline"
              }`}
            >
              Water ({counts.water})
            </button>
            <button
              onClick={() => setFilter("condition")}
              className={`btn btn-sm ${
                filter === "condition" ? "btn-success" : "btn-outline"
              }`}
            >
              Condition ({counts.condition})
            </button>
          </div>
        </div>

        {/* Health entries list */}
        <div className="space-y-3">
          {filteredEntries.length === 0 ? (
            <div className="text-center py-8 text-base-content/60">
              No {filter === "all" ? "health entries" : filter} records found
            </div>
          ) : (
            filteredEntries.map((entry) => (
              <HealthItem
                key={entry.id}
                entry={entry}
                onDelete={deleteEntry} // Tambahkan prop onDelete
              />
            ))
          )}
        </div>
      </div>
    </Container>
  );
}

export default HistoryHealth;

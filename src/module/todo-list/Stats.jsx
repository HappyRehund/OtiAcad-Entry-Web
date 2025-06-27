import React from "react";
import Container from "../../components/Container";

function Stats({ total, active, completed }) {
  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="stat bg-base-100 rounded-lg shadow-md">
          <div className="stat-title">Total Tasks</div>
          <div className="stat-value text-primary">{total}</div>
        </div>
        <div className="stat bg-base-100 rounded-lg shadow-md">
          <div className="stat-title">Active Tasks</div>
          <div className="stat-value text-warning">{active}</div>
        </div>
        <div className="stat bg-base-100 rounded-lg shadow-md">
          <div className="stat-title">Completed</div>
          <div className="stat-value text-success">{completed}</div>
        </div>
      </div>
    </Container>
  );
}

export default Stats;

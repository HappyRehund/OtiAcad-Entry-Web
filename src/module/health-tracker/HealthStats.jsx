import React from "react";
import Container from "../../components/Container";

function HealthStats({ todayStats }) {
  return (
    <Container>
      <div className="bg-base-100 rounded-lg shadow-md p-6 mb-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-semibold text-4xl text-primary">Today</h2>
          <div className="text-primary text-3xl font-bold">Body Condition</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-base-content/70">Calories</span>
              <span className="font-bold">{todayStats.calories} cal</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-base-content/70">Sugar level</span>
              <span className="font-bold">{todayStats.sugar}g</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-base-content/70">Water intake</span>
              <span className="font-bold">{todayStats.water}L</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-base-content/70">Mood & Condition</span>
              <span className="font-bold">
                {todayStats.conditions.length > 0
                  ? todayStats.conditions[0]
                  : "Not recorded"}
              </span>
            </div>
          </div>

          <div className="text-right">
            <div className="text-base-content/60 mb-2">Overall Status</div>
            <div className="text-2xl font-bold text-error">
              {todayStats.conditions}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default HealthStats;

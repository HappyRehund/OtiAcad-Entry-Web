import React from "react";
import { Heart, Droplets, Candy, Zap, Trash2 } from "lucide-react";

const HealthItem = ({ entry, onDelete }) => { // Tambahkan onDelete prop
  const getIcon = () => {
    switch (entry.type) {
      case "calories":
        return <Zap className="h-5 w-5" />;
      case "sugar":
        return <Candy className="h-5 w-5" />;
      case "water":
        return <Droplets className="h-5 w-5" />;
      case "condition":
        return <Heart className="h-5 w-5" />;
      default:
        return <Heart className="h-5 w-5" />;
    }
  };

  const getTypeLabel = () => {
    switch (entry.type) {
      case "calories":
        return "Calories";
      case "sugar":
        return "Sugar";
      case "water":
        return "Water";
      case "condition":
        return "Body Condition";
      default:
        return "Health";
    }
  };

  const getValueDisplay = () => {
    if (entry.type === "condition") {
      return entry.description;
    }
    return `${entry.value}${
      entry.type === "water" ? "L" : entry.type === "calories" ? " cal" : "g"
    }`;
  };

  return (
    <div className="bg-base-300/50 rounded-lg p-4 flex items-center justify-between border border-base-300/30 hover:bg-base-300/70 transition-all duration-200">
      <div className="flex items-center gap-3 flex-1">
        <div className="w-2 h-8 rounded-full bg-primary"></div>
        <div className="flex-1">
          <div className="text-sm font-medium text-base-content/70">
            {getTypeLabel()}
          </div>
          <div className="text-lg font-bold text-base-content">
            {getValueDisplay()}
          </div>
          {entry.type !== "condition" && (
            <div className="text-base-content/60 text-sm">
              {entry.description}
            </div>
          )}
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="text-base-content/40 text-sm">
          {entry.createdAt.toLocaleDateString()}{" "}
          {entry.createdAt.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </div>
        <div className="text-base-content/40">{getIcon()}</div>
        
        {/* Tambahkan tombol delete */}
        <button
          onClick={() => onDelete(entry.id)}
          className="btn btn-sm btn-circle btn-ghost hover:btn-error transition-all duration-200"
        >
          <Trash2 className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default HealthItem;
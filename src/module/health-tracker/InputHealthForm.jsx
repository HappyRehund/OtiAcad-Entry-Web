import { ArrowRight } from "lucide-react";
import React from "react";
import Container from "../../components/Container";

function InputHealthForm({
  inputType,
  value,
  setValue,
  handleSubmit,
  description,
  setDescription,
  setInputType,
  getDescriptionPlaceholder,
  isFormValid,
}) {
  return (
    <Container>
      <div className="bg-base-100 rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-lg font-semibold mb-4">Input Track</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex gap-4 items-center">
            <select
              value={inputType}
              onChange={(e) => setInputType(e.target.value)}
              className="select select-bordered focus:select-primary"
            >
              <option value="calories">Calories</option>
              <option value="sugar">Sugar</option>
              <option value="water">Water</option>
              <option value="condition">Condition & Mood</option>
            </select>

            {inputType !== "condition" && (
              <div className="relative">
                <input
                  type="number"
                  step={inputType === "water" ? "0.1" : "1"}
                  placeholder="0"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  className="input input-bordered w-32 focus:input-primary text-center"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-base-content/40 text-sm">
                  {inputType === "water"
                    ? "L"
                    : inputType === "calories"
                    ? "cal"
                    : "g"}
                </div>
              </div>
            )}

            <input
              type="text"
              placeholder={getDescriptionPlaceholder()}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="input input-bordered flex-1 focus:input-primary"
            />

            <button
              type="submit"
              className="btn btn-primary gap-2"
              disabled={!isFormValid()} // Menggunakan fungsi validasi yang diperbaiki
            >
              submit
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </form>
      </div>
    </Container>
  );
}

export default InputHealthForm;

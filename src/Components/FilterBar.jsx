import React from "react";

export default function FilterBar({ filter, setFilter }) {
  return (
    <div className="mb-6 text-center">
      {" "}
      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="px-4 py-2 border rounded shadow-sm"
      >
        {" "}
        <option value="All">All</option> <option value="Veg">Veg</option>{" "}
        <option value="Non-Veg">Non-Veg</option>{" "}
        <option value="Both">Both</option>{" "}
      </select>{" "}
    </div>
  );
}

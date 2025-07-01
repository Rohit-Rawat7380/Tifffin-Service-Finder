import React from "react";

export default function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="mb-4 text-center">
      {" "}
      <input
        type="text"
        placeholder="Search by name or area..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full max-w-md px-4 py-2 border rounded shadow-sm"
      />{" "}
    </div>
  );
}

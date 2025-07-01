import React, { useState } from "react";
import TiffinList from "./components/TiffinList";
import FilterBar from "./components/FilterBar";
import SearchBar from "./components/SearchBar";
import tiffinsData from "./data/tiffins";

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("All");

  const filteredTiffins = tiffinsData.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.area.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === "All" || item.type === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {" "}
      <h1 className="text-3xl font-bold text-center text-green-700 mb-6">
        Tiffin Service Finder 🍱
      </h1>{" "}
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />{" "}
      <FilterBar filter={filter} setFilter={setFilter} />{" "}
      <TiffinList tiffins={filteredTiffins} />{" "}
    </div>
  );
}

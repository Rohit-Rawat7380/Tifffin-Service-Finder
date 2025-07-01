import React from 'react';
import TiffinCard from './TiffinCard';

export default function TiffinList({ tiffins }) {
  if (tiffins.length === 0) {
    return <p className="text-center text-gray-500">No tiffin services found.</p>;
  }
  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {tiffins.map((tiffin) => (
        <TiffinCard key={tiffin.id} tiffin={tiffin} />
      ))}
    </div>
  );
}
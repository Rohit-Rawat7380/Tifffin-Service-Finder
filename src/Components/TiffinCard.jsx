import React from 'react';

export default function TiffinCard({ tiffin }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition">
      <h2 className="text-xl font-bold mb-1">{tiffin.name}</h2>
      <p className="text-sm text-gray-600 mb-1">📍 Area: {tiffin.area}</p>
      <p className="text-sm mb-1">🍽️ Type: <span className="font-semibold">{tiffin.type}</span></p>
      <p className="text-sm mb-1">💰 Price: ₹{tiffin.price}/month</p>
      <p className="text-sm mb-1">
         Contact: <a href={`tel:${tiffin.contact}`}
         className="text-blue-600 
         underline">{tiffin.contact}</a>
      </p>

      {/* Optional Tags */}
      {tiffin.vegOnly && (
        <span className="inline-block mt-2 px-2 py-1 text-xs bg-green-100 text-green-800 rounded">
          Pure Veg
        </span>
      )}
      {tiffin.rating && (
        <p className="text-sm mt-2">⭐ Rating: {tiffin.rating}/5</p>
      )}
    </div>
  );
}
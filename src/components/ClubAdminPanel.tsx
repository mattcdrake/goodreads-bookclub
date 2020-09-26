import React from "react";

function ClubAdminPanel() {
  return (
    <div className="p-4 space-y-1 border-solid border-2 border-gray-400 shadow rounded w-64">
      <button className="block w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
        Button 1
      </button>
      <button className="block w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
        Button 2
      </button>
      <button className="block w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
        Button 3
      </button>
    </div>
  );
}

export { ClubAdminPanel };

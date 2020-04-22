import React, { useState } from "react";

const SearchBar = ({ searchText }) => {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    searchText(text);
  };

  return (
    <div className="max-w-sm rounded overflow-hidden my-10 mx-auto">
      <form onSubmit={onSubmit} className="w-full max-w-sm">
        <div className="flex items-center border-b py-2">
          <input
            className="bg-grey w-full leading-tight focus:outline-none appearance-none"
            type="text"
            onChange={(e) => setText(e.target.value)}
            placeholder="Search images..."
          />
          <button
            className="flex-shrink-0 bg-indigo-200 hover:bg-blue-700 border-indigo-500 rounded text-sm  text-white py-1 px-2"
            type="submit"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;

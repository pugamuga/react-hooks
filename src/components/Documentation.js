import React from "react";

const Documentation = () => {
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("first");
        }}
      >
        <button type="submit" className="bg-slate-500 p-3 rounded-md">
          Click
        </button>
      </form>
    </div>
  );
};

export default Documentation;

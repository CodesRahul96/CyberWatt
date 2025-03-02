import React from "react";

const Loader = () => {
  return (
    <div className="bg-[#252525] w-full min-h-screen flex justify-center items-center">
      <div className="flex min-h-screen w-full items-center justify-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-yellow-500 to-pink-500 animate-spin">
          <div className="h-9 w-9 rounded-full bg-gray-200"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;

import React from "react";

const Crumb = ({ name }) => {
  return (
    <div className="w-full h-96 crumb flex items-center">
      <div className=" flex bg-[#228b22] bg-opacity-70 w-full h-full items-center justify-center text-white flex-col ">
        <div className="text-6xl font-bold">{name}</div>
        <div className="flex flex-row py-5 font-bold gap-x-2">
          <h1 className="text-black text-xl">Home </h1>{" "}
          <h1 className="text-black text-xl"> &gt; </h1>
          <h1 className=" text-xl">{name}</h1>
        </div>
      </div>
    </div>
  );
};

export default Crumb;

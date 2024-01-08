import React from "react";
import Dock from "../components/Dock";
import Navigator from "../components/Navigator";
const Project = () => {
  return (
    <>
      <div className="grid grid-cols-12 grid-rows-6 h-screen w-full bg-bg_color">
        <div className="grid col-span-1 row-start-3 row-span-2 place-content-center">
          <Navigator />
        </div>
        <div className=" row-start-6 col-start-4 col-span-6 align-items-center">
          <div className="flex items-center justify-center">
            <Dock />
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;

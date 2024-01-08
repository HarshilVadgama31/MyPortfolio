import React from "react";
import NavigationButton from "../components/NavigationButton";

const Navigator = () => {

  return (
    <>
      <div className="flex flex-col h-full w-full bg-bg_color">
        <div className="">
          <NavigationButton icon="Symbol.svg" redirect='/HomePage'>HOME</NavigationButton>
          <NavigationButton icon="ProjectSymbol.svg" redirect='/Project'>WORK</NavigationButton>
          <NavigationButton icon="AboutSymbol.svg" redirect='/Navigator'>SKI L²</NavigationButton>
        </div>
      </div>
    </>
  );
};

export default Navigator;

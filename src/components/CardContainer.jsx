import React from "react";
import { BiCaretLeftCircle, BiCaretRightCircle } from "react-icons/bi";
import MediaCard from "./MediaCard";
const CardContainer = () => {
  return (
    <section className="p-4 text-2xl">
      <div className="flex items-center justify-between">
        <h3>Productos mas seleccionados</h3>
        <div className="flex gap-1">
          <BiCaretLeftCircle className=" cursor-pointer hover:opacity-75" />
          <BiCaretRightCircle className=" cursor-pointer hover:opacity-75" />
        </div>
      </div>
      <div className="w-2/6 bg-black h-1"></div>
      <div className="w-full flex gap-4 flex-wrap md:flex-nowrap">
        <div className="">
          <MediaCard />
        </div>
        <div className="hidden md:inline-block">
          <MediaCard />
        </div>
        <div className="hidden md:inline-block">
          <MediaCard />
        </div>
        <div className="hidden md:inline-block">
          <MediaCard />
        </div>
      </div>
    </section>
  );
};

export default CardContainer;

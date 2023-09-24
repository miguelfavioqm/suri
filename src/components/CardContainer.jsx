import React from "react";
import PropTypes from "prop-types";
import { BiCaretLeftCircle, BiCaretRightCircle } from "react-icons/bi";
import MediaCard from "./MediaCard";
const CardContainer = ({ title, product }) => {
  return (
    <section className="p-4 text-2xl w-full max-w-full">
      <div className="flex items-center justify-between">
        <h3>{title}</h3>
        <div className="flex gap-1">
          <BiCaretLeftCircle className=" cursor-pointer hover:opacity-75" />
          <BiCaretRightCircle className=" cursor-pointer hover:opacity-75" />
        </div>
      </div>
      <div className="w-2/6 bg-black h-1 mb-2 rounded-lg"></div>
      <div className="w-full flex gap-4 flex-wrap md:flex-nowrap items-center">
        <div className="">
          <MediaCard
            title={product[0].title}
            desc={product[0].descripcion}
            precio={product[0].precio}
            img={product[0].imagen}
          />
        </div>
        <div className="hidden md:inline-block">
          <MediaCard
            title={product[1].title}
            desc={product[1].descripcion}
            precio={product[1].precio}
            img={product[1].imagen}
          />
        </div>
        <div className="hidden md:inline-block">
          <MediaCard
            title={product[2].title}
            desc={product[2].descripcion}
            precio={product[2].precio}
            img={product[2].imagen}
          />
        </div>
        <div className="hidden md:inline-block">
          <MediaCard
            title={product[3].title}
            desc={product[3].descripcion}
            precio={product[3].precio}
            img={product[3].imagen}
          />
        </div>
      </div>
    </section>
  );
};

CardContainer.propTypes = {
  title: PropTypes.string.isRequired,
  product: PropTypes.array.isRequired,
};

export default CardContainer;

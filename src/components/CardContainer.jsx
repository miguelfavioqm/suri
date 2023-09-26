import React, { useState } from "react";
import PropTypes from "prop-types";
import { BiCaretLeftCircle, BiCaretRightCircle } from "react-icons/bi";
import MediaCard from "./MediaCard";

const CardContainer = ({ title, product }) => {
  let [indice, setIndice] = useState([0, 1, 2, 3]);
  const siguienteElemento = () => {
    let flag = true;
    console.log(indice);
    if (indice[0] == 3) {
      setIndice((indice = [0, 1, 2, 3]));
      flag = false;
    }
    if (indice[0] == 2) {
      setIndice((indice = [3, 0, 1, 2]));
    }
    if (indice[0] == 1) {
      setIndice((indice = [2, 3, 0, 1]));
    }
    if (indice[0] == 0 && flag) {
      setIndice((indice = [1, 2, 3, 0]));
    }
  };
  return (
    <section className="p-4 text-2xl w-full max-w-full">
      <div className="flex items-center justify-between">
        <h3>{title}</h3>
        <div className="flex gap-1">
          <BiCaretRightCircle
            onClick={() => {
              siguienteElemento();
            }}
            className=" cursor-pointer hover:opacity-75"
          />
        </div>
      </div>
      <div className="w-2/6 bg-black h-1 mb-2 rounded-lg"></div>
      <div className="w-full flex gap-4 flex-wrap md:flex-nowrap items-center">
        <div className="">
          <MediaCard
            title={product[indice[0]].title}
            desc={product[indice[0]].descripcion}
            precio={product[indice[0]].precio}
            img={product[indice[0]].imagen}
          />
        </div>
        <div className="hidden md:inline-block">
          <MediaCard
            title={product[indice[1]].title}
            desc={product[indice[1]].descripcion}
            precio={product[indice[1]].precio}
            img={product[indice[1]].imagen}
          />
        </div>
        <div className="hidden md:inline-block">
          <MediaCard
            title={product[indice[2]].title}
            desc={product[indice[2]].descripcion}
            precio={product[indice[2]].precio}
            img={product[indice[2]].imagen}
          />
        </div>
        <div className="hidden md:inline-block">
          <MediaCard
            title={product[indice[3]].title}
            desc={product[indice[3]].descripcion}
            precio={product[indice[3]].precio}
            img={product[indice[3]].imagen}
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

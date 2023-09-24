import React, { useState } from "react";
import {
  BiSearchAlt,
  BiShoppingBag,
  BiHeart,
  BiAlignLeft,
  BiSolidXSquare,
} from "react-icons/bi";
import { AiOutlineShopping, AiOutlineContacts } from "react-icons/ai";
import { GiPencilBrush } from "react-icons/gi";
const Menu = () => {
  const [menu, SetMenu] = useState(false);
  return (
    <>
      <header className="flex flex-col bg-orange-100 font-bold pt-4 md:pt-0">
        <div className="hidden md:inline-block w-full bg-black text-white px-12 py-2">
          <ul className="flex gap-4 text-sm [&>*:nth-child(1)]:overline [&>*:nth-child(1)]">
            <li>
              <a className="hover:overline" href="#">
                CERAMICA
              </a>
            </li>
            <li>
              <a className="hover:overline" href="#">
                ESCULTURA
              </a>
            </li>
            <li>
              <a className="hover:overline" href="#">
                GRABADO
              </a>
            </li>
          </ul>
        </div>
        <nav className="flex w-full justify-between px-4 md:px-12 pt-4">
          <ul className="md:hidden flex text-gray-400 z-10 gap-4">
            <li>
              <BiAlignLeft
                onClick={() => {
                  SetMenu(!menu);
                }}
                className="md:hidden text-2xl  hover:text-black"
              />
            </li>
            <li>
              <BiSearchAlt className="text-2xl hover:text-black" />
            </li>
          </ul>
          <ul className="hidden md:flex gap-4 z-10 [&>*:nth-child(1)]:text-black [&>*:nth-child(1)]:underline text-gray-400 underline-offset-4">
            <li>
              <a href="#" className="hover:underline hover:underline-offset-4 ">
                Inicio
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline hover:underline-offset-4">
                Nuevos
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline hover:underline-offset-4">
                Compras
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline hover:underline-offset-4">
                Accesorios
              </a>
            </li>
          </ul>
          <ul className="flex gap-4 z-10 text-gray-400">
            <li className="hidden md:inline-block cursor-pointer">
              <BiSearchAlt className="text-2xl hover:text-black" />
            </li>
            <li className="cursor-pointer">
              <BiShoppingBag className="text-2xl hover:text-black" />
            </li>
            <li className="cursor-pointer">
              <BiHeart className="text-2xl hover:text-black" />
            </li>
          </ul>
        </nav>
        <h1 className="w-full text-center relative bottom-7 md:bottom-6 cursor-pointer font-semibold text-2xl">
          SURI
        </h1>
      </header>
      {menu ? (
        <div className="w-full h-screen z-[99] bg-orange-100 fixed top-0 flex flex-col p-5 gap-20 items-end justify-around">
          <BiSolidXSquare
            className="text-4xl animate-pulse text-gray-400"
            onClick={() => {
              SetMenu(!menu);
            }}
          />
          <ul className="flex flex-col gap-4 md:gap-10 w-full h-full text-2xl">
            <li className="flex items-center justify-center gap-1 hover:text-black cursor-pointer hover:border-x-8 border-black w-full text-center">
              <GiPencilBrush className="text-2xl" /> Inicio
            </li>
            <li className="flex items-center justify-center gap-1 hover:text-black cursor-pointer hover:border-x-8 border-black w-full text-center">
              <AiOutlineShopping className="text-2xl" /> Nuevos
            </li>
            <li className="flex items-center justify-center gap-1 hover:text-black cursor-pointer hover:border-x-8 border-black w-full text-center">
              <AiOutlineContacts className="text-2xl" /> Compras
            </li>
            <li className="flex items-center justify-center gap-1 hover:text-black cursor-pointer hover:border-x-8 border-black w-full text-center">
              <GiPencilBrush className="text-2xl" /> Accesorios
            </li>
          </ul>
          <h4 className="w-full text-center">SURI</h4>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Menu;

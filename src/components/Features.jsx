import React from "react";
import {
  BiLogoWhatsapp,
  BiLogoTiktok,
  BiLogoFacebook,
  BiLogoInstagram,
} from "react-icons/bi";
const Features = () => {
  return (
    <section>
      <h4 className="text-center py-5 md:p-2 animate-bounce md:animate-none">
        SIGUEME EN MIS REDES SOCIALES
      </h4>
      <ul className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-10">
        <a
          href="https://www.facebook.com/JhorgerlisFlores"
          target="_blank"
          className="flex items-center justify-center gap-1 hover:text-blue-700 cursor-pointer hover:border-x-8 border-blue-700 w-full md:w-auto md:hover:border-x-0 md:hover:animate-bounce"
        >
          <BiLogoFacebook className="" />
          <p>FACEBOOK</p>
        </a>
        <a
          href="https://www.instagram.com/jhorgerlis/"
          target="_blank"
          className="flex items-center justify-center gap-1 hover:text-red-500 cursor-pointer hover:border-x-8 border-red-500 w-full md:w-auto md:hover:border-x-0 md:hover:animate-bounce"
        >
          <BiLogoInstagram className="" />
          <p>INSTAGRAM</p>
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=76578052&text=%20Hola%20visite%20tu%20pagina%20quisiera%20mayor%20informaci%C3%B3n%20%F0%9F%98%8A"
          target="_blank"
          className="flex items-center justify-center gap-1 hover:text-green-500 cursor-pointer hover:border-x-8 border-green-500 w-full md:w-auto md:hover:border-x-0 md:hover:animate-bounce"
        >
          <BiLogoWhatsapp />
          <p>WHATSAPP</p>
        </a>
        <a
          href="https://www.tiktok.com/@jhorgerlis?_t=8fy4dMkFSLN&_r=1"
          target="_blank"
          className="flex items-center justify-center gap-1 hover:text-black cursor-pointer hover:border-x-8 border-black w-full md:w-auto md:hover:border-x-0 md:hover:animate-bounce"
        >
          <BiLogoTiktok className="" />
          <p>TIK TOK</p>
        </a>
      </ul>
    </section>
  );
};

export default Features;

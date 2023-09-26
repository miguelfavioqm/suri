import React from "react";
import {
  BiLogoWhatsapp,
  BiLogoTiktok,
  BiLogoInstagram,
  BiLogoFacebook,
} from "react-icons/bi";
const Footer = () => {
  return (
    <footer className="mt-4">
      <div className="flex justify-around text-3xl bg-stone-800 p-5 text-white">
        <a href="https://www.facebook.com/JhorgerlisFlores" target="_blank">
          <BiLogoFacebook />
        </a>
        <a href="https://www.instagram.com/jhorgerlis/" target="_blank">
          <BiLogoInstagram />
        </a>
        <a
          href="https://www.tiktok.com/@jhorgerlis?_t=8fy4dMkFSLN&_r=1"
          target="_blank"
        >
          <BiLogoTiktok />
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=76578052&text=%20Hola%20visite%20tu%20pagina%20quisiera%20mayor%20informaci%C3%B3n%20%F0%9F%98%8A"
          target="_blank"
        >
          <BiLogoWhatsapp />
        </a>
      </div>
      <div className="bg-black text-white text-center">
        © Derechos Reservados 2023
      </div>
    </footer>
  );
};

export default Footer;

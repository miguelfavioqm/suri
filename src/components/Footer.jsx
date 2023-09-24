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
        <a href="#">
          <BiLogoFacebook />
        </a>
        <a href="#">
          <BiLogoInstagram />
        </a>
        <a href="#">
          <BiLogoTiktok />
        </a>
        <a href="#">
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

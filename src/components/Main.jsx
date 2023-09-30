import React from "react";
export const Main = () => {
  return (
    <section className="w-full h-[85vh] md:flex items-center justify-end flex-col gap-12 md:gap-24 p-10 hidden text-white">
      <img
        src="https://t3.ftcdn.net/jpg/05/14/54/42/360_F_514544220_JE4FpIIa5eAGOWChiPueyY2DRSOzoGUU.jpg"
        alt=""
        className="w-full h-screen absolute -z-10 top-0"
      />
      <h1 className="text-5xl bg-gradient-to-r from-orange-100 via-red-300 to-white inline-block text-transparent bg-clip-text">
        SURI ART
      </h1>
      <div>Logo</div>
      <h3>
        Hola! Te presento mi emprendimiento de Arte y Artesanía: "Suri" Soy Jhor
        y amo el arte. Realizo todas mis obras a mano. Amo realizar mis obras en
        Cerámica y Escultura, porque la arcilla me transmite mucha paz. También
        realizo estampas, porque siento que puedo expresar lo que siento de
        manera libre por la variedad de técnicas que me ofrece el Grabado.
      </h3>
    </section>
  );
};

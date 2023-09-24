import React from "react";
export const Main = () => {
  return (
    <section className="w-full h-[85vh] md:flex items-center justify-end flex-col gap-12 md:gap-24 p-10 hidden text-white">
      <img
        src="https://scontent.flpb1-1.fna.fbcdn.net/v/t39.30808-6/224134190_3135931406652855_2577863101779064056_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5614bc&_nc_ohc=PjEW_WeMR24AX_xtdEb&_nc_ht=scontent.flpb1-1.fna&oh=00_AfCK2ElPxhZySZU8u8qOhCQUeIVHwoZlPkLnofdrEgp8Ng&oe=6514DFCD"
        alt=""
        className="w-full h-screen absolute -z-10 top-0"
      />
      <h1 className="text-5xl bg-gradient-to-r from-orange-400 via-red-300 to-white inline-block text-transparent bg-clip-text">
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

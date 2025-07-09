import React from "react";
import Image from "next/image";

const HeroQuienesSomos = () => {
  return (
    <div className="py-8">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-lg overflow-hidden shadow-lg relative">
          <div className="absolute inset-0 z-20 h-full w-full flex flex-col justify-center px-8 md:px-16">
            <h1 className="text-3xl md:text-5xl font-medium pb-6 text-white text-center md:text-left max-w-3xl leading-tight">
              Quienes somos
            </h1>
            <p className="text-lg md:text-xl max-w-2xl text-white pb-8 text-center md:text-left">
              Somos una legaltech especializada en la cancelación de deudas
              personales y en la defensa de los derechos de las personas frente
              a situaciones de sobreendeudamiento.
            </p>
          </div>
          <div className="absolute inset-0 from-black/90 to-black/20 z-10 bg-gradient-to-r" />
          <Image
            src="/about-us.webp"
            width={1920}
            height={1080}
            alt="Imagen contacto Solvify"
            className="object-cover h-[400px] lg:h-[500px] w-full z-20 inset-0 object-center"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroQuienesSomos;

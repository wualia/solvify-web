import React from "react";
import Image from "next/image";
import HeroButton from "./heroButton";

const HeroHome = () => {
  return (
    <div className="py-8">
      <div className="mx-auto max-w-7xl px-4 2xl:px-0">
        <div className="rounded-lg overflow-hidden shadow-lg relative">
          <div className="absolute inset-0 z-40 h-full w-full flex flex-col justify-center px-8 md:px-16">
            <h1 className="text-3xl md:text-5xl font-medium pb-6 text-white text-center md:text-left max-w-3xl leading-tight">
              Solventamos tus problemas económicos
            </h1>
            <p className="text-lg md:text-xl max-w-2xl text-white pb-8 text-center md:text-left">
              En Solvify te ayudamos a solventar cualquier estrés económico,
              cancelando tus deudas o bien resolviendo tus inquietudes
              financieras.
            </p>
            <div>
              <HeroButton />
            </div>
          </div>
          <div className="absolute inset-0 bg-black/30 z-30" />
          <div className="relative h-[400px] lg:h-[500px] w-full z-20 inset-0">
            <Image
              src="/hero-home.webp"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              alt="Imagen contacto Solvify"
              className="object-cover  object-top"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroHome;

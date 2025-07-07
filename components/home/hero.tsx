import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const HeroHome = () => {
  return (
    // <></>
    // <div className="py-8 md:py-16 bg-gray-50">
    //   <div className="mx-auto max-w-7xl grid lg:grid-cols-2 items-center gap-8 px-4 2xl:px-0">
    //     <div>
    //       <p className="text-primary pb-2 text-xs uppercase tracking-wider font-medium text-center md:text-left">
    //         SOLVIFY
    //       </p>
    //       <div className="flex justify-center md:justify-start">
    //         <div className="w-10 h-0.5 bg-primary rounded-full mb-4" />
    //       </div>

    //       <h1 className="text-4xl font-medium pb-6 text-gray-700 text-center md:text-left">
    //         Solventamos tus problemas económicos
    //       </h1>
    //       <p className="text-lg max-w-lg text-gray-500 pb-8 text-center md:text-left">
    //         Solvify solventará cualquier estrés económico, cancelando tus deudas
    //         o bien resolviendo tus inquietudes financieras.
    //       </p>

    //       <Button asChild className=" w-full md:w-auto bg-black" size="lg">
    //         <Link href="/servicios">Nuestros servicios</Link>
    //       </Button>
    //     </div>
    //     <div className="rounded-lg overflow-hidden shadow-lg">
    //       <Image
    //         src="/hero-home.webp"
    //         width={1920}
    //         height={1080}
    //         alt="Imagen contacto Solvify"
    //         className="object-cover h-full w-full z-20 inset-0 object-top"
    //       />
    //     </div>
    //   </div>
    // </div>

    <div className="py-8">
      <div className="mx-auto max-w-7xl px-4 2xl:px-0">
        <div className="rounded-lg overflow-hidden shadow-lg relative">
          <div className="absolute inset-0 z-20 h-full w-full flex flex-col justify-center px-4 md:px-16">
            <h1 className="text-3xl md:text-5xl font-medium pb-6 text-white text-center md:text-left max-w-3xl leading-tight">
              Solventamos tus problemas económicos
            </h1>
            <p className="text-lg md:text-xl max-w-2xl text-white pb-8 text-center md:text-left">
              En Solvify te ayudamos a solventar cualquier estrés económico,
              cancelando tus deudas o bien resolviendo tus inquietudes
              financieras.
            </p>
            <div>
              <Button
                asChild
                className=" w-full md:w-auto bg-white text-black"
                size="lg"
              >
                <Link href="/servicios">Ver nuestros servicios</Link>
              </Button>
            </div>
          </div>
          <div className="absolute inset-0 bg-black/30 z-10" />
          <Image
            src="/hero-home.webp"
            width={1920}
            height={1080}
            alt="Imagen contacto Solvify"
            className="object-cover h-[500px] w-full z-20 inset-0 object-top"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroHome;

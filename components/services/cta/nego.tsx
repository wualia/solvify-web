"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useFormStore } from "@/store/form";
import Image from "next/image";

const CTA_Services_NEGO = () => {
  const { setSource } = useFormStore();

  const router = useRouter();

  const handleClick = () => {
    router.push("/formulario/negociacion-de-deuda");
    setSource("landing");
  };

  return (
    <div className="rounded-lg overflow-hidden shadow-lg relative">
      <div className="absolute inset-0 z-20 h-full w-full flex flex-col justify-center px-8 md:px-16">
        <h2 className="text-3xl font-semibold pb-6 text-white text-center md:text-left max-w-3xl leading-tight">
          ¿ Quieres negociar tus deudas?
        </h2>
        <p className="text-lg md:text-xl max-w-2xl text-white pb-8 text-center md:text-left">
          Realiza de manera gratuita el estudio de negociación y descubre que
          cantidad de deuda podemos negociar por ti.
        </p>
        <div>
          <Button
            className="w-full md:w-auto bg-white text-black hover:bg-white/80"
            onClick={handleClick}
          >
            Empezar cuestionario
          </Button>
        </div>
      </div>
      <div className="absolute inset-0 from-black/30 to-black/60 z-10 bg-gradient-to-r" />
      <Image
        src="/services-negociacion-deuda.webp"
        width={1920}
        height={1080}
        alt="Imagen contacto Solvify"
        className="object-cover h-[350px] w-full z-20 inset-0 object-center"
      />
    </div>
  );
};

export default CTA_Services_NEGO;

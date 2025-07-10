"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { useFormStore } from "@/store/form";
import { useRouter } from "next/navigation";

const NegociacionCTA = () => {
  const { setSource } = useFormStore();

  const router = useRouter();

  const handleClick = () => {
    router.push("/formulario/negociacion-de-deuda");
    setSource("blog");
  };

  return (
    <div className="bg-primary text-white p-4 rounded-lg">
      <h2 className="text-2xl font-bold">
        ¿ Quieres saber que podemos negociar?
      </h2>
      <p className="pb-4 text-gray-200 dark:text-gray-400 text-center md:text-left">
        Realiza de manera gratuita el cuestionario y descubre la deuda que
        podemos negociar por ti.
      </p>
      <Button
        className="w-full md:w-auto bg-white text-black hover:bg-white/80"
        onClick={handleClick}
      >
        Empezar cuestionario
      </Button>
    </div>
  );
};

export default NegociacionCTA;

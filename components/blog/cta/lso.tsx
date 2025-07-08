"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { useFormStore } from "@/store/form";
import { useRouter } from "next/navigation";

const LsoCTA = () => {
  const { setSource } = useFormStore();

  const router = useRouter();

  const handleClick = () => {
    router.push("/formulario/ley-de-segunda-oportunidad");
    setSource("blog");
  };
  return (
    <div className="bg-black dark:bg-card p-8 rounded-lg">
      <h2 className="text-2xl font-medium pb-4 text-white max-w-lg text-center md:text-left">
        ¿ Quieres saber si te puedes acoger?
      </h2>
      <p className="pb-4 text-gray-200 dark:text-gray-400 text-center md:text-left">
        Realiza de manera gratuita el cuestionario y descubre si tienes derecho
        a la Ley de Segunda Oportunidad.
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

export default LsoCTA;

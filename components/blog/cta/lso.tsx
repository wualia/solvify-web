import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const LsoCTA = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
      <h2 className="text-2xl font-medium pb-4 max-w-lg text-center md:text-left">
        ¿ Quieres saber si te puedes acoger?
      </h2>
      <p className="pb-4 text-gray-500 dark:text-gray-400 text-center md:text-left">
        Realiza de manera gratuita el cuestionario y descubre si tienes derecho
        a la Ley de Segunda Oportunidad.
      </p>

      <Button asChild className="w-full md:w-auto">
        <Link href="/lso">
          <span>Empezar cuestionario</span>{" "}
        </Link>
      </Button>
    </div>
  );
};

export default LsoCTA;

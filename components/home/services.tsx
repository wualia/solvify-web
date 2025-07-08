import React from "react";
import LeySegundaOportunidad from "./services/lso";
import NegociacionDeudas from "./services/negociacion";
import Revolving from "./services/revolving";
import CartelCoches from "./services/cartel-coches";
import ConcursoExpres from "./services/concurso-expres";

const HomeServices = () => {
  return (
    <div id="servicios" className="scroll-mt-8">
      <div className="pt-20 pb-10 md:py-20">
        <div className="mx-auto max-w-xl px-4 xl:px-0">
          <h2 className="text-center text-3xl pb-4 text-gray-700 dark:text-white font-medium">
            ¿ En qué te podemos ayudar ?
          </h2>
          <p className="text-center text-gray-500 dark:text-gray-200 leading-7">
            Solvify es una plataforma tecnológica que tiene la misión de
            solventar legalmente cualquier problema económico que tengas.
          </p>
        </div>
        <LeySegundaOportunidad />
        <NegociacionDeudas />
        <Revolving />
        <CartelCoches />
        <ConcursoExpres />
      </div>
    </div>
  );
};

export default HomeServices;

import React from "react";
import HeroServices from "@/components/services/hero";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Concurso exprés | Solvify",
  description:
    "Si tienes una sociedad que tiene deudas y quieres cancelarlas, también tienes la oportunidad de hacerlo legalmente.",
};

const ConcursoExpres = () => {
  return (
    <div>
      <HeroServices
        title="Concurso exprés"
        description="Cierra tu empresa o actividad con seguridad y sin cargas futuras."
        image="/services-concurso-expres.webp"
        link="/servicios"
        hasAction={true}
        buttonText="Realizar estudio gratuito"
      />
      <section className="mx-auto max-w-7xl px-4 2xl:px-0 py-12">
        <h2 className="text-2xl font-medium pb-6 text-gray-700 dark:text-white">
          ¿Qué es el concurso exprés?
        </h2>
        <p className=" text-gray-500 dark:text-gray-300 text-lg">
          ¿Tu empresa está inactiva o no tiene futuro? El concurso exprés
          permite cerrarla legalmente sin costes de liquidación ni procesos
          largos. En Solvify te ayudamos a hacerlo de forma segura y rápida.
        </p>
      </section>
      <div className=" pb-12">
        <section className="mx-auto max-w-7xl px-4 2xl:px-0 ">
          <h2 className="text-2xl font-medium pb-6 text-gray-700 dark:text-white">
            ¿Qué beneficios obtienes?
          </h2>
          <ul className="list-disc list-outside pl-4 text-lg">
            <li className="text-gray-500 dark:text-gray-300 pb-4">
              Cierre ordenado y sin gastos ocultos.
            </li>
            <li className="text-gray-500 dark:text-gray-300 pb-4">
              Elimina responsabilidades como administrador.
            </li>
            <li className="text-gray-500 dark:text-gray-300 pb-4">
              Tramitación exprés si no hay bienes ni empleados.
            </li>
          </ul>
        </section>
      </div>
      <div className=" pb-12">
        <section className="mx-auto max-w-7xl px-4 2xl:px-0 ">
          <h2 className="text-2xl font-medium pb-6 text-gray-700 dark:text-white">
            ¿Quién puede acogerse?
          </h2>
          <ul className="list-disc list-outside pl-4 text-lg">
            <li className="text-gray-500 dark:text-gray-300 pb-4">
              Autónomos que han cesado su actividad.
            </li>
            <li className="text-gray-500 dark:text-gray-300 pb-4">
              Sociedades sin ingresos ni patrimonio.
            </li>
            <li className="text-gray-500 dark:text-gray-300 pb-4">
              Negocios en pérdidas o parados.
            </li>
          </ul>
        </section>
      </div>
      <div className=" pb-12">
        <section className="mx-auto max-w-7xl px-4 2xl:px-0 ">
          <h2 className="text-2xl font-medium pb-6 text-gray-700 dark:text-white">
            ¿Qué incluye el servicio?
          </h2>
          <ul className="list-disc list-outside pl-4 text-lg">
            <li className="text-gray-500 dark:text-gray-300 pb-4">
              Análisis de viabilidad y documentación.
            </li>
            <li className="text-gray-500 dark:text-gray-300 pb-4">
              Presentación de concurso ante el juzgado mercantil.
            </li>
            <li className="text-gray-500 dark:text-gray-300 pb-4">
              Defensa legal durante el proceso.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default ConcursoExpres;

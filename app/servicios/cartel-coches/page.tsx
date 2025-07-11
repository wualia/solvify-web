import React from "react";
import HeroServices from "@/components/services/hero";
import type { Metadata } from "next";
import Accordion from "@/components/layout/accordion";
import { CARTEL_COCHES_FAQ } from "@/lib/data";

export const metadata: Metadata = {
  title: "Cartel de coches | Solvify",
  description:
    "Si compraste un coche entre 2006 y 2013 podrías recuperar hasta el 15% del precio que pagaste por él.",
  metadataBase: new URL(`${process.env.SITE_URL}`),
  alternates: {
    canonical: `/servicios/cartel-coches/`,
  },
  openGraph: {
    title: "Cartel de coches | Solvify",
    description:
      "Si compraste un coche entre 2006 y 2013 podrías recuperar hasta el 15% del precio que pagaste por él.",
    siteName: "Solvify",
    type: "website",
    images: [process.env.BLOG_URL + "/services-cartel-coches.webp"],
  },
};

const CartelCochesPage = () => {
  return (
    <div>
      <HeroServices
        title="Cartel de coches"
        description="Si compraste un coche entre 2006 y 2013, puedes reclamar una indemnización por prácticas ilegales. En Solvify gestionamos todo sin adelantar dinero."
        image="/services-cartel-coches.webp"
        link="/servicios"
        hasAction={true}
        buttonText="Realizar estudio gratuito"
      />{" "}
      <section className="mx-auto max-w-5xl px-4 2xl:px-0 py-12">
        <h2 className="text-3xl font-semibold pb-6 text-gray-700 dark:text-white">
          ¿Qué es el cartel de coches?
        </h2>
        <p className=" text-gray-500 dark:text-gray-300 text-lg">
          Entre 2006 y 2013, más de 25 marcas pactaron precios ilegalmente en
          España. Si compraste un coche durante ese periodo, puedes reclamar y
          obtener una indemnización. En Solvify te lo gestionamos todo.
        </p>
      </section>{" "}
      <div className=" pb-12">
        <section className="mx-auto max-w-5xl px-4 2xl:px-0 ">
          <h2 className="text-3xl font-semibold pb-6 text-gray-700 dark:text-white">
            ¿Qué beneficios obtienes?
          </h2>
          <ul className="list-disc list-outside pl-4 text-lg">
            <li className="text-gray-500 dark:text-gray-300 pb-4">
              Indemnización de hasta un 15 % del precio del vehículo.
            </li>
            <li className="text-gray-500 dark:text-gray-300 pb-4">
              No pagas nada por adelantado.
            </li>
            <li className="text-gray-500 dark:text-gray-300 pb-4">
              Tramitación 100 % online.
            </li>
          </ul>
        </section>
      </div>
      <div className=" pb-12">
        <section className="mx-auto max-w-5xl px-4 2xl:px-0 ">
          <h2 className="text-3xl font-semibold pb-6 text-gray-700 dark:text-white">
            ¿Qué necesitas para reclamar?
          </h2>
          <ul className="list-disc list-outside pl-4 text-lg">
            <li className="text-gray-500 dark:text-gray-300 pb-4">
              Factura o contrato de compra.
            </li>
            <li className="text-gray-500 dark:text-gray-300 pb-4">
              Ficha técnica o matrícula.
            </li>
            <li className="text-gray-500 dark:text-gray-300 pb-4">
              Año de compra entre 2006 y 2013.
            </li>
          </ul>
        </section>
      </div>
      <div className=" pb-12">
        <section className="mx-auto max-w-5xl px-4 2xl:px-0 ">
          <h2 className="text-3xl font-semibold pb-6 text-gray-700 dark:text-white">
            ¿Qué marcas están involucradas?
          </h2>
          <ul className="list-disc list-outside pl-4 text-lg">
            <li className="text-gray-500 dark:text-gray-300 pb-4">
              Volkswagen, Audi, SEAT, BMW, Peugeot, Citroën, Renault, Mercedes,
              Ford, Nissan, y muchas más.
            </li>
          </ul>
        </section>
      </div>{" "}
      <div className="mx-auto max-w-5xl px-4 2xl:px-0 mb-16">
        <h2 className="text-3xl font-semibold pb-6 text-gray-700 dark:text-white">
          Preguntas frecuentes
        </h2>
        <Accordion faqs={CARTEL_COCHES_FAQ} />
      </div>
    </div>
  );
};

export default CartelCochesPage;

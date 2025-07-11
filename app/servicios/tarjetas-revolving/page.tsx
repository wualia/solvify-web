import React from "react";
import HeroServices from "@/components/services/hero";
import Accordion from "@/components/layout/accordion";
import { REVOLVING_FAQ } from "@/lib/data";
import LatestPosts from "@/components/services/latestPosts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tarjetas Revolving | Solvify",
  description:
    "Estás pagando la deuda de tu tarjeta de crédito, pero parece que nunca terminas de pagarlo?",
  metadataBase: new URL(`${process.env.SITE_URL}`),
  alternates: {
    canonical: `/servicios/tarjetas-revolving/`,
  },
  openGraph: {
    title: "Tarjetas Revolving | Solvify",
    description:
      "Estás pagando la deuda de tu tarjeta de crédito, pero parece que nunca terminas de pagarlo?",
    siteName: "Solvify",
    type: "website",
    images: [process.env.BLOG_URL + "/services-revolving.webp"],
  },
};

const RevolvingPage = async () => {
  const data = await fetch(
    `${process.env.BLOG_URL}/api/posts?where[categorySlug][equals]=tarjetas-revolving&limit=3`
  );
  const posts = await data.json();
  return (
    <div>
      <HeroServices
        title="Tarjetas Revolving"
        description="Reclamamos tu dinero por tarjetas revolving con intereses abusivos."
        image="/services-revolving.webp"
        link="/servicios"
        hasAction={true}
        buttonText="Realizar estudio gratuito"
      />
      <section className="mx-auto max-w-5xl px-4 2xl:px-0 py-12">
        <h2 className="text-3xl font-semibold pb-6 text-gray-700 dark:text-white">
          ¿Qué es una tarjeta revolving?
        </h2>
        <p className=" text-gray-500 dark:text-gray-300 text-lg">
          Las tarjetas revolving pueden esconder intereses usurarios. En Solvify
          revisamos tu caso y reclamamos judicialmente lo que has pagado de más.
          Miles de clientes han recuperado su dinero. ¿Y tú?
        </p>
      </section>{" "}
      <div className=" pb-12">
        <section className="mx-auto max-w-5xl px-4 2xl:px-0 ">
          <h2 className="text-3xl font-semibold pb-6 text-gray-700 dark:text-white">
            ¿Qué beneficios obtienes?
          </h2>
          <ul className="list-disc list-outside pl-4 text-lg">
            <li className="text-gray-500 dark:text-gray-300 pb-4">
              Recuperación de intereses ilegales.
            </li>
            <li className="text-gray-500 dark:text-gray-300 pb-4">
              Anulación total o parcial del contrato.
            </li>
            <li className="text-gray-500 dark:text-gray-300 pb-4">
              No pagas nada por adelantado.
            </li>
          </ul>
        </section>
      </div>
      <div className=" pb-12">
        <section className="mx-auto max-w-5xl px-4 2xl:px-0 ">
          <h2 className="text-3xl font-semibold pb-6 text-gray-700 dark:text-white">
            ¿Cómo saber si tienes una revolving?
          </h2>
          <ul className="list-disc list-outside pl-4 text-lg">
            <li className="text-gray-500 dark:text-gray-300 pb-4">
              Tu deuda no baja aunque pagues cada mes.
            </li>
            <li className="text-gray-500 dark:text-gray-300 pb-4">
              El interés TAE supera el 20 % - 25 %.
            </li>
            <li className="text-gray-500 dark:text-gray-300 pb-4">
              Firmaste sin entender bien las condiciones.
            </li>
          </ul>
        </section>
      </div>
      <div className=" pb-12">
        <section className="mx-auto max-w-5xl px-4 2xl:px-0 ">
          <h2 className="text-3xl font-semibold pb-6 text-gray-700 dark:text-white">
            ¿Qué incluye nuestro servicio?
          </h2>
          <ul className="list-disc list-outside pl-4 text-lg">
            <li className="text-gray-500 dark:text-gray-300 pb-4">
              Estudio gratuito de tu contrato.
            </li>
            <li className="text-gray-500 dark:text-gray-300 pb-4">
              Cálculo de intereses abusivos.
            </li>
            <li className="text-gray-500 dark:text-gray-300 pb-4">
              Reclamación completa hasta resolución judicial.
            </li>
          </ul>
        </section>
      </div>
      <div className="mx-auto max-w-5xl px-4 2xl:px-0 mb-16">
        <h2 className="text-3xl font-semibold pb-6 text-gray-700 dark:text-white">
          Preguntas frecuentes
        </h2>
        <Accordion faqs={REVOLVING_FAQ} />
      </div>
      <div className="mx-auto max-w-7xl px-4 2xl:px-0 mb-16">
        <LatestPosts relatedPosts={posts.docs} />
      </div>
    </div>
  );
};

export default RevolvingPage;

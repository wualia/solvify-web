import React from "react";
import HeroServices from "@/components/services/hero";
import Accordion from "@/components/layout/accordion";
import CTA_Services_LSO from "@/components/services/cta/lso";
import LatestPosts from "@/components/services/latestPosts";
import { LSO_FAQ } from "@/lib/data";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ley de la Segunda Oportunidad | Solvify",
  description:
    "Descubre cómo Solvify puede ayudarte a cancelar tus deudas con la Ley de la Segunda Oportunidad. Estudio gratuito y atención en toda España. Empieza hoy tu nueva vida financiera.",
};

const LeySegundaOportunidadPage = async () => {
  const data = await fetch(
    `${process.env.BLOG_URL}/api/posts?where[categorySlug][equals]=ley-de-segunda-oportunidad&limit=3`
  );
  const posts = await data.json();

  return (
    <div>
      <HeroServices
        title="Ley de la Segunda Oportunidad"
        description="A través de la Segunda Oportunidad eliminamos tus deudas personales de forma rápida y automática."
        image="/services-lso.webp"
        link="/formulario/ley-de-segunda-oportunidad"
        hasAction={true}
        buttonText="Realizar estudio gratuito"
      />
      <section className="mx-auto max-w-7xl px-4 2xl:px-0 py-12">
        <h2 className="text-2xl font-medium pb-6 text-gray-700 dark:text-white">
          ¿Qué es la Ley de la Segunda Oportunidad?
        </h2>
        <p className=" text-gray-500 dark:text-gray-300 pb-8 text-lg">
          La Ley de la Segunda Oportunidad permite a personas insolventes
          liberarse legalmente de sus deudas. En Solvify analizamos tu caso y
          gestionamos todo el proceso para que recuperes tu estabilidad
          económica sin riesgos.
        </p>
        <p className=" text-gray-500 dark:text-gray-300 text-lg">
          En 2024, más de{" "}
          <strong className="text-gray-700 dark:text-white">
            50.000 personas en España
          </strong>{" "}
          se acogieron con éxito a este proceso. Quieres ser el próximo ?
        </p>
      </section>
      <div className=" pb-12">
        <section className="mx-auto max-w-7xl px-4 2xl:px-0 ">
          <h2 className="text-2xl font-medium pb-6 text-gray-700 dark:text-white">
            ¿Qué beneficios obtienes?
          </h2>
          <ul className="list-disc list-outside pl-4 text-lg">
            <li className="text-gray-500 dark:text-gray-300 pb-4">
              Cancelación legal de deudas personales, tarjetas, préstamos e
              incluso parte de las deudas con Hacienda.
            </li>
            <li className="text-gray-500 dark:text-gray-300 pb-4">
              Paralización de embargos, ejecuciones y llamadas de recobro.
            </li>
            <li className="text-gray-500 dark:text-gray-300 pb-4">
              Conservación de la vivienda habitual en muchos casos.
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
              Particulares y autónomos sin recursos para pagar sus deudas.
            </li>
            <li className="text-gray-500 dark:text-gray-300 pb-4">
              Personas que actúen de buena fe y no hayan cometido delitos
              económicos.
            </li>
            <li className="text-gray-500 dark:text-gray-300 pb-4">
              Incluso si tienes ingresos o bienes modestos.
            </li>
          </ul>
        </section>
      </div>
      <div className=" pb-12">
        <section className="mx-auto max-w-7xl px-4 2xl:px-0 ">
          <h2 className="text-2xl font-medium pb-6 text-gray-700 dark:text-white">
            ¿Cual es la duración media?
          </h2>
          <ul className="list-disc list-outside pl-4 text-lg">
            <li className="text-gray-500 dark:text-gray-300 pb-4">
              Sin bienes: 3 a 6 meses.
            </li>
            <li className="text-gray-500 dark:text-gray-300 pb-4">
              Con plan de pagos o bienes: hasta 12 meses.
            </li>
          </ul>
        </section>
      </div>{" "}
      <div className="mx-auto max-w-7xl px-4 2xl:px-0">
        <CTA_Services_LSO />
      </div>
      <div className="mx-auto max-w-7xl px-4 2xl:px-0 my-16">
        <h2 className="text-2xl font-medium pb-6 text-gray-700 dark:text-white">
          Preguntas frecuentes
        </h2>
        <Accordion faqs={LSO_FAQ} />
      </div>
      <div className="mx-auto max-w-7xl px-4 2xl:px-0 mb-16">
        <LatestPosts relatedPosts={posts.docs} />
      </div>
    </div>
  );
};

export default LeySegundaOportunidadPage;

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
    "A través de la Segunda Oportunidad eliminamos tus deudas personales de forma rápida y automática.",
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
      <section className="mx-auto max-w-7xl px-4 2xl:px-0 pt-16">
        <h2 className="text-2xl font-medium pb-6 text-gray-700 dark:text-white">
          ¿Qué es la Ley de la Segunda Oportunidad?
        </h2>
        <p className=" text-gray-500 dark:text-gray-300 pb-8">
          Es un mecanismo legal pensado para particulares, autónomos y pequeños
          empresarios que no pueden pagar sus deudas. Gracias a esta ley, puedes
          obtener una exoneración total o parcial de tus deudas y empezar de
          nuevo.
        </p>
        <p className=" text-gray-500 dark:text-gray-300">
          En 2023, más de{" "}
          <strong className="text-black dark:text-white">
            17.000 personas en España
          </strong>{" "}
          se acogieron con éxito a este proceso. Quieres ser el próximo ?
        </p>
      </section>
      <div className=" py-16">
        <section className="mx-auto max-w-7xl px-4 2xl:px-0 ">
          <h2 className="text-2xl font-medium pb-6 text-gray-700 dark:text-white">
            ¿Qué beneficios obtienes?
          </h2>
          <ul className="list-disc list-outside pl-4 ">
            <li className="text-gray-500 dark:text-gray-300 pb-4">
              Cancelación de deudas financieras, personales e incluso parte de
              las deudas públicas (Hacienda y Seguridad Social).
            </li>
            <li className="text-gray-500 dark:text-gray-300 pb-4">
              Paralización de embargos y llamadas de recobro.
            </li>
            <li className="text-gray-500 dark:text-gray-300 pb-4">
              Posibilidad de conservar tu vivienda o vehículo.
            </li>
            <li className="text-gray-500 dark:text-gray-300 pb-4">
              Fin de la presión de bancos, financieras y acreedores.
            </li>
            <li className="text-gray-500 dark:text-gray-300 pb-4">
              Recuperación de tu tranquilidad y capacidad económica.
            </li>
          </ul>
        </section>
      </div>
      <div className="mx-auto max-w-7xl px-4 2xl:px-0">
        <CTA_Services_LSO />
      </div>

      <div className=" py-16">
        <section className="mx-auto max-w-7xl px-4 2xl:px-0 ">
          <h2 className="text-2xl font-medium pb-6 text-gray-700 dark:text-white">
            ¿Quién puede acogerse?
          </h2>
          <p className="text-gray-500 dark:text-gray-300 pb-4">
            Pueden acogerse a la Ley de la Segunda Oportunidad personas que:
          </p>
          <ul className="list-disc list-outside pl-4 ">
            <li className="text-gray-500 dark:text-gray-300 pb-4">
              Estén en situación de insolvencia (no pueden pagar sus deudas)
            </li>
            <li className="text-gray-500 dark:text-gray-300 pb-4">
              Hayan actuado de buena fe (no haber ocultado bienes ni generado
              deuda con mala intención)
            </li>
            <li className="text-gray-500 dark:text-gray-300 pb-4">
              No hayan sido condenadas por delitos económicos graves en los
              últimos 10 años
            </li>
          </ul>
        </section>
      </div>
      <div className="mx-auto max-w-7xl px-4 2xl:px-0 mb-16">
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

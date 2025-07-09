import React from "react";
import HeroServices from "@/components/services/hero";
import Accordion from "@/components/layout/accordion";
import CTA_Services_LSO from "@/components/services/cta/lso";
import LatestPosts from "@/components/services/latestPosts";
import { LSO_FAQ } from "@/lib/data";
import LSO_Beneficios from "./components/lso-beneficios";
import LSO_QueEs from "./components/lso-que-es";
import LSO_QueDeudas from "./components/lso-que-deudas";
import LSO_Quien from "./components/lso-quien";
import LSO_ComoFunciona from "./components/lso-como-funciona";
import LSO_Solvify from "./components/lso-solvify";
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
      <LSO_QueEs />
      <LSO_Beneficios />
      <LSO_Quien />
      <LSO_QueDeudas />{" "}
      <div className="mx-auto max-w-7xl px-4 2xl:px-0">
        <CTA_Services_LSO />
      </div>
      <LSO_ComoFunciona />
      <LSO_Solvify />
      <div className="mx-auto max-w-7xl px-4 2xl:px-0 my-16">
        <h2 className="text-3xl font-semibold pb-6 text-gray-700 dark:text-white">
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

import React from "react";
import HeroServices from "@/components/services/hero";
import CTA_Services_NEGO from "@/components/services/cta/nego";
import type { Metadata } from "next";
import Accordion from "@/components/layout/accordion";
import { NEGO_FAQ } from "@/lib/data";

export const metadata: Metadata = {
  title: "Negociación de deudas | Solvify",
  description:
    "Reduce tus deudas negociando directamente con tus acreedores. En Solvify conseguimos acuerdos legales que se adaptan a tu capacidad de pago. Consulta gratuita.",
};

const NegociacionDeDeudasPage = () => {
  return (
    <div>
      <HeroServices
        title="Negociación de deuda"
        description="Intermediación con entidades bancarias y financieras con el objetivo de conseguir descuentos sobre el total de tus deudas."
        image="/services-negociacion-deuda.webp"
        link="/formulario/negociacion-de-deuda"
        hasAction={true}
        buttonText="Realizar estudio gratuito"
      />
      <section className="mx-auto max-w-5xl px-4 2xl:px-0 py-12">
        <h2 className="text-2xl font-medium pb-6 text-gray-700 dark:text-white">
          ¿Qué es la negociación de deudas?
        </h2>
        <p className=" text-gray-500 dark:text-gray-300 text-lg">
          En Solvify te ayudamos a reducir y reestructurar tus deudas mediante
          negociación directa con bancos, financieras y acreedores. Sin procesos
          judiciales, sin juicios y sin comprometer tu patrimonio.
        </p>
      </section>
      <div className=" pb-12">
        <section className="mx-auto max-w-5xl px-4 2xl:px-0 ">
          <h2 className="text-2xl font-medium pb-6 text-gray-700 dark:text-white">
            ¿Qué beneficios obtienes?
          </h2>
          <ul className="list-disc list-outside pl-4 text-lg">
            <li className="text-gray-500 dark:text-gray-300 pb-4">
              Reducción significativa del total adeudado.
            </li>
            <li className="text-gray-500 dark:text-gray-300 pb-4">
              Aplazamientos y planes de pago personalizados.
            </li>
            <li className="text-gray-500 dark:text-gray-300 pb-4">
              Evita embargos y recobros agresivos.
            </li>
          </ul>
        </section>
      </div>
      <div className=" pb-12">
        <section className="mx-auto max-w-5xl px-4 2xl:px-0 ">
          <h2 className="text-2xl font-medium pb-6 text-gray-700 dark:text-white">
            ¿Qué deudas se pueden negociar?
          </h2>
          <ul className="list-disc list-outside pl-4 text-lg">
            <li className="text-gray-500 dark:text-gray-300 pb-4">
              Préstamos personales.
            </li>
            <li className="text-gray-500 dark:text-gray-300 pb-4">
              Tarjetas de crédito o créditos rápidos.
            </li>
            <li className="text-gray-500 dark:text-gray-300 pb-4">
              Deudas con proveedores (autónomos).
            </li>
          </ul>
        </section>
      </div>
      <div className=" pb-12">
        <section className="mx-auto max-w-5xl px-4 2xl:px-0 ">
          <h2 className="text-2xl font-medium pb-6 text-gray-700 dark:text-white">
            ¿Cómo funciona?
          </h2>
          <ul className="list-disc list-outside pl-4 text-lg">
            <li className="text-gray-500 dark:text-gray-300 pb-4">
              Analizamos tu situación económica.
            </li>
            <li className="text-gray-500 dark:text-gray-300 pb-4">
              Proponemos un plan realista a tus acreedores.
            </li>
            <li className="text-gray-500 dark:text-gray-300 pb-4">
              Negociamos condiciones viables y lo gestionamos todo.
            </li>
          </ul>
        </section>
      </div>
      <div className="mx-auto max-w-5xl px-4 2xl:px-0 pb-16">
        <CTA_Services_NEGO />
      </div>{" "}
      <div className="mx-auto max-w-5xl px-4 2xl:px-0 mb-16">
        <h2 className="text-3xl font-semibold pb-6 text-gray-700 dark:text-white">
          Preguntas frecuentes
        </h2>
        <Accordion faqs={NEGO_FAQ} />
      </div>
    </div>
  );
};

export default NegociacionDeDeudasPage;

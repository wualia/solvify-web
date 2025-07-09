import React from "react";
import HeroQuienesSomos from "@/components/about-us/hero";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quienes somos | Solvify",
  description:
    "Solvify es  una legaltech especializada en la cancelación de deudas personales y en la defensa de los derechos de las personas frente a situaciones de sobreendeudamiento.",
};

const QuienesSomos = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 2xl:px-0">
      <HeroQuienesSomos />
      <div>
        <section className="pt-8 mx-auto max-w-5xl">
          <p className="text-gray-500 dark:text-gray-300 text-lg">
            Nuestro equipo fundador está compuesto por abogados con más de 10
            años de experiencia en derecho bancario y concursal, junto a
            ingenieros informáticos que han desarrollado soluciones tecnológicas
            para hacer el proceso más ágil, eficiente y accesible.
          </p>
        </section>
        <section className="pt-16 mx-auto max-w-5xl">
          <h2 className="text-3xl font-semibold pb-6 text-gray-700 dark:text-white">
            Qué ofrecemos
          </h2>

          <p className="text-gray-500 dark:text-gray-300 text-lg pb-4">
            Ofrecemos soluciones legales adaptadas a la realidad económica de
            nuestros clientes. Sabemos que quien atraviesa dificultades
            financieras necesita no solo apoyo jurídico, sino también
            comprensión, empatía y precios justos. Por eso, en Solvify:
          </p>
          <ul className="list-disc list-outside pl-4 text-lg">
            <li className="text-gray-500 dark:text-gray-300 pb-4">
              Adaptamos nuestros honorarios a cada caso, considerando las
              limitaciones económicas de quienes nos contactan.
            </li>
            <li className="text-gray-500 dark:text-gray-300 pb-4">
              Priorizamos la claridad, la honestidad y la cercanía, para que
              cada persona entienda su situación y sus opciones legales.
            </li>
            <li className="text-gray-500 dark:text-gray-300 pb-4">
              Apostamos por la tecnología para reducir tiempos, costes y
              trámites innecesarios.
            </li>
          </ul>
        </section>
        <section className="pt-16 mx-auto max-w-5xl">
          <h2 className="text-3xl font-semibold pb-6 text-gray-700 dark:text-white">
            Nuestra especialidad: Ley de la Segunda Oportunidad
          </h2>

          <p className="text-gray-500 dark:text-gray-300 text-lg pb-4">
            Somos expertos en la Ley de la Segunda Oportunidad, un proceso legal
            que permite reducir, reestructurar o cancelar de forma definitiva
            las deudas de particulares y autónomos. Este procedimiento está
            pensado para quienes, habiendo actuado de buena fe, no pueden hacer
            frente a sus obligaciones financieras.
          </p>
          <p className="text-gray-500 dark:text-gray-300 text-lg pb-4">
            Gracias a nuestro enfoque digital, hemos logrado automatizar y
            optimizar cada fase del procedimiento, reduciendo los tiempos de
            tramitación y mejorando los resultados. Acompañamos a nuestros
            clientes durante todo el proceso, desde el análisis inicial hasta la
            resolución judicial.
          </p>
        </section>
        <section className="pt-16 mx-auto max-w-5xl">
          <h2 className="text-3xl font-semibold pb-6 text-gray-700 dark:text-white">
            Otros servicios legales
          </h2>

          <p className="text-gray-500 dark:text-gray-300 text-lg pb-4">
            Además de la Ley de la Segunda Oportunidad, en Solvify gestionamos:
          </p>
          <ul className="list-disc list-outside pl-4 text-lg">
            <li className="text-gray-500 dark:text-gray-300 pb-4">
              Reclamaciones por tarjetas de crédito abusivas (conocidas como
              tarjetas “revolving”), ayudando a los consumidores a recuperar lo
              pagado de más.
            </li>
            <li className="text-gray-500 dark:text-gray-300 pb-4">
              Asesoría mercantil para empresas, brindando soluciones legales
              personalizadas para conflictos societarios, refinanciaciones,
              concursos de acreedores y más.
            </li>
          </ul>
        </section>
        <section className="pt-16 mx-auto max-w-5xl">
          <h2 className="text-3xl font-semibold pb-6 text-gray-700 dark:text-white">
            Nuestra misión
          </h2>

          <p className="text-gray-500 dark:text-gray-300 text-lg pb-4">
            Nuestra razón de ser es clara: ayudar a personas, familias y
            autónomos a salir del sobreendeudamiento, recuperar la estabilidad
            económica y retomar el control de su vida financiera. No solo
            buscamos cancelar deudas, sino también educar y acompañar a nuestros
            clientes para que puedan tomar decisiones más seguras y sostenibles
            en el futuro.
          </p>
        </section>
        <section className="pt-16 mx-auto max-w-5xl">
          <h2 className="text-3xl font-semibold pb-6 text-gray-700 dark:text-white">
            Nuestros valores
          </h2>
          <p className="text-gray-500 dark:text-gray-300 text-lg pb-4">
            En Solvify trabajamos con principios firmes que nos definen y nos
            diferencian:
          </p>{" "}
          <ul className="list-disc list-outside pl-4 text-lg">
            <li className="text-gray-500 dark:text-gray-300 pb-4">
              <span className="font-semibold text-gray-700 dark:text-white">
                Compromiso:
              </span>{" "}
              luchamos por los derechos de nuestros clientes como si fueran
              propios.
            </li>
            <li className="text-gray-500 dark:text-gray-300 pb-4">
              <span className="font-semibold text-gray-700 dark:text-white">
                Transparencia:
              </span>{" "}
              explicamos cada paso con claridad, sin letra pequeña ni promesas
              vacías.
            </li>
            <li className="text-gray-500 dark:text-gray-300 pb-4">
              <span className="font-semibold text-gray-700 dark:text-white">
                Innovación:
              </span>{" "}
              aplicamos tecnología para mejorar procesos legales complejos.
            </li>
            <li className="text-gray-500 dark:text-gray-300 pb-4">
              <span className="font-semibold text-gray-700 dark:text-white">
                Cercanía:
              </span>{" "}
              tratamos a cada persona con la empatía y atención que merece.
            </li>
          </ul>
        </section>{" "}
        <section className="py-16 mx-auto max-w-5xl">
          <h2 className="text-3xl font-semibold pb-6 text-gray-700 dark:text-white">
            ¿Dónde estamos?
          </h2>

          <p className="text-gray-500 dark:text-gray-300 text-lg pb-4">
            Tenemos nuestra sede física en Barcelona, pero ofrecemos atención en
            toda España principalmente por teléfono y online, lo que nos permite
            adaptarnos al ritmo de vida y las necesidades de nuestros clientes.
            También ofrecemos citas presenciales bajo demanda en nuestra oficina
            para quienes prefieren un trato más directo.
          </p>
        </section>
      </div>
    </div>
  );
};

export default QuienesSomos;

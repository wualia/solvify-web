"use client";

import { Fast, Cheap, Team, Easy, Support, Multiple } from "@/components/icons";
import React from "react";
import { motion } from "motion/react";

const HomeWhy = () => {
  const container = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, transform: "translateY(20px)" },
    show: {
      opacity: 1,
      transform: "translateY(0px)",
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 2xl:px-0">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl pb-4 font-medium text-gray-700">
            Por qué Solvify
          </h2>
          <p className=" text-gray-500 dark:text-gray-300 font-light leading-7">
            Tenemos la misión de hacer la vida de nuestros clientes más fácil y
            por ello ofrecemos una oferta sin competencia.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-24 text-gray-500 dark:text-gray-300 font-light"
        >
          <motion.div variants={item}>
            <div className="flex flex-col space-y-2 lg:space-y-0">
              <Fast className="text-primary h-10 w-10" />
              <h4 className="text-gray-700 font-medium text-lg dark:text-white pt-4">
                Mayor Rapidez
              </h4>
            </div>

            <p className="pt-4">
              Somos los más rápidos en el mercado en presentar la demanda.
            </p>
          </motion.div>
          <motion.div variants={item}>
            <div className="flex flex-col space-y-2 lg:space-y-0">
              <Cheap className="text-primary h-10 w-10" />
              <h4 className="text-gray-700 font-medium text-lg  dark:text-white pt-4">
                Precios Competitivos
              </h4>
            </div>

            <p className="pt-4 ">
              Los precios más competitivos y con flexibilidad de pago.
            </p>
          </motion.div>
          <motion.div variants={item}>
            <div className="flex flex-col space-y-2 lg:space-y-0">
              <Team className="text-primary h-10 w-10" />
              <h4 className="text-gray-700 font-medium text-lg  dark:text-white pt-4">
                Mejor equipo
              </h4>
            </div>

            <p className="pt-4 ">
              Accede al mejor equipo de profesionales en el ámbito legal.
            </p>
          </motion.div>
          <motion.div variants={item}>
            <div className="flex flex-col space-y-2 lg:space-y-0">
              <Easy className="text-primary h-10 w-10" />
              <h4 className="text-gray-700 font-medium text-lg  dark:text-white pt-4">
                Facilidad uso
              </h4>
            </div>

            <p className="pt-4 ">
              La plataforma más fácil de usar, creada para nuestros clientes.
            </p>
          </motion.div>
          <motion.div variants={item}>
            <div className="flex flex-col space-y-2 lg:space-y-0">
              <Support className="text-primary h-10 w-10" />
              <h4 className="text-gray-700 font-medium text-lg  dark:text-white pt-4">
                Respuesta inmediata
              </h4>
            </div>

            <p className="pt-4 ">
              Respuesta inmediata a través de nuestra app móvil.
            </p>
          </motion.div>
          <motion.div variants={item}>
            <div className="flex flex-col space-y-2 lg:space-y-0">
              <Multiple className="text-primary h-10 w-10" />
              <h4 className="text-gray-700 font-medium text-lg  dark:text-white pt-4">
                Multiples servicios
              </h4>
            </div>

            <p className="pt-4 ">
              Oferta global para solventar definitivamente tus problemas.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HomeWhy;

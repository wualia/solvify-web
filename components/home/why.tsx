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
    <div className="pb-20 px-4 2xl:px-0">
      <div className="mx-auto max-w-7xl bg-black p-16 rounded-xl">
        <div className="mx-auto max-w-3xl mb-16 text-center">
          <h2 className="text-3xl pb-4 font-medium text-white">
            Por qué Solvify
          </h2>
          <p className=" text-gray-200 font-light leading-7">
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
            <div className="flex flex-col space-y-2 lg:space-y-0 text-center">
              <Fast className="text-white h-10 w-10 mx-auto" />
              <h4 className="text-white font-medium text-lg dark:text-white pt-4">
                Mayor Rapidez
              </h4>
            </div>

            <p className="pt-4 text-center text-gray-200">
              Somos los más rápidos en el mercado en presentar la demanda.
            </p>
          </motion.div>
          <motion.div variants={item}>
            <div className="flex flex-col space-y-2 lg:space-y-0 text-center">
              <Cheap className="text-white h-10 w-10 mx-auto" />
              <h4 className="text-white font-medium text-lg  dark:text-white pt-4">
                Precios Competitivos
              </h4>
            </div>

            <p className="pt-4 text-center text-gray-200">
              Los precios más competitivos y con flexibilidad de pago.
            </p>
          </motion.div>
          <motion.div variants={item}>
            <div className="flex flex-col space-y-2 lg:space-y-0 text-center">
              <Team className="text-white h-10 w-10 mx-auto" />
              <h4 className="text-white font-medium text-lg  dark:text-white pt-4">
                Mejor equipo
              </h4>
            </div>

            <p className="pt-4 text-center text-gray-200">
              Accede al mejor equipo de profesionales en el ámbito legal.
            </p>
          </motion.div>
          <motion.div variants={item}>
            <div className="flex flex-col space-y-2 lg:space-y-0 text-center">
              <Easy className="text-white h-10 w-10 mx-auto" />
              <h4 className="text-white font-medium text-lg  dark:text-white pt-4">
                Facilidad uso
              </h4>
            </div>

            <p className="pt-4 text-center text-gray-200">
              La plataforma más fácil de usar, creada para nuestros clientes.
            </p>
          </motion.div>
          <motion.div variants={item}>
            <div className="flex flex-col space-y-2 lg:space-y-0 text-center">
              <Support className="text-white h-10 w-10 mx-auto" />
              <h4 className="text-white font-medium text-lg  dark:text-white pt-4">
                Respuesta inmediata
              </h4>
            </div>

            <p className="pt-4 text-center text-gray-200">
              Respuesta inmediata a través de nuestra app móvil.
            </p>
          </motion.div>
          <motion.div variants={item}>
            <div className="flex flex-col space-y-2 lg:space-y-0 text-center">
              <Multiple className="text-white h-10 w-10 mx-auto" />
              <h4 className="text-white font-medium text-lg  dark:text-white pt-4">
                Multiples servicios
              </h4>
            </div>

            <p className="pt-4 text-center text-gray-200">
              Oferta global para solventar definitivamente tus problemas.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HomeWhy;

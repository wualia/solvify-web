"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { useUiStore } from "@/store/ui";
import { useRouter } from "next/navigation";
import { CircleXIcon } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

const Mobile = () => {
  const { setWebMobileOpen, webMobileOpen } = useUiStore();
  const router = useRouter();

  const goTo = (path: string) => {
    router.push(path);
    setWebMobileOpen();
  };

  const modalVariants = {
    visible: { opacity: 1, transition: { when: "beforeChildren" } },
    hidden: { opacity: 0, transition: { when: "afterChildren" } },
  };

  return (
    <AnimatePresence>
      {webMobileOpen && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={modalVariants}
          layout
          className="bg-black z-50 fixed inset-0 flex flex-col min-h-dvh"
        >
          <div className="flex justify-between items-center border-b border-white/20 px-4 py-5">
            <p className="text-gray-300 font-medium uppercase text-sm">Menú</p>
            <div onClick={() => setWebMobileOpen()} className="text-white">
              <CircleXIcon className="w-6 h-6 text-gray-300" />
            </div>
          </div>
          <ul className="text-white flex-1 px-4 py-8 md:py-24 flex flex-col justify-between">
            <li
              onClick={() => goTo("/")}
              className="text-xl font-medium tracking-wider"
            >
              Inicio
            </li>
            <li className="text-xl font-medium tracking-wider">
              Servicios{" "}
              <ul className="pt-4 text-gray-300 text-base">
                <li
                  onClick={() => goTo("/servicios/ley-de-segunda-oportunidad")}
                  className="border-b border-white/10 py-4"
                >
                  Ley de segunda oportunidad
                </li>
                <li
                  onClick={() => goTo("/servicios/negociacion-de-deuda")}
                  className="border-b border-white/10 py-4"
                >
                  Negociación de deuda
                </li>
                <li
                  onClick={() => goTo("/servicios/tarjetas-revolving")}
                  className="border-b border-white/10 py-4"
                >
                  Tarjetas revolving
                </li>
                <li
                  onClick={() => goTo("/servicios/cartel-coches")}
                  className="border-b border-white/10 py-4"
                >
                  Cártel de coches
                </li>
                <li
                  onClick={() => goTo("/servicios/concurso-expres")}
                  className="border-b border-white/10 py-4"
                >
                  Concurso exprés
                </li>
              </ul>
            </li>

            <li
              onClick={() => goTo("/blog")}
              className=" text-xl font-medium tracking-wider"
            >
              Blog
            </li>
            <li
              onClick={() => goTo("/contacto")}
              className=" text-xl font-medium tracking-wider"
            >
              Contacto
            </li>
          </ul>
          <div className="px-4 mb-8">
            <Button
              onClick={() => router.push("https://app.solvify.es/cliente")}
              className="w-full py-5 bg-white text-black"
            >
              Zona clientes
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Mobile;

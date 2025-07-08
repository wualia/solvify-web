"use client";

import { motion } from "motion/react";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const ConcursoExpres = () => {
  return (
    <div className="py-10 md:py-20">
      <div className="grid lg:grid-cols-2 gap-8 md:gap-16 max-w-7xl mx-auto items-center overflow-hidden px-4 2xl:px-0">
        <motion.div
          initial={{ opacity: 0, transform: "translateX(-50px)" }}
          whileInView={{
            opacity: 1,
            transform: "translateX(0px)",
            transition: { ease: "easeOut", duration: 0.5 },
          }}
          className=""
        >
          <div className="relative h-[240px] md:h-[400px] rounded-lg overflow-hidden">
            <div className="absolute bg-gradient-to-b from-black/0 to-black/30 inset-0 h-full w-full z-30" />
            <Image
              src="/services-concurso-expres.webp"
              width={1920}
              height={1080}
              alt="Libertad financiera con Solvify"
              className="object-cover h-full w-full z-20 inset-0"
            />
          </div>
        </motion.div>

        <div className="">
          <div className="flex items-start space-x-4">
            <h3 className="text-gray-700 dark:text-white text-2xl font-medium">
              Concurso exprés
            </h3>
          </div>
          <p className="pt-4 pb-4 flex-1 text-gray-500 dark:text-gray-300">
            Ofrecemos soluciones legales para cerrar empresas o actividades sin
            activos de forma rápida, ordenada y sin arrastrar responsabilidades
            personales. Ideal para autónomos y sociedades inactivas.
          </p>
          <ul className="mt-4 mb-8 space-y-4">
            <li className="flex items-start gap-2">
              <div className="bg-primary rounded-full p-1">
                <Check className="w-3 h-3 text-white dark:text-black" />
              </div>
              <span className="text-gray-500 dark:text-gray-300">
                Cancelación de actividad sin necesidad de liquidación compleja.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <div className="bg-primary rounded-full p-1 ">
                <Check className="w-3 h-3 text-white dark:text-black" />
              </div>
              <span className="text-gray-500 dark:text-gray-300">
                Exoneración rápida si no hay bienes ni empleados.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <div className="bg-primary rounded-full p-1">
                <Check className="w-3 h-3 text-white dark:text-black" />
              </div>
              <span className="text-gray-500 dark:text-gray-300">
                Evita responsabilidad futura del administrador.
              </span>
            </li>
          </ul>
          <div className="flex flex-col md:flex-row gap-4">
            <Button
              asChild
              className=" w-full md:w-auto bg-black dark:bg-white dark:text-black"
              size="lg"
            >
              <Link href="/servicios/concurso-expres">Saber más</Link>
            </Button>
            {/* <Button
              asChild
              className=" w-full md:w-auto"
              variant="outline"
              size="lg"
            >
              <Link href="/servicios/ley-de-segunda-oportunidad">Ver más</Link>
            </Button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConcursoExpres;

"use client";

import { motion } from "motion/react";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const CartelCoches = () => {
  return (
    <div className="py-10 md:py-20">
      <div className="grid lg:grid-cols-2 gap-8 md:gap-16  max-w-7xl mx-auto items-center overflow-hidden px-4 2xl:px-0">
        <div className="order-last md:order-first">
          <div className="">
            <div className="flex items-start space-x-4">
              <h3 className="text-gray-700 dark:text-white text-2xl font-medium">
                Cartel de coches
              </h3>
            </div>
            <p className="pt-4 pb-4 flex-1 text-gray-500 dark:text-gray-300">
              Si compraste un coche entre 2006 y 2013, puedes reclamar una
              indemnización por prácticas ilegales de los fabricantes. En
              Solvify gestionamos todo el proceso sin coste inicial.
            </p>
            <ul className="mt-4 mb-8 space-y-4">
              <li className="flex items-start gap-3">
                <div className="bg-primary rounded-full p-0.5 mt-1">
                  <Check className="w-3 h-3 text-white dark:text-black" />
                </div>
                <span className="text-gray-500 dark:text-gray-300">
                  Hasta 15 % de indemnización sobre el precio del vehículo.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-primary rounded-full p-0.5 mt-1">
                  <Check className="w-3 h-3 text-white dark:text-black" />
                </div>
                <span className="text-gray-500 dark:text-gray-300">
                  Tramitación 100 % online y sin adelantar dinero.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-primary rounded-full p-0.5 mt-1">
                  <Check className="w-3 h-3 text-white dark:text-black" />
                </div>
                <span className="text-gray-500 dark:text-gray-300">
                  Aceptamos turismos, furgonetas y vehículos de empresa.
                </span>
              </li>
            </ul>

            <Button
              asChild
              className=" w-full md:w-auto bg-black dark:bg-white dark:text-black"
              size="lg"
            >
              <Link href="/servicios/cartel-coches">Saber más</Link>
            </Button>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, transform: "translateX(50px)" }}
          whileInView={{
            opacity: 1,
            transform: "translateX(0px)",
            transition: { ease: "easeOut", duration: 0.5 },
          }}
          className=""
        >
          <div className="relative h-[200px] md:h-[400px] rounded-lg overflow-hidden">
            <div className="absolute bg-gradient-to-b from-black/0 to-black/30 inset-0 h-full w-full z-30" />
            <Image
              src="/services-cartel-coches.webp"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              alt="Libertad financiera con Solvify"
              className="object-cover h-full w-full z-20 inset-0"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CartelCoches;

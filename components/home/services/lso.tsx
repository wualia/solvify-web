"use client";

import { motion } from "motion/react";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const LeySegundaOportunidad = () => {
  return (
    <div className="bg-white dark:bg-card py-20">
      <div className="grid lg:grid-cols-2 gap-8 md:gap-16 dark:bg-card max-w-7xl mx-auto items-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, transform: "translateX(-50px)" }}
          whileInView={{
            opacity: 1,
            transform: "translateX(0px)",
            transition: { ease: "easeOut", duration: 0.5 },
          }}
          className="px-4 md:px-0"
        >
          <div className="relative h-[360px] md:h-[400px] rounded-lg overflow-hidden">
            <div className="absolute bg-gradient-to-b from-black/0 to-black/70 inset-0 h-full w-full z-30" />
            <Image
              src="/services-lso.webp"
              width={1920}
              height={1080}
              alt="Libertad financiera con Solvify"
              className="object-cover h-full w-full z-20 inset-0"
            />
          </div>
        </motion.div>

        <div className="pr-2">
          <div className="flex items-start space-x-4">
            <h3 className="text-gray-700 dark:text-white text-2xl font-medium">
              Ley de Segunda Oportunidad
            </h3>
          </div>
          <p className="pt-4 pb-4 flex-1 text-gray-500">
            A través de la Segunda Oportunidad eliminamos tus deudas personales
            de forma rápida y automática.
          </p>

          <Button asChild className=" w-full md:w-auto bg-black" size="lg">
            <Link href="/servicios/ley-de-segunda-oportunidad">Ver más</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LeySegundaOportunidad;

"use client";

import { motion } from "motion/react";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const NegociacionDeudas = () => {
  return (
    <div className="py-20">
      <div className="grid lg:grid-cols-2 gap-8 md:gap-16  max-w-7xl mx-auto items-center overflow-hidden">
        <div className="order-last md:order-first">
          <div className=" pl-2">
            <div className="flex items-start space-x-4">
              <h3 className="text-gray-700 dark:text-white text-2xl font-medium">
                Negociación de deudas
              </h3>
            </div>
            <p className="pt-4 pb-4 flex-1 text-gray-500">
              Estás pagando la deuda de tu tarjeta de crédito, pero parece que
              nunca terminas de pagarlo? aquí hay trampa!
            </p>
            <Button asChild className=" w-full md:w-auto bg-black" size="lg">
              <Link href="/servicios/negociacion-de-deudas">Ver más</Link>
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
          className="px-4 md:px-0"
        >
          <div className="relative h-[360px] md:h-[400px] rounded-lg overflow-hidden">
            <div className="absolute bg-gradient-to-b from-black/0 to-black/70 inset-0 h-full w-full z-30" />
            <Image
              src="/services-negociacion-deuda.webp"
              width={1920}
              height={1080}
              alt="Libertad financiera con Solvify"
              className="object-cover h-full w-full z-20 inset-0"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NegociacionDeudas;

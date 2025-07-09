"use client";

import { motion } from "framer-motion";
import React from "react";

import { cn } from "@/lib/utils";

import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const LSO_ComoFunciona = () => {
  const currentPhase = 4;

  const timelinePhases = [
    {
      id: 0,
      date: "January 15, 2024",
      title: "Paso 1",
      description: "Recolección de documentación",
    },
    {
      id: 1,
      date: "March 30, 2024",
      title: "Paso 2",
      description: "Presentación de solicitud",
    },
    {
      id: 2,
      date: "June 15, 2024",
      title: "Paso 3",
      description: "Tramitación en el juzgado",
    },
    {
      id: 3,
      date: "September 1, 2024",
      title: "Paso 4",
      description: "Concesión de la exoneración",
    },
  ];

  return (
    <section className="py-16 mx-auto max-w-7xl px-4 2xl:px-0">
      <div className="container flex flex-col">
        <h2 className="mb-10 text-3xl font-semibold tracking-tighter text-gray-700 dark:text-white">
          ¿ Cómo funciona el proceso ?
        </h2>
        <Card className="relative w-full border-none shadow-none md:py-16 overflow-hidden">
          <CardContent className="p-4">
            <div className="relative flex flex-col items-center md:mt-12">
              <Separator className="absolute -top-8 left-0 hidden md:block" />
              {currentPhase && (
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{
                    width: `${(currentPhase / timelinePhases.length) * 104}%`,
                  }}
                  transition={{ ease: "easeOut", duration: 0.5 }}
                  className={cn(
                    "absolute -top-[32px] left-0 hidden h-0.5 bg-foreground md:block"
                  )}
                />
              )}

              <div className="grid gap-6 md:grid-cols-4">
                {timelinePhases.map((phase, index) => (
                  <div key={phase.id} className="relative space-y-2">
                    <Separator
                      orientation="vertical"
                      className="absolute top-6 left-0 block md:hidden"
                    />
                    {index == 0 && (
                      <motion.div
                        initial={{ height: 0 }}
                        whileInView={{
                          height: currentPhase * 112,
                        }}
                        transition={{ ease: "easeOut", duration: 0.5 }}
                        className={cn(
                          "absolute left-0 z-10 w-0.5 bg-foreground md:hidden"
                        )}
                      />
                    )}
                    <div className="absolute top-0 -left-[9px] z-10 mb-5 flex size-5 items-center justify-center rounded-full bg-foreground p-1 md:-top-10 md:left-0">
                      <div className="size-full rounded-full bg-background" />
                    </div>

                    <div className="pl-7 md:pl-0">
                      {/* <p className="text-sm text-muted-foreground">
                        {phase.date}
                      </p> */}
                      <h3 className="text-2xl font-semibold text-gray-700 dark:text-white pb-2">
                        {phase.title}
                      </h3>
                      <p className="text-gray-500 dark:text-gray-300 text-lg">
                        {phase.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default LSO_ComoFunciona;

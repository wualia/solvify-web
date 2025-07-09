import React from "react";

import {
  CancelacionLegal,
  FinEmbargos,
  EliminacionMorosidad,
  RecuperacionEstabilidad,
  PosibilidadEmprender,
} from "@/components/icons";

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface Feature17Props {
  heading?: string;
  subheading?: string;
  features?: Feature[];
}

const LSO_Beneficios = ({
  heading = "¿Qué beneficios tiene?",
  subheading = "Features",
  features = [
    {
      title: "Cancelación legal de las deudas",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, accusantium quam. Temporibus quae quos deserunt!",
      icon: <CancelacionLegal className="size-10 md:size-12" />,
    },
    {
      title: "Fin de los embargos y llamadas de acoso",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, accusantium quam. Temporibus quae quos deserunt!",
      icon: <FinEmbargos className="size-10 md:size-12" />,
    },
    {
      title: "Eliminación de los registros morosos",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, accusantium quam. Temporibus quae quos deserunt!",
      icon: <EliminacionMorosidad className="size-10 md:size-12" />,
    },
    {
      title: "Recuperación de la estabilidad financiera",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, accusantium quam. Temporibus quae quos deserunt!",
      icon: <RecuperacionEstabilidad className="size-10 md:size-12" />,
    },
    {
      title: "Posibilidad de empezar de cero",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, accusantium quam. Temporibus quae quos deserunt!",
      icon: <PosibilidadEmprender className="size-10 md:size-12" />,
    },
  ],
}: Feature17Props) => {
  return (
    <section className="pt-16">
      <div className="container mx-auto max-w-7xl px-4 2xl:px-0">
        <h2 className="text-3xl font-semibold lg:text-3xl text-gray-700 dark:text-white pb-6">
          {heading}
        </h2>
        <p className="text-gray-500 dark:text-gray-300 text-lg">
          Acogerse a esta ley supone un antes y un después para miles de
          personas cada año
        </p>
        <div className="mx-auto grid gap-x-6 gap-y-8 md:grid-cols-2 lg:grid-cols-5 md:gap-y-6 mt-10">
          {features.map((feature, idx) => (
            <div
              className="flex items-center gap-6 rounded-lg md:block p-5 bg-card"
              key={idx}
            >
              <span className="md:mb-8 flex size-10 shrink-0 items-center justify-center rounded-full  text-primary md:size-14">
                {feature.icon}
              </span>
              <div>
                <h3 className="font-medium md:mb-2 md:text-lg text-gray-700 dark:text-white  text-left">
                  {feature.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LSO_Beneficios;

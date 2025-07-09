import {
  BoxesIcon,
  CheckIcon,
  XIcon,
  HeadphonesIcon,
  PuzzleIcon,
  ShieldCheckIcon,
} from "lucide-react";
import { Fragment } from "react";

import { Separator } from "@/components/ui/separator";

const cards = [
  {
    title: "Deudas que se pueden exonerar",
    description:
      "Discover our comprehensive suite of features designed to enhance workflows.",
    icon: BoxesIcon,
    features: [
      "Préstamos personales",
      "Tarjetas de crédito y revolving",
      "Microcréditos",
      "Deudas bancarias",
      "Deudas con proveedores",
      "Embargos judiciales",
      "Parte de las deudas con Hacienda y Seguridad Social",
    ],
    type: "positive",
  },
  {
    title: "Deudas que no se cancelan",
    description:
      "Enterprise-grade security features to keep your data safe and protected.",
    icon: ShieldCheckIcon,
    features: [
      "Pensiones alimenticias (manutención de hijos)",
      "Multas penales",
      "Indemnizaciones por delitos",
      "Hipotecas (salvo que se entregue la vivienda)",
    ],
    type: "negative",
  },
];

const LSO_QueDeudas = () => {
  return (
    <section className="py-16 mx-auto max-w-7xl px-4 2xl:px-0">
      <div className="container">
        <div className="mx-auto grid gap-9 md:grid-cols-3">
          <div className="md:max-w-md pt-8">
            <h2 className="text-3xl font-semibold pb-6 text-gray-700 dark:text-white leading-tight">
              ¿Qué deudas se pueden exonerar?
            </h2>
            <p className="text-gray-500 dark:text-gray-300 text-lg">
              La ley permite cancelar la mayoría de deudas, a excepción de las
              deudas con Hacienda y Seguridad Social.
            </p>
          </div>
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="flex flex-col gap-8 rounded-xl bg-card p-9"
            >
              <div className="flex flex-col gap-6">
                <span className="flex size-10 items-center justify-center rounded-xl bg-primary">
                  <card.icon className="size-5 text-background" />
                </span>
                <div className="flex flex-col gap-2.5">
                  <h3 className="text-xl font-semibold">{card.title}</h3>
                </div>
              </div>
              <ul className="flex flex-col gap-3.5">
                {card.features.map((feature, idx) => (
                  <Fragment key={idx}>
                    <Separator />
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      {card.type === "positive" ? (
                        <CheckIcon className="size-4 shrink-0 text-primary" />
                      ) : (
                        <XIcon className="size-4 shrink-0 text-red-500" />
                      )}
                      {feature}
                    </li>
                  </Fragment>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LSO_QueDeudas;

"use client";

import { useFormStore } from "@/store/form";
import React, { useState, useEffect } from "react";
import PriceOptions from "./price-options";

const PlanDePagos = () => {
  const [summary, setSummary] = useState<any>([]);
  let totalDeudasConIntereses = 0;
  let totalDeudasConComision = 0;
  let totalComision = 0;

  const [total_deuda_intereses, set_total_deuda_intereses] = useState(0);
  const [total_deuda_negociada, set_total_deuda_negociada] = useState(0);
  const [total_ahorro, set_total_ahorro] = useState(0);
  const [total_porcentaje_ahorro, set_total_porcentaje_ahorro] = useState(0);
  const [total_comision, set_total_comision] = useState(0);

  const { creditors, comisionNegociacion } = useFormStore();

  useEffect(() => {
    setSummary([]);

    creditors.forEach((creditor: any) => {
      const importeConIntereses = creditor.total_contrato.toFixed(0);

      const importeConDescuento = (
        creditor.total_contrato *
        (1 - creditor.descuento / 100)
      ).toFixed(0);

      const diferencia =
        Number(importeConIntereses) - Number(importeConDescuento);

      const comision = (
        Number(diferencia) *
        (comisionNegociacion / 100)
      ).toFixed(0);

      const importeConComision = Number(importeConDescuento) + Number(comision);

      const ahorro = Number(importeConIntereses) - Number(importeConComision);

      const porcentaje_ahorro =
        (1 - Number(importeConComision) / Number(importeConIntereses)) * 100;

      totalDeudasConIntereses += Number(importeConIntereses);
      totalDeudasConComision += Number(importeConComision);
      totalComision += Number(comision);

      setSummary((summary: any) => [
        ...summary,
        {
          name: creditor.name,
          importe_con_intereses: importeConIntereses,
          importe_negociado: importeConComision,
          comision: comision,
          ahorro: ahorro,
          porcentaje_ahorro: porcentaje_ahorro,
        },
      ]);
    });

    set_total_deuda_intereses(totalDeudasConIntereses);
    set_total_deuda_negociada(totalDeudasConComision);
    set_total_ahorro(totalDeudasConIntereses - totalDeudasConComision);
    set_total_porcentaje_ahorro(
      (1 - totalDeudasConComision / totalDeudasConIntereses) * 100
    );

    set_total_comision(totalComision);
  }, [creditors]);

  return (
    <div className="mt-8">
      <p className="pb-4 pl-2 font-semibold">2. Resumen de los acreedores</p>
      <div className="border rounded-lg py-4 px-8 bg-white dark:bg-transparent">
        <div className="grid lg:grid-cols-3 text-gray-500 dark:text-gray-300 text-sm">
          <div className="text-center">
            <p className="font-semibold text-lg text-gray-700 dark:text-gray-300">
              {total_deuda_intereses.toLocaleString("es-AR")}€
            </p>
            <p className="text-muted-foreground">Deuda actual</p>
          </div>
          <div className="text-center">
            <p className="font-semibold text-lg text-gray-700 dark:text-gray-300">
              {total_deuda_negociada.toLocaleString("es-AR")}€
            </p>
            <p className="text-muted-foreground">Deuda negociada</p>
          </div>
          <div className="text-center relative">
            <div className="absolute top-0 right-0 bg-primary rounded-full py-1 px-2">
              <p className=" text-white dark:text-gray-300 font-bold">
                {total_porcentaje_ahorro.toLocaleString("es-AR", {
                  maximumFractionDigits: 1,
                })}
                %
              </p>
            </div>
            <p className="font-semibold text-lg text-gray-700 dark:text-gray-300">
              {total_ahorro.toLocaleString("es-AR")}€
            </p>
            <p className="text-muted-foreground">Ahorro total</p>
          </div>

          {/* <p className="text-right">
            {total_porcentaje_ahorro.toLocaleString("es-AR", {
              maximumFractionDigits: 1,
            })}
            %
          </p> */}
        </div>
      </div>
      <PriceOptions totalDeudasConComision={total_deuda_negociada} />
    </div>
  );
};

export default PlanDePagos;

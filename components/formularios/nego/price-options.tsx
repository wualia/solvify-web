"use client";

import { cn } from "@/lib/utils";
import { useFormStore } from "@/store/form";

import React, { useEffect } from "react";

const PriceOptions = ({ totalDeudasConComision }: any) => {
  const {
    setCuotaNegociacion,
    cuotaNegociacion,
    setNumCuotasNegociacion,
    numCuotasNegociacion,
  } = useFormStore();

  useEffect(() => {
    setNumCuotasNegociacion(
      Math.ceil(totalDeudasConComision / cuotaNegociacion)
    );
  }, [cuotaNegociacion]);

  const selectOption = (option: any) => {
    setCuotaNegociacion(option);
  };

  let options = [];

  for (let i = 1; i <= 7; i++) {
    switch (i) {
      case 1:
        if (totalDeudasConComision / 60 > 120) {
          options.push({
            cuota: Math.ceil(totalDeudasConComision / 60),
          });
        } else {
          options.push({
            cuota: 120,
          });
        }
        break;
      case 2:
        if (totalDeudasConComision / 60 > 120) {
          options.push({
            cuota: Math.ceil(totalDeudasConComision / 60) + 30,
          });
        } else {
          options.push({
            cuota: 150,
          });
        }
        break;
      case 3:
        if (totalDeudasConComision / 60 > 120) {
          options.push({
            cuota: Math.ceil(totalDeudasConComision / 60) + 60,
          });
        } else {
          options.push({
            cuota: 180,
          });
        }
        break;
      case 4:
        if (totalDeudasConComision / 60 > 120) {
          options.push({
            cuota: Math.ceil(totalDeudasConComision / 60) + 90,
          });
        } else {
          options.push({
            cuota: 210,
          });
        }
        break;
      case 5:
        if (totalDeudasConComision / 60 > 120) {
          options.push({
            cuota: Math.ceil(totalDeudasConComision / 60) + 120,
          });
        } else {
          options.push({
            cuota: 240,
          });
        }
        break;
      case 6:
        if (totalDeudasConComision / 60 > 120) {
          options.push({
            cuota: Math.ceil(totalDeudasConComision / 60) + 150,
          });
        } else {
          options.push({
            cuota: 270,
          });
        }
        break;
      case 7:
        if (totalDeudasConComision / 60 > 120) {
          options.push({
            cuota: Math.ceil(totalDeudasConComision / 60) + 180,
          });
        } else {
          options.push({
            cuota: 300,
          });
        }
        break;
    }
  }

  return (
    <div className="mt-8">
      <p className="pb-4 pl-2 font-semibold">
        Selecciona la cuota mensual que mejor se adapte a tu situación
      </p>
      <div className="border rounded-lg p-4 bg-white dark:bg-transparent">
        <div className=" flex justify-between mt-4 space-x-4">
          {options.map((option: any, index: number) => (
            <div
              key={index}
              className={cn(
                option.cuota == cuotaNegociacion
                  ? "bg-primary text-white"
                  : "bg-gray-50 dark:bg-background",
                "border rounded-lg py-2 px-8 text-sm font-semibold cursor-pointer"
              )}
              onClick={() => selectOption(option.cuota)}
            >
              {option.cuota}€
            </div>
          ))}
        </div>
        {cuotaNegociacion && (
          <div className="flex justify-between mx-auto border p-4 mt-8 rounded-lg items-center">
            <p className="text-center text-gray-500 dark:text-gray-300 text-sm">
              Plan de pagos negociado
            </p>
            <p className="text-center text-primary font-semibold">
              {numCuotasNegociacion} cuotas
            </p>
            <p className="text-center text-primary font-semibold">
              {cuotaNegociacion}€
            </p>
          </div>
        )}
      </div>{" "}
    </div>
  );
};

export default PriceOptions;

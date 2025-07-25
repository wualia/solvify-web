"use client";

import { getNegoAndRevolvingCreditors } from "@/api/reports";
import React, { useEffect, useState } from "react";
import AcreedoresForm from "./acreedoresForm";
import NuevoAcreedorForm from "./nuevoAcreedor";
import PlanDePagos from "./plan-pagos";
import { useFormStore } from "@/store/form";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { track } from "@vercel/analytics";

const FormNego = () => {
  const [creditorsNegotiation, setCreditorsNegotiation] = useState([]);
  const { creditors, source, clearForm } = useFormStore();

  useEffect(() => {
    track("Empieza formulario", {
      formulario: "NEGO",
      source: source,
    });
  }, []);

  useEffect(() => {
    getNegoAndRevolvingCreditors().then((res) => {
      setCreditorsNegotiation(res);
    });
  }, []);

  return (
    <div>
      <div className="mt-8">
        <NuevoAcreedorForm creditors={creditorsNegotiation} />
        <AcreedoresForm />
      </div>
      {creditors.length > 0 && (
        <>
          <PlanDePagos />
          <div className="flex justify-end gap-4 mt-4">
            <Button variant="outline" onClick={() => clearForm()}>
              Volver a empezar
            </Button>
            <Link href="/formulario/negociacion-de-deuda/datos">
              <Button>
                Continuar <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default FormNego;

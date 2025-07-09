"use client";

import { getNegoAndRevolvingCreditors } from "@/api/reports";
import React, { useEffect, useState } from "react";
import AcreedoresForm from "./acreedoresForm";
import NuevoAcreedorForm from "./nuevoAcreedor";
import PlanDePagos from "./plan-pagos";
import { useFormStore } from "@/store/form";

const FormNego = () => {
  const [creditorsNegotiation, setCreditorsNegotiation] = useState([]);
  const { creditors } = useFormStore();

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
      {creditors.length > 0 && <PlanDePagos />}
    </div>
  );
};

export default FormNego;

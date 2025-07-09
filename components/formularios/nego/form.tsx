"use client";

import { getNegoAndRevolvingCreditors } from "@/api/reports";
import React, { useEffect, useState } from "react";
import AcreedoresForm from "./acreedoresForm";
import NuevoAcreedorForm from "./nuevoAcreedor";

const FormNego = () => {
  const [creditorsNegotiation, setCreditorsNegotiation] = useState([]);

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
    </div>
  );
};

export default FormNego;

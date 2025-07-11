"use client";

import React, { Suspense } from "react";
import { Metadata } from "next";
import DisponibilidadComponent from "@/components/disponibilidad/form";
import { useSearchParams } from "next/navigation";

const Disponibilidad = () => {
  const searchParams = useSearchParams();
  const deal_id = searchParams.get("deal_id");

  return (
    <div className="text-center py-8 pb-24 mx-auto max-w-2xl px-4 2xl:px-0">
      <DisponibilidadComponent source="web" deal_id={deal_id} />
    </div>
  );
};

const DisponibilidadPage = () => {
  return (
    <Suspense>
      <Disponibilidad />
    </Suspense>
  );
};

export default DisponibilidadPage;

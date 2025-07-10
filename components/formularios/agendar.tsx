"use client";

import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { getPublicAnnotationsByDeal } from "@/api/annotations";
import { useFormStore } from "@/store/form";
import { createPublicTask } from "@/api/tasks";

const Agendar = ({ source }: { source: string }) => {
  const router = useRouter();

  const {
    deal,
    deudaTotal,
    deudaTotalNegociada,
    cuotaNegociacion,
    numCuotasNegociacion,
  } = useFormStore();

  const handleContinuar = () => {
    router.push(`/formulario/${source}/agendar`);
  };

  useEffect(() => {
    if (deal) {
      getAnnotations();
    }
  }, [deal]);

  const getAnnotations = async () => {
    const res = await getPublicAnnotationsByDeal({
      object_reference_type: "deals",
      object_reference_id: deal?.id,
    });

    const annotationId = res.filter(
      (item: any) => item.annotation_type == "Seguimiento"
    );

    let annotationContent = "";

    switch (source) {
      case "ley-de-segunda-oportunidad":
        annotationContent = `<p>Información LSO:</p>
        <p>Tiene más de 8.000€ de deuda.</p>
        <p>Tiene 2 o más deudas.</p>
        <p>Tiene más de 6.000€ de deuda privada.</p>
        <p>Ingresos superiores a 600€ al mes.</p>
        `;
        break;
      case "negociacion-de-deuda":
        annotationContent = `<p>Información Negociación de Deuda</p>
        <p>Deuda total: ${deudaTotal.toLocaleString("es-AR")} €</p>
        <p>Deuda total negociada: ${deudaTotalNegociada.toLocaleString("es-AR")} €</p>
        <p>Cuota de negociación: ${cuotaNegociacion.toLocaleString("es-AR")} €</p>
        <p>Número de cuotas: ${numCuotasNegociacion.toLocaleString("es-AR")}</p>
        `;
        break;
    }

    const annotationBody = {
      annotation_type: "Comentario",
      content: annotationContent,
      spent_time: "0",
      is_completed: true,
      is_private: true,
      priority: "1",
      status: "completada",
      due_date: new Date(),
      user_assigned_id: deal?.user_assigned_id,
    };

    await createPublicTask({
      body: annotationBody,
      object_reference_type: "deals",
      object_reference_id: deal?.id,
      annotation_id: annotationId,
    });
  };

  return (
    <div className="flex justify-center">
      <Button
        className="mt-8 w-full md:w-auto md:px-16"
        onClick={handleContinuar}
      >
        Agendar llamada
      </Button>
    </div>
  );
};

export default Agendar;

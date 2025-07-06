import React from "react";
import HeroServices from "@/components/services/hero";

const NegociacionDeDeudasPage = () => {
  return (
    <div>
      <HeroServices
        title="Negociación de deudas"
        description="Intermediación con entidades bancarias y financieras con el objetivo de conseguir descuentos sobre el total de tus deudas."
        image="/services-negociacion-deuda.webp"
        link="/servicios"
        hasAction={true}
        buttonText="Realizar estudio gratuito"
      />
    </div>
  );
};

export default NegociacionDeDeudasPage;

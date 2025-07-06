import React from "react";
import HeroServices from "@/components/services/hero";

const LeySegundaOportunidadPage = () => {
  return (
    <div>
      <HeroServices
        title="Ley de la Segunda Oportunidad"
        description="A través de la Segunda Oportunidad eliminamos tus deudas personales de forma rápida y automática."
        image="/services-lso.webp"
        link="/servicios"
        hasAction={true}
        buttonText="Realizar estudio gratuito"
      />
    </div>
  );
};

export default LeySegundaOportunidadPage;

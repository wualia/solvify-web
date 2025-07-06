import React from "react";
import HeroServices from "@/components/services/hero";

const CartelCochesPage = () => {
  return (
    <div>
      <HeroServices
        title="Cartel de coches"
        description="Si compraste un coche entre 2006 y 2013 podrías recuperar hasta el 15% del precio que pagaste por él."
        image="/services-cartel-coches.webp"
        link="/servicios"
        hasAction={true}
        buttonText="Realizar estudio gratuito"
      />
    </div>
  );
};

export default CartelCochesPage;

import React from "react";
import LsoCTA from "./lso";
import NegociacionCTA from "./negociacion";
import RevolvingCTA from "./revolving";

const CtaComponent = ({ category }: { category: any }) => {
  if (category === "ley-de-segunda-oportunidad") {
    return <LsoCTA />;
  } else if (category === "negociacion-de-deuda") {
    return <NegociacionCTA />;
  } else if (category === "revolving") {
    return <RevolvingCTA />;
  }
};

export default CtaComponent;

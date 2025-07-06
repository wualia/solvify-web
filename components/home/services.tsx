import React from "react";

const HomeServices = () => {
  return (
    <div>
      <div className="py-20 bg-white dark:bg-card">
        <div className="mx-auto max-w-3xl px-4 xl:px-0">
          <h2 className="text-center text-3xl pb-4">
            ¿ En qué te podemos ayudar ?
          </h2>
          <p className="text-center text-gray-500 dark:text-gray-300 font-light leading-7">
            Solvify es una cúpula legal tecnológica que tiene la misión de
            asesorar ante consultas relacionadas con el consumo de productos
            financieros o bien en relación a deudas con bancos, financieras o
            entidades públicas, con el objetivo de liberarte de ellas.
          </p>
        </div>
        {/* <ServicesGrid /> */}
      </div>
    </div>
  );
};

export default HomeServices;

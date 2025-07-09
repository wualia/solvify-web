import React from "react";

const LSO_Quien = () => {
  return (
    <div className="py-16 mx-auto max-w-7xl px-4 2xl:px-0">
      <h2 className="text-3xl font-semibold pb-6 text-gray-700 dark:text-white">
        ¿Quién se puede acoger?
      </h2>

      <ul className="list-disc list-outside pl-4 text-lg">
        <li className="text-gray-500 dark:text-gray-300 pb-4">
          Particulares con deudas personales: préstamos, tarjetas, avales,
          embargos, etc.
        </li>
        <li className="text-gray-500 dark:text-gray-300 pb-4">
          Autónomos que han acumulado deudas por su actividad económica,
          incluyendo con Hacienda o la Seguridad Social.
        </li>
      </ul>
      <p className="text-gray-500 dark:text-gray-300 text-lg">
        No pueden acogerse empresas, ya que estas deben seguir el procedimiento
        de concurso de acreedores.
      </p>
    </div>
  );
};

export default LSO_Quien;

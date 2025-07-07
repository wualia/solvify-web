import React from "react";
import type { Metadata } from "next";
import DeleteAccountForm from "./components/deleteAccountForm";

export const metadata: Metadata = {
  title: "Solvify - Eliminar cuenta",
  description: "Formulario para eliminar la cuenta de Solvify",
};

const EliminarCuenta = () => {
  return (
    <div className="mx-auto max-w-4xl py-24 prose prose-sm dark:prose-invert prose:max-w-none px-4">
      <h1 className="text-primary">Eliminar cuenta</h1>
      <p>
        Si deseas eliminar tu cuenta con Solvify rellena el siguiente formulario
        y nos pondremos en contacto contigo para proceder a la eliminación de tu
        cuenta.
      </p>
      <DeleteAccountForm />
    </div>
  );
};

export default EliminarCuenta;

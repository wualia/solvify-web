"use client";

import { Button } from "@/components/ui/button";
import { useFormStore } from "@/store/form";
import { Trash2Icon } from "lucide-react";
import React from "react";

const AcreedoresForm = () => {
  const { creditors, removeCreditor } = useFormStore();

  return (
    <div className="mt-4 space-y-2">
      {creditors.map((creditor: any, index: number) => (
        <div
          key={index}
          className="flex justify-between border p-2 rounded-lg items-center text-sm bg-white dark:bg-card"
        >
          <p className="flex-1">{creditor.name}</p>
          <p className="flex-1 text-right pr-8">
            {creditor.total_contrato.toLocaleString("es-AR")} €
          </p>
          <Button onClick={() => removeCreditor(index)} variant="outline">
            <Trash2Icon className="h-4 w-4 mr-2" />
            Quitar
          </Button>
        </div>
      ))}
    </div>
  );
};

export default AcreedoresForm;

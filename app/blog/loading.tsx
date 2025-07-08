import Loader from "@/components/ui/loader";
import React from "react";

export default function Loading() {
  return (
    <div className="flex justify-center items-center py-20 gap-2">
      <Loader size={16} color="#38859E" lineWeight={3.5} />
      <p className="text-sm text-gray-500 dark:text-white">Cargando...</p>
    </div>
  );
}

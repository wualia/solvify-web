"use client";

import React, { useEffect } from "react";
import { useFormStore } from "@/store/form";
import { useAvailabilityStore } from "@/store/availability";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { track } from "@vercel/analytics";
import { Calendar, User } from "@/components/icons";

const BookDetail = ({ source }: { source: string }) => {
  const { deal } = useFormStore();
  const { dueDate } = useAvailabilityStore();
  const router = useRouter();

  useEffect(() => {
    track("Llamada agendada", {
      formulario:
        source === "ley-de-segunda-oportunidad"
          ? "LSO"
          : source === "negociacion-de-deuda"
            ? "NEGO"
            : "OTRO",
      agendado: `con ${deal?.user_assigned?.first_name} el ${format(
        dueDate,
        "d MMMM yyyy",
        { locale: es }
      )} a las ${format(dueDate, "HH:mm", { locale: es })}h`,
    });
  }, []);

  const handleBack = () => {
    router.push("/");
  };

  return (
    <div>
      <div className="flex flex-col gap-3 text-center mt-6">
        <div className="flex items-center justify-center gap-2">
          <Calendar className="w-6 h-6 text-primary dark:text-white" />
          <p className="text-gray-700 dark:text-white  font-medium">
            {format(dueDate, "d MMMM yyyy", { locale: es })}{" "}
            <span className="text-gray-500 dark:text-gray-300 font-normal">
              a las
            </span>{" "}
            {format(dueDate, "HH:mm", { locale: es })}h
          </p>
        </div>

        {deal?.user_assigned && (
          <div className="flex items-center justify-center gap-2">
            <User className="w-6 h-6 text-primary dark:text-white" />
            <p className="text-gray-700 dark:text-white  font-medium">
              {deal?.user_assigned?.first_name} {deal?.user_assigned?.last_name}
            </p>
          </div>
        )}
      </div>
      <div className="flex justify-center mt-8">
        <Button className="w-full md:w-auto md:px-16" onClick={handleBack}>
          Volver al inicio
        </Button>
      </div>
    </div>
  );
};

export default BookDetail;

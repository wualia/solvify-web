"use client";

import React from "react";
import { useFormStore } from "@/store/form";
import { useAvailabilityStore } from "@/store/availability";
import { format } from "date-fns";
import { es } from "date-fns/locale";

const BookDetail = () => {
  const { lead, deal } = useFormStore();
  const { dueDate } = useAvailabilityStore();

  console.log("lead", lead);
  console.log("deal", deal);
  console.log("dueDate", dueDate);

  return (
    <div>
      <div className="flex flex-col gap-2 text-center mt-4">
        <p className=" text-gray-700 font-semibold">
          {format(dueDate, "d MMMM yyyy", { locale: es })}
          <span className="text-gray-500 font-normal"> a las </span>
          {format(dueDate, "HH:mm", { locale: es })}h{" "}
          <span className="text-gray-500 font-normal">con</span>{" "}
          {deal?.user_assigned?.first_name} {deal?.user_assigned?.last_name}
        </p>
      </div>
    </div>
  );
};

export default BookDetail;

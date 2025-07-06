import Loader from "@/components/ui/loader";
import React from "react";

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Loader size={16} color="#38859E" lineWeight={3.5} />
    </div>
  );
}

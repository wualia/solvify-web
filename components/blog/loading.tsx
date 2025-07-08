import React from "react";
import Loader from "../ui/loader";

const Loading = () => {
  return (
    <div className="flex justify-center items-center py-20">
      <div className="flex items-center gap-2">
        <Loader size={16} color="#38859E" lineWeight={3.5} />
        <p className="text-sm text-gray-500">Cargando...</p>
      </div>
    </div>
  );
};

export default Loading;

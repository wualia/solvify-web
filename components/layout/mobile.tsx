"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { useUiStore } from "@/store/ui";
import { useRouter } from "next/navigation";
import { CircleXIcon } from "lucide-react";

const Mobile = () => {
  const { setWebMobileOpen } = useUiStore();
  const router = useRouter();

  const goTo = (path: string) => {
    router.push(path);
    setWebMobileOpen();
  };

  return (
    <div className="bg-black p-4 z-50 fixed inset-0 w-full h-full flex flex-col">
      <div className="flex justify-between items-center pb-16">
        <p className="text-gray-400 font-medium uppercase text-sm">Menú</p>
        <Button
          size="icon"
          onClick={() => setWebMobileOpen()}
          variant="ghost"
          className="text-gray-400"
        >
          <CircleXIcon className="w-4 h-4" />
        </Button>
      </div>
      <ul className="text-white flex-1">
        <li onClick={() => goTo("/")} className="pb-8 text-xl font-medium">
          Inicio
        </li>
        <li
          onClick={() => goTo("/servicios")}
          className="pb-8 text-xl font-medium"
        >
          Servicios
        </li>
        <li onClick={() => goTo("/blog")} className="pb-8 text-xl font-medium">
          Blog
        </li>
        <li
          onClick={() => goTo("/contacto")}
          className="pb-8 text-xl font-medium"
        >
          Contacto
        </li>
      </ul>
      <Button onClick={() => setWebMobileOpen()} className="w-full">
        Zona clientes
      </Button>
    </div>
  );
};

export default Mobile;

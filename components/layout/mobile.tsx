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
    <div className="bg-black px-8 py-4 z-50 fixed top-0 left-0 w-full h-full">
      <div className="flex justify-between items-center pb-8">
        <p className="text-white text-2xl font-bold">Menú</p>
        <Button
          size="icon"
          onClick={() => setWebMobileOpen()}
          variant="ghost"
          className="text-white"
        >
          <CircleXIcon className="w-4 h-4" />
        </Button>
      </div>
      <ul className="text-white">
        <li onClick={() => goTo("/")} className="pb-8">
          Inicio
        </li>
        <li onClick={() => goTo("/servicios")} className="pb-8">
          Servicios
        </li>
        <li onClick={() => goTo("/blog")} className="pb-8">
          Blog
        </li>
        <li onClick={() => goTo("/contacto")} className="pb-8">
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

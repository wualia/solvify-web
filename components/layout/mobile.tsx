"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { useUiStore } from "@/store/ui";
import { useRouter } from "next/navigation";
import { CircleXIcon } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

const Mobile = () => {
  const { setWebMobileOpen, webMobileOpen } = useUiStore();
  const router = useRouter();

  const goTo = (path: string) => {
    router.push(path);
    setWebMobileOpen();
  };

  const modalVariants = {
    visible: { opacity: 1, transition: { when: "beforeChildren" } },
    hidden: { opacity: 0, transition: { when: "afterChildren" } },
  };

  return (
    <AnimatePresence>
      {webMobileOpen && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={modalVariants}
          layout
          className="bg-black px-4 py-8 z-50 fixed inset-0 w-full h-full flex flex-col"
        >
          <div className="flex justify-between items-center mb-16 border-b pb-8 border-white/20">
            <p className="text-white font-medium uppercase text-sm">Menú</p>
            <div onClick={() => setWebMobileOpen()} className="text-white">
              <CircleXIcon className="w-6 h-6" />
            </div>
          </div>
          <ul className="text-white flex-1">
            <li onClick={() => goTo("/")} className="pb-8 text-xl font-medium">
              Inicio
            </li>
            {/* <li
              onClick={() => goTo("/servicios")}
              className="pb-8 text-xl font-medium"
            >
              Servicios
            </li> */}
            <li
              onClick={() => goTo("/blog")}
              className="pb-8 text-xl font-medium"
            >
              Blog
            </li>
            <li
              onClick={() => goTo("/contacto")}
              className="pb-8 text-xl font-medium"
            >
              Contacto
            </li>
          </ul>
          <Button onClick={() => setWebMobileOpen()} className="w-full py-6">
            Zona clientes
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Mobile;

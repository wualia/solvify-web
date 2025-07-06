"use client";

import { Menu } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useUiStore } from "@/store/ui";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useRef } from "react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "motion/react";
import { useTheme } from "next-themes";

import { useRouter } from "next/navigation";

const Header = () => {
  const { theme } = useTheme();
  const pathname = usePathname();
  //   const { profile } = AuthStore();
  const { setWebMobileOpen, setBigMenuOpen, bigMenuOpen } = useUiStore();
  const { scrollY } = useScroll();
  const [scrollYProgress, setScrollYProgress] = useState(0);
  const router = useRouter();
  const scrollRef = useRef(null);

  const gotoAreaClientes = () => {
    // if (profile?.role_name == "CUSTOMER") {
    //   router.push("/cliente");
    // }
    // if (profile?.role_name == "PROFESSIONAL" || profile?.role_name == "ADMIN") {
    //   router.push("/admin/leads");
    // }
    // if (!profile) {
    //   router.push("/login");
    // }
  };

  const openMenu = () => {
    setWebMobileOpen();
  };

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrollYProgress(latest);
  });

  const hiddenPaths = ["/disponibilidad"];

  return (
    <div className="relative">
      <motion.div
        ref={scrollRef}
        className={cn(
          scrollYProgress < 40 ? "bg-transparent" : "bg-white dark:bg-card",
          scrollYProgress > 200 && "border-b duration-300",
          "fixed inset-x-0 z-50 py-4 px-4 2xl:px-0 duration-300"
        )}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/">
            <Image
              priority
              src={
                theme == "dark" ? "/solvify-dark.webp" : "/solvify-light.webp"
              }
              alt="logo Solvify"
              width={120}
              height={100}
              className="object-contain"
            />
          </Link>
          <div
            className={cn(
              hiddenPaths.includes(pathname) ? "hidden" : "hidden xl:block"
            )}
          >
            {
              <div className="flex space-x-2 text-sm">
                <Link
                  href="/"
                  onClick={bigMenuOpen ? setBigMenuOpen : () => {}}
                  className={cn(
                    pathname.length == 1 &&
                      "text-primary font-semibold bg-white/10",
                    // scrollYProgress < 40
                    //   ? "text-white hover:bg-white/10"
                    //   : "hover:bg-gray-50 hover:dark:bg-background",
                    "py-2 px-4 rounded-lg transition-colors"
                  )}
                >
                  Inicio
                </Link>
                <div onClick={setBigMenuOpen} className="cursor-pointer">
                  <p
                    className={cn(
                      pathname.includes("/servicios")
                        ? "text-primary font-semibold bg-white/10"
                        : "",
                      // scrollYProgress < 40
                      //   ? "text-white hover:bg-white/10"
                      //   : "hover:bg-gray-50 hover:dark:bg-background",
                      " py-2 px-4 rounded-lg transition-colors"
                    )}
                  >
                    Servicios
                  </p>
                </div>

                <Link
                  href="/blog"
                  onClick={bigMenuOpen ? setBigMenuOpen : () => {}}
                  className={cn(
                    pathname.includes("/blog")
                      ? "text-primary font-semibold bg-white/10"
                      : "",
                    // scrollYProgress < 40
                    //   ? "text-white hover:bg-white/10"
                    //   : "hover:bg-gray-50 hover:dark:bg-background",
                    " py-2 px-4 rounded-lg transition-colors"
                  )}
                >
                  Blog
                </Link>

                <Link
                  href="/contacto"
                  onClick={bigMenuOpen ? setBigMenuOpen : () => {}}
                  className={cn(
                    pathname.includes("/contacto")
                      ? "text-primary font-semibold bg-white/10"
                      : "",
                    // scrollYProgress < 40
                    //   ? "text-white hover:bg-white/10"
                    //   : "hover:bg-gray-50 hover:dark:bg-background",
                    "py-2 px-4 rounded-lg transition-colors"
                  )}
                >
                  Contacto
                </Link>
              </div>
            }
          </div>
          <div className="hidden xl:block">
            <Button onClick={gotoAreaClientes} className="w-full">
              Área clientes
            </Button>
          </div>
          <div onClick={openMenu} className="cursor-pointer xl:hidden pl-4">
            <Menu
              className={cn(
                scrollYProgress < 40
                  ? "text-white"
                  : "text-gray-500 dark:text-gray-200",
                "h-8 w-8 "
              )}
            />
          </div>
        </div>
      </motion.div>
      <AnimatePresence>
        {bigMenuOpen && (
          <motion.div
            className=" fixed top-14 w-full inset-x-0 p-4 rounded-lg z-[99999999]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
          >
            <div className="bg-white dark:bg-card rounded-lg shadow-lg max-w-7xl mx-auto grid grid-cols-3 border">
              <div className="border-r">
                <div className="flex justify-center border-b items-center p-4">
                  <h3 className="font-semibold text-primary ">
                    Libertad Financiera
                  </h3>
                </div>
                <div className="p-4">
                  <Link
                    href="/servicios/ley-de-segunda-oportunidad"
                    onClick={setBigMenuOpen}
                  >
                    <div className="mb-1 hover:bg-accent hover:text-accent-foreground p-4 rounded-lg transition-colors cursor-pointer">
                      <h4 className="pb-2 text-sm font-semibold">
                        Ley de Segunda Oportunidad
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Elimina tus deudas personales de forma rápida y
                        automática.
                      </p>
                    </div>
                  </Link>
                  <Link
                    href="/servicios/negociacion-de-deudas"
                    onClick={setBigMenuOpen}
                  >
                    <div className="mb-1 hover:bg-accent hover:text-accent-foreground p-4 rounded-lg transition-colors cursor-pointer">
                      <h4 className="pb-2 text-sm font-semibold">
                        Negociación de deudas
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Consigue descuentos sobre el total de tus deudas
                        mediante intermediación bancaria.
                      </p>
                    </div>
                  </Link>
                  {/* <Link href="/servicios/asnef" onClick={setBigMenuOpen}>
                    <div className="mb-1 hover:bg-accent hover:text-accent-foreground p-4 rounded-lg transition-colors cursor-pointer">
                      <h4 className="pb-2 text-sm font-semibold">
                        Salida de registros morosos - Asnef
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Limpia tu historial público perjudicial por deudas.
                      </p>
                    </div>
                  </Link> */}
                </div>
              </div>
              <div>
                <div className="flex justify-center border-b items-center p-4">
                  <h3 className="font-semibold text-primary ">
                    Protección al Consumidor
                  </h3>
                </div>
                <div className="p-4">
                  <Link href="/servicios/revolving" onClick={setBigMenuOpen}>
                    <div className="mb-1 hover:bg-accent hover:text-accent-foreground p-4 rounded-lg transition-colors cursor-pointer">
                      <h4 className="pb-2 text-sm font-semibold">
                        Reclamación tarjetas crédito abusivas “revolving”
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Detecta y elimina las trampas en los pagos de tus
                        tarjetas de crédito.
                      </p>
                    </div>
                  </Link>
                  <Link
                    href="/servicios/cartel-coches"
                    onClick={setBigMenuOpen}
                  >
                    <div className="mb-1 hover:bg-accent hover:text-accent-foreground p-4 rounded-lg transition-colors cursor-pointer">
                      <h4 className="pb-2 text-sm font-semibold">
                        Reclamación cártel coches
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Recupera hasta el 15% del precio de tu coche si lo
                        compraste entre 2006 y 2013.
                      </p>
                    </div>
                  </Link>
                  {/* <Link
                    href="/servicios/reclamacion-comisiones-descubierto"
                    onClick={setBigMenuOpen}
                  >
                    <div className="mb-1 hover:bg-accent hover:text-accent-foreground p-4 rounded-lg transition-colors cursor-pointer">
                      <h4 className="pb-2 text-sm font-semibold">
                        Reclamación comisiones por gastos en descubierto
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Recupera comisiones indebidas cobradas por posiciones
                        deudoras.
                      </p>
                    </div>
                  </Link> */}
                </div>
              </div>
              <div className="border-l">
                <div className="flex justify-center border-b items-center p-4">
                  <h3 className="font-semibold text-primary ">
                    Soluciones Empresariales
                  </h3>
                </div>{" "}
                <div className="p-4">
                  <Link
                    href="/servicios/concurso-expres"
                    onClick={setBigMenuOpen}
                  >
                    <div className="mb-1 hover:bg-accent hover:text-accent-foreground p-4 rounded-lg transition-colors cursor-pointer">
                      <h4 className="pb-2 text-sm font-semibold">
                        Concurso exprés - disolución de empresa
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Cancela las deudas de tu sociedad de forma legal y
                        rápida.
                      </p>
                    </div>
                  </Link>
                  {/* <Link
                    href="/servicios/concurso-microempresas"
                    onClick={setBigMenuOpen}
                  >
                    <div className="mb-1 hover:bg-accent hover:text-accent-foreground p-4 rounded-lg transition-colors cursor-pointer">
                      <h4 className="pb-2 text-sm font-semibold">
                        Procedimiento Especial para Microempresas
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Continúa tu actividad empresarial mientras gestionas tus
                        deudas.
                      </p>
                    </div>
                  </Link> */}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;

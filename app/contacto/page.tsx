import React from "react";
import { Map, Phone, Mail } from "lucide-react";
import Link from "next/link";
import NewContactForm from "@/components/contact/contactForm";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Contacto | Solvify",
  description: "Contacta con Solvify para resolver tus dudas y consultas.",
};

const ContactoPage = () => {
  return (
    <div>
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1.5 } }}
        className="absolute inset-0 z-10"
      > */}
      <div className="py-8 md:py-16 bg-gray-50 dark:bg-background">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-2 items-center gap-8 px-4 2xl:px-0">
          <div>
            <h1 className="text-primary pb-2 text-xs uppercase tracking-wider font-medium">
              CONTACTO
            </h1>
            <div className="w-10 h-0.5 bg-primary rounded-full mb-4" />
            <h2 className="text-4xl font-medium pb-6 text-gray-700 dark:text-white">
              Escríbenos sin compromiso
            </h2>
            <p className="text-lg max-w-lg text-gray-500 dark:text-gray-300">
              Nuestro equipo de profesionales está a tu disposición para
              resolver cualquier duda o consulta que tengas.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/contacto.webp"
              width={1920}
              height={1080}
              alt="Imagen contacto Solvify"
              className="object-cover h-full w-full z-20 inset-0 object-top"
            />
          </div>
        </div>
      </div>

      {/* </motion.div> */}
      <div className=" py-16">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-8 px-8 2xl:px-0">
          <div>
            <h2 className="text-2xl pb-8">Información de contacto</h2>
            <div className="space-y-6">
              <a
                href="https://www.google.es/maps/place/Carrer+de+Balmes,+188,+Sarri%C3%A0-Sant+Gervasi,+08006+Barcelona/@41.3968083,2.1506991,17z/data=!3m1!4b1!4m6!3m5!1s0x12a4a29992ee3529:0x236edba3ce489ce!8m2!3d41.3968083!4d2.153274!16s%2Fg%2F11bw3yzvdk?hl=es&entry=ttu&g_ep=EgoyMDI1MDEwNi4xIKXMDSoASAFQAw%3D%3D"
                className="flex space-x-6 items-start group"
                target="_blank"
              >
                <Map className="h-6 w-6 text-gray-700 dark:text-gray-400 group-hover:text-primary" />
                <div className="text-gray-500 dark:text-gray-300 group-hover:text-primary">
                  <p>Balmes 188, Planta 6, 08006 Barcelona</p>
                </div>
              </a>

              <Link
                href="tel:+34900877219"
                className="flex space-x-6 items-start group"
                target="_blank"
              >
                <Phone className="h-6 w-6 text-gray-700 dark:text-gray-400 group-hover:text-primary" />
                <p className="text-gray-500 dark:text-gray-300 hover:text-primary hover:dark:text-primary">
                  +34 900 877 219
                </p>
              </Link>

              {/* <Link
                href="https://wa.me/34647479286"
                className="flex space-x-4 items-start group"
                target="_blank"
              >
                <Phone className="h-6 w-6 text-gray-700 dark:text-gray-400 group-hover:text-primary" />
                <p className="text-gray-500 dark:text-gray-300 hover:text-primary hover:dark:text-primary">
                  At. al cliente: +34 647 47 92 86
                </p>
              </Link> */}

              <Link
                href="mailto:info@solvify.es"
                className="flex space-x-6 items-start group"
                target="_blank"
              >
                <Mail className="h-6 w-6 text-gray-700 dark:text-gray-400 group-hover:text-primary" />
                <p className="text-gray-500 dark:text-gray-300 hover:text-primary hover:dark:text-primary">
                  info@solvify.es
                </p>
              </Link>
            </div>
          </div>
          <div>
            <h2 className="text-2xl pb-8">Formulario de contacto</h2>
            <NewContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactoPage;

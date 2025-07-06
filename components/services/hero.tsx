import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface HeroServicesProps {
  title?: string;
  description?: string;
  image: string;
  link: string;
  buttonText: string;
  hasAction?: boolean;
}

const HeroServices = ({
  title,
  description,
  image,
  link,
  buttonText,
  hasAction,
}: HeroServicesProps) => {
  return (
    <div className="py-8 md:py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-2 items-center gap-8 px-4 2xl:px-0">
        <div>
          <p className="text-primary pb-2 text-xs uppercase tracking-wider font-medium text-center md:text-left">
            SERVICIOS
          </p>
          <div className="flex justify-center md:justify-start">
            <div className="w-10 h-0.5 bg-primary rounded-full mb-4" />
          </div>

          <h1 className="text-4xl font-medium pb-6 text-gray-700 text-center md:text-left">
            {title}
          </h1>
          <p className="text-lg max-w-lg text-gray-500 pb-8 text-center md:text-left">
            {description}
          </p>
          {hasAction && (
            <Button asChild className=" w-full md:w-auto bg-black" size="lg">
              <Link href={link}>{buttonText}</Link>
            </Button>
          )}
        </div>
        <div className="rounded-lg overflow-hidden shadow-lg">
          <Image
            src={image}
            width={1920}
            height={1080}
            alt="Imagen contacto Solvify"
            className="object-cover h-full w-full z-20 inset-0 object-top"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroServices;

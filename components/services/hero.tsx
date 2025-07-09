import React from "react";
import Image from "next/image";
import HeroButton from "./heroButton";

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
    <div className="py-8 md:py-16 bg-card">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-2 items-center gap-8 px-4 2xl:px-0">
        <div>
          <p className="text-primary pb-2 text-xs uppercase tracking-wider font-medium text-center md:text-left">
            SERVICIOS
          </p>
          <div className="flex justify-center md:justify-start">
            <div className="w-10 h-0.5 bg-primary rounded-full mb-4" />
          </div>

          <h1 className="text-4xl font-medium pb-6 text-gray-700 dark:text-white text-center md:text-left">
            {title}
          </h1>
          <p className="text-lg max-w-lg text-gray-500 dark:text-gray-300 pb-8 text-center md:text-left">
            {description}
          </p>
          {hasAction && <HeroButton buttonText={buttonText} link={link} />}
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

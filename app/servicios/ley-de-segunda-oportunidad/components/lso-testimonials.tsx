"use client";

import React from "react";

import AutoScroll from "embla-carousel-auto-scroll";
import { ChevronRight, Star, Zap } from "lucide-react";
import { useRef } from "react";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Harold Andrés",
    city: "Alicante - Benidorm",
    avatar:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
    amount: "15.600 €",
    days: "40 días",
  },
  {
    name: "Diana Paola",
    city: "Cadíz -  Sanlúcar De Barrameda",
    avatar:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp",
    amount: "16.916 €",
    days: "42 días",
  },
  {
    name: "Soraya",
    city: "Valladolid - Valladolid",
    avatar:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp",
    amount: "25.818 €",
    days: "37 días",
  },
  {
    name: "Massamba",
    city: "La Coruña - A Coruña",
    avatar:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-4.webp",
    amount: "13.000 €",
    days: "73 días",
  },
  {
    name: "Boureima",
    city: "Álava - Vitoria-Gasteiz",
    avatar:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-5.webp",
    amount: "19.500 €",
    days: "63 días",
  },
  {
    name: "Javier Obregón",
    city: "Valladolid - Valladolid",
    avatar:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-6.webp",
    amount: "42.200 €",
    days: "63 días",
  },
  {
    name: "Giambattista",
    city: "Islas Baleares - Palma de mallorca",
    avatar:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp",
    amount: "21.250 €",
    days: "87 días",
  },
];

const LSO_testimonials = () => {
  const plugin = useRef(
    AutoScroll({
      startDelay: 500,
      speed: 0.7,
    })
  );

  return (
    <section className="pb-24">
      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center gap-1 text-sm font-semibold">
          CASOS DE ÉXITO
        </div>
        <h2 className="text-center text-3xl font-semibold lg:text-4xl">
          Testimonios de nuestros clientes
        </h2>
      </div>
      <div className="">
        <div className="mt-16 space-y-4">
          <Carousel
            opts={{
              loop: true,
            }}
            plugins={[plugin.current]}
            onMouseLeave={() => plugin.current.play()}
            className="relative before:absolute before:top-0 before:bottom-0 before:left-0 before:z-10 before:w-36 before:bg-linear-to-r before:from-background before:to-transparent after:absolute after:top-0 after:right-0 after:bottom-0 after:z-10 after:w-36 after:bg-linear-to-l after:from-background after:to-transparent"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="basis-auto">
                  <Card className="max-w-96 p-6 select-none min-w-90">
                    <div className="flex justify-between">
                      <div className="mb-4 flex gap-4">
                        <Avatar className="size-14 rounded-full ring-1 ring-input">
                          <AvatarImage
                            src={testimonial.avatar}
                            alt={testimonial.name}
                          />
                        </Avatar>
                        <div>
                          <p className="font-medium">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.city}
                          </p>
                        </div>
                      </div>
                      {/* <div className="flex gap-1">
                        <Star className="size-5 fill-amber-500 text-amber-500" />
                        <Star className="size-5 fill-amber-500 text-amber-500" />
                        <Star className="size-5 fill-amber-500 text-amber-500" />
                        <Star className="size-5 fill-amber-500 text-amber-500" />
                        <Star className="size-5 fill-amber-500 text-amber-500" />
                      </div> */}
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="flex justify-between items-baseline">
                        <p className="text-sm text-muted-foreground">
                          Deuda cancelada:
                        </p>
                        <p className="text-sm text-muted-foreground">
                          <span className="font-semibold text-gray-700 dark:text-white text-lg">
                            {testimonial.amount}
                          </span>{" "}
                        </p>
                      </div>
                      <div className="flex justify-between items-baseline">
                        <p className="text-sm text-muted-foreground">
                          Sentencia:
                        </p>
                        <p className="text-sm text-muted-foreground">
                          <span className="font-semibold text-gray-700 dark:text-white text-lg">
                            {testimonial.days}
                          </span>
                        </p>
                      </div>
                    </div>

                    {/* <q className="leading-7 text-muted-foreground">
                      {testimonial.content}
                    </q> */}
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default LSO_testimonials;

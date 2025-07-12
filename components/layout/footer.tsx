// import React from "react";
import Link from "next/link";
import ModeToggle from "@/components/ui/toogleTheme";
import Image from "next/image";
// import { FooterLinks } from "@/lib/data";

// const Footer = () => {
//   return (
//     <footer className="py-4 bg-gray-50 text-white dark:bg-background dark:text-white">
//       <div className="mx-auto max-w-5xl flex flex-col sm:flex-row space-y-4 sm:space-y-0 justify-between items-center">
//         <div className="text-sm text-gray-700 dark:text-white">
//           <p>© 2025 LJP Legaltech SLU</p>
//         </div>
//         <div className="text-sm text-gray-700 dark:text-white space-x-4">
//           {FooterLinks.map((link) => (
//             <Link key={link.id} href={link.path} className="hover:text-primary">
//               {link.name}
//             </Link>
//           ))}
//         </div>
//         <ModeToggle />
//       </div>
//     </footer>
//   );
// };

// export default Footer;

interface MenuItem {
  title: string;
  links: {
    text: string;
    url: string;
  }[];
}

interface Footer2Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  tagline?: string;
  servicesItems?: MenuItem[];
  aboutItems?: MenuItem[];
  copyright?: string;
  bottomLinks?: {
    text: string;
    url: string;
  }[];
}

const Footer = ({
  logo = {
    src: "/solvify-light.webp",
    alt: "Solvify",
    title: "Solvify",
    url: "https://solvify.es",
  },
  tagline = "Te ayudamos a cancelar legalmente tus deudas",
  servicesItems = [
    {
      title: "Servicios",
      links: [
        {
          text: "Ley de Segunda Oportunidad",
          url: "/servicios/ley-de-segunda-oportunidad",
        },
        {
          text: "Negociación de deuda",
          url: "/servicios/negociacion-de-deuda",
        },
        { text: "Tarjetas Revolving", url: "/servicios/tarjetas-revolving" },
        { text: "Cártel de Coches", url: "/servicios/cartel-coches" },
        { text: "Concurso Exprés", url: "/servicios/concurso-expres" },
      ],
    },
  ],
  aboutItems = [
    {
      title: "Sobre nosotros",
      links: [
        { text: "Blog", url: "/blog" },
        { text: "Contacto", url: "/contacto" },
        { text: "Quienes somos", url: "/quienes-somos" },
      ],
    },
  ],

  copyright = "© 2025 Solvify. Todos los derechos reservados.",
  bottomLinks = [
    { text: "Aviso legal", url: "/legal/aviso-legal" },
    { text: "Política de privacidad", url: "/legal/politica-de-privacidad" },
  ],
}: Footer2Props) => {
  return (
    <section className="pt-16 pb-8 bg-card">
      <div className="container mx-auto max-w-7xl px-4 2xl:px-0">
        <footer>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-6">
            <div className="col-span-3 mb-8 lg:mb-0">
              <div className="flex items-center gap-2 lg:justify-start">
                <Link href="/">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    title={logo.title}
                    width={100}
                    height={100}
                    className="h-10 w-auto"
                  />
                </Link>
                {/* <p className="text-xl font-semibold">{logo.title}</p> */}
              </div>
              <p className="mt-4 font-medium text-muted-foreground">
                {tagline}
              </p>
            </div>
            <div className="col-span-3 grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 ">
                {servicesItems.map((section, sectionIdx) => (
                  <div key={sectionIdx}>
                    <h3 className="mb-4 font-bold">{section.title}</h3>
                    <ul className="space-y-4 text-muted-foreground">
                      {section.links.map((link, linkIdx) => (
                        <li
                          key={linkIdx}
                          className="font-medium hover:text-primary"
                        >
                          <Link href={link.url}>{link.text}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="">
                {aboutItems.map((section, sectionIdx) => (
                  <div key={sectionIdx}>
                    <h3 className="mb-4 font-bold">{section.title}</h3>
                    <ul className="space-y-4 text-muted-foreground">
                      {section.links.map((link, linkIdx) => (
                        <li
                          key={linkIdx}
                          className="font-medium hover:text-primary"
                        >
                          <Link href={link.url}>{link.text}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-16 flex flex-col justify-between gap-4 border-t pt-8 text-sm font-medium text-muted-foreground md:flex-row md:items-center">
            <p>{copyright}</p>
            <ul className="flex gap-4">
              {bottomLinks.map((link, linkIdx) => (
                <li key={linkIdx} className="underline hover:text-primary">
                  <a href={link.url}>{link.text}</a>
                </li>
              ))}
            </ul>
            <ModeToggle />
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Footer;

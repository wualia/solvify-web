import HeroHome from "@/components/home/hero";
import HomeServices from "@/components/home/services";
import HomeWhy from "@/components/home/why";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Solvify | Expertos en la Ley de Segunda Oportunidad y Negociación de Deuda",
  description:
    "Te ayudamos a resolver tus problemas económicos, gracias a la Ley de Segunda Oportunidad, tarjetas revolving, cártel de coches o concurso exprés",
  alternates: {
    canonical: `/`,
  },
  openGraph: {
    title:
      "Solvify | Expertos en la Ley de Segunda Oportunidad y Negociación de Deuda",
    description:
      "Te ayudamos a resolver tus problemas económicos, gracias a la Ley de Segunda Oportunidad, tarjetas revolving, cártel de coches o concurso exprés",
    siteName: "Solvify",
    type: "website",
    images: [process.env.BLOG_URL + "/hero-home.webp"],
  },
};

export default function Home() {
  return (
    <div>
      <HeroHome />
      <HomeServices />
      <HomeWhy />
    </div>
  );
}

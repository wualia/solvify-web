import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Toaster } from "@/components/ui/sonner";

const plusJakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Solvify",
  description:
    "Te ayudamos a resolver tus problemas económicos, gracias a la Ley de Segunda Oportunidad, tarjetas revolving, cártel de coches o concurso exprés",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${plusJakarta.className} antialiased`}>
        <div className=" min-h-svh flex flex-col">
          <Header />
          <div className="flex-1 pt-18">{children}</div>
          <Footer />
          <Toaster />
        </div>
      </body>
    </html>
  );
}

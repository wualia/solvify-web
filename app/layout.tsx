import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className=" min-h-svh flex flex-col">
          <Header />
          <div className="flex-1 pt-20">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}

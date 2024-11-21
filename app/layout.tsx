import { Footer, NavBar } from "@/components";
import "./globals.css";
import Head from "next/head";

export const metadata = {
  title: "CurHub",
  description: "Descubre los mejores coches del mundo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <Head>
          <link rel="icon" href="/favicon.ico" />
        </Head>
      </head>
      <body className="relative">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

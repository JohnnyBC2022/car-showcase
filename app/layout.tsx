import { Footer, NavBar } from "@/components";
import "./globals.css";

export const metadata = {
  title: "Cur Hub",
  description: "Descubre los mejores coches del mundo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="relative">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

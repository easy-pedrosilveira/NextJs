import type { Metadata } from "next";
import "./globals.css";
import { Header, Footer } from "@/components";

export const metadata: Metadata = {
  title: "Onde é a Boa?",
  description: "o icone será uma spyglass(luneta)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className="bg-white1">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

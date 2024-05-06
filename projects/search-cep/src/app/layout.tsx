import type { Metadata } from "next";
import "./globals.css";
import { Header, Footer } from "@/components";

export const metadata: Metadata = {
  title: "Localiza aí?",
  description: "o icone será uma spyglass(luneta)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className="bg-white">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

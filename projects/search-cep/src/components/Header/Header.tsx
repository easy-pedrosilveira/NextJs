import Image from "next/image";
import { Logo, Nav, Button } from "@/components";

export function Header() {
  return (
    <header className="w-full h-28 flex items-center justify-center">
      <div className="w-[85%] h-full flex items-center justify-between">
        <Logo />
        <Nav />
        <button className="w-[220px] h-14 rounded-full bg-blue text-white">
          Começar
        </button>
      </div>
    </header>
  );
}

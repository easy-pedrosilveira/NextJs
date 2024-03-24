import Link from "next/link";

export function Nav() {
  return (
    <nav className="w-[600px] h-14 rounded-full flex items-center justify-center bg-gray1/20">
      <div className="w-[85%] flex items-center justify-evenly text-black">
        <Link href={""}>Inicio</Link>
        <Link href={""}>Sobre nós</Link>
        <Link href={""}>Documentação</Link>
      </div>
    </nav>
  );
}

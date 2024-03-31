import { Button } from "@/components";

export function SearchCep() {
  return (
    <div className="w-auto h-full flex flex-col gap-2 bg-blue/45">
      <div>
        <input type="text" placeholder="Insira um Cep" />
      </div>
      <button className="w-[220px] h-14 rounded-full bg-blue text-white">
        Começar
      </button>
    </div>
  );
}

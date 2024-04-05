import { SearchCep, ResponseSearchCep } from "@/view";

export default function Home() {
  return (
    <main className="w-full h-[80vh] flex items-center justify-center">
      <div className="w-[85%] h-auto flex items-center justify-between bg-blue/45">
        <SearchCep /> vai fazer a pesquisa
        <ResponseSearchCep /> e aqui vai exibir os itens da pesquisa
      </div>
    </main>
  );
}

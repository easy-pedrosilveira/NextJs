import { SearchCep, ResponseSearchCep } from "@/view";

export default function Home() {
  return (
    <main className="w-full h-screen flex items-center justify-center">
      <div className="w-[85%] h-auto flex items-center justify-between bg-blue/45">
        <SearchCep />
        <ResponseSearchCep />
      </div>
    </main>
  );
}

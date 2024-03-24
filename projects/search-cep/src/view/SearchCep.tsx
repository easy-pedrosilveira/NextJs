export function SearchCep() {
  return (
    <div className="flex-col items-center">
      <div>
        <input type="text" placeholder="Insira um Cep" />
      </div>
      <button className="w-40 h-14 rounded-full bg-blue text-white">
        Consultar
      </button>
    </div>
  );
}

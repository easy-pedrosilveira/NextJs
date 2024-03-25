export function SearchCep() {
  return (
    <div className="w-96 h-96 flex flex-col items-center bg-white1">
      <div>
        <input type="text" placeholder="Insira um Cep" />
      </div>
      <button className="w-40 h-14 rounded-full bg-blue text-white">
        Consultar
      </button>
    </div>
  );
}

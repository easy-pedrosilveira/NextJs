export function SearchCep() {
  return (
    <div className="w-auto h-full ">
      <div>
        <input type="text" placeholder="Insira um Cep" />
      </div>
      <div>
        <button className="w-40 h-14 rounded-full bg-blue text-white">
          Consultar
        </button>
      </div>
    </div>
  );
}

export function SearchCep() {
  return (
    <div className="w-auto h-full ">
      <div>
        <label
          htmlFor="first-name"
          className="block text-sm font-semibold leading-6 text-gray-900"
        >
          First name
        </label>
        <div className="mt-2.5">
          <input
            type="text"
            name="first-name"
            id="first-name"
            autoComplete="given-name"
            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <div>
        <button className="w-40 h-14 rounded-full bg-blue text-white">
          Consultar
        </button>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import LocalizationController from "@/controller/cepController";
import ICepData from "@/model/CepModel";

export function SearchCep() {
  const [cep, setCep] = useState("");
  const [cepData, setCepData] = useState<ICepData | null>(null);
  const localizationController = new LocalizationController();

  const handleSearch = async () => {
    const data = await localizationController.searchCep(cep);
    setCepData(data);
  };

  return (
    <div>
      <div className="flex flex-col bg-blue">
        <label
          htmlFor="cep"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          CEP
        </label>
        <input
          type="text"
          id="cep"
          value={cep}
          onChange={(e) => setCep(e.target.value)}
        />
        <button onClick={handleSearch}>Buscar</button>
      </div>
    </div>
  );
}

"use client";

import { GetCep } from "@/controller";
import ICepData from "@/model/CepModel";
import { ClientHttpAxios } from "@/services";
import { InputMask } from "@react-input/mask";
import { useState } from "react";

interface SearchCepProps {
  getCep: (value: ICepData) => void;
}

export function SearchCep({ getCep }: SearchCepProps) {
  const [cep, setCep] = useState("");

  const handleCepChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCep(e.target.value);
  };

  async function handleCep() {
    const client = new ClientHttpAxios();
    const controller = new GetCep(client);
    const data = await controller.getLocalization(cep);
    getCep(data);
  }

  return (
    <div>
      <InputMask
        mask="99999-999"
        placeholder="99999-999"
        onChange={handleCepChange}
      />
      <button onClick={handleCep}>Buscar</button>
    </div>
  );
}

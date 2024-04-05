"use client";

import { useEffect, useState } from "react";

interface SearchCepProps {
  getCep: (value: string) => void;
}

export function SearchCep({ getCep }: SearchCepProps) {
  const [cep, setCep] = useState("");

  const handleCepChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCep(e.target.value);
  };

  useEffect(() => {
    getCep(cep);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cep]);

  return (
    <div>
      <input type="text" onChange={handleCepChange} />
      <button onClick={getCep}>Buscar</button>
    </div>
  );
}

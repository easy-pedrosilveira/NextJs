"use client";

import ICepData from "@/model/CepModel";
import { SearchCep, ResponseSearchCep } from "@/view";
import { Suspense, useState } from "react";

export default function Home() {
  const [responseCep, setResponseCep] = useState<ICepData>();

  const handleGetCep = (cepData: ICepData) => {
    setResponseCep(cepData);
  };

  return (
    <main className="w-full h-[80vh] flex items-center justify-center">
      <div className="w-[85%] h-auto flex justify-between">
        <SearchCep getCep={handleGetCep} />
        <Suspense fallback={<>Carregando...</>}>
          { <ResponseSearchCep responseCepData={responseCep} />}
        </Suspense>
      </div>
    </main>
  );
}

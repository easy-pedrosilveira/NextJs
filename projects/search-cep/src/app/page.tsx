"use client"

import { SearchCep, ResponseSearchCep } from "@/view";
import { IGetLocalization, GetCep } from "@/controller";
import { ClientHttpAxios } from "@/services";
import { useState } from "react";

export default function Home() {
  const [cep, seCep] = useState("")
  async function handleCep() {
    const client = new ClientHttpAxios();
    const controller = new GetCep(client);
    await controller.getLocalization(cep);
  }

  return (
    <main className="w-full h-[80vh] flex items-center justify-center">
      <div className="w-[85%] h-auto flex items-center justify-between bg-blue/45">
        <SearchCep getCep={cep} /> vai fazer a pesquisa
        <ResponseSearchCep /> e aqui vai exibir os itens da pesquisa
      </div>
    </main>
  );
}

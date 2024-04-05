import React from "react";

export function ResponseSearchCep({ cepData }: any) {
  return (
    <div>
      <p>CEP: {cepData.cep}</p>
      <p>Logradouro: {cepData.logradouro}</p>
      <p>Complemento: {cepData.complemento}</p>
      <p>Bairro: {cepData.bairro}</p>
      <p>Localidade: {cepData.localidade}</p>
      <p>UF: {cepData.uf}</p>
      <p>IBGE: {cepData.ibge}</p>
      <p>GIA: {cepData.gia}</p>
      <p>DDD: {cepData.ddd}</p>
      <p>SIAFI: {cepData.siafi}</p>
    </div>
  );
}

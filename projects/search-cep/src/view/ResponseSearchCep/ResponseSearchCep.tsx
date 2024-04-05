import ICepData from "@/model/CepModel";

interface ResponseSearchCepProps {
  responseCepData: ICepData;
}

export function ResponseSearchCep({ responseCepData }: ResponseSearchCepProps) {
  return (
    <div>
      <p>CEP: {responseCepData?.cep}</p>
      <p>Logradouro: {responseCepData?.logradouro}</p>
      <p>Complemento: {responseCepData?.complemento}</p>
      <p>Bairro: {responseCepData?.bairro}</p>
      <p>Localidade: {responseCepData?.localidade}</p>
      <p>UF: {responseCepData?.uf}</p>
      <p>IBGE: {responseCepData?.ibge}</p>
      <p>GIA: {responseCepData?.gia}</p>
      <p>DDD: {responseCepData?.ddd}</p>
      <p>SIAFI: {responseCepData?.siafi}</p>
    </div>
  );
}

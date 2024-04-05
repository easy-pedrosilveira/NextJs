import ICepData from "@/model/CepModel";

interface ResponseSearchCepProps {
  cepData: ICepData;
}

export function ResponseSearchCep({ cepData }: ResponseSearchCepProps) {
  return (
    <div>
      <div>cep: {cepData?.cep}</div>
      <div>complemento: {cepData?.complemento}</div>
      <div>bairro: {cepData?.bairro}</div>
      <div>localidade: {cepData?.localidade}</div>
      <div>uf: {cepData?.uf}</div>
      <div>ibge: {cepData?.ibge}</div>
      <div>gia: {cepData?.gia}</div>
      <div>ddd: {cepData?.ddd}</div>
      <div>siafi: {cepData?.siafi}</div>
    </div>
  );
}

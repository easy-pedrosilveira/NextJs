import { notFound } from "next/navigation";

interface InfoParams {
  params: {
    productId: string;
  };
}

export default function Info({ params }: InfoParams) {
  if (parseInt(params.productId) > 100) notFound();

  return (
    <div>
      <p>Informações do Produto {params?.productId}</p>
    </div>
  );
}

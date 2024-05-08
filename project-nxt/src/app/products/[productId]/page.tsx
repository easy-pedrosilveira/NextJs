interface InfoParams {
  params: {
    productId: number;
  };
}

export default function Info({ params }: InfoParams) {
  return (
    <div>
      <p>Informações do Produto {params?.productId}</p>
    </div>
  );
}

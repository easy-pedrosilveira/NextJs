interface InfoParams {
  params: {
    productId: number;
    reviewId: number;
  };
}

export default function Review({ params }: InfoParams) {
  return (
    <div>
      <p>Produto {params.productId}</p>
      <p>Review {params.reviewId}</p>
    </div>
  );
}

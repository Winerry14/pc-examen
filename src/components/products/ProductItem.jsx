export default function ProductItem({ product, onAdd }) {
  return (
    <div className="card mb-2">
      <div className="card-body d-flex justify-content-between align-items-center">
        <div>
          <div className="fw-semibold">{product.name}</div>
          <div>${product.price}</div>
        </div>
        <button className="btn btn-dark" onClick={() => onAdd(product)}>Agregar</button>
      </div>
    </div>
  );
}

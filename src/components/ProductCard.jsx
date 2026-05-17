import { Link } from "react-router-dom";

export default function ProductCard({ product, onDelete }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <div className="card-body">
        <h3>{product.name}</h3>
        <p className="category">{product.category}</p>
        <p className="price">KES {product.price.toLocaleString()}</p>
        <p className="stock">Stock: {product.stock}</p>
        <Link to={`/products/${product.id}`}>
          <button className="btn btn-primary">View Details</button>
        </Link>
        <button className="btn btn-danger" onClick={() => onDelete(product.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}
